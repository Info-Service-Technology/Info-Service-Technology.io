import {createContext,useCallback,useContext,useEffect,useMemo,useState} from 'react';

export type ConsentPreferences={necessary:true;analytics:boolean;location:boolean};
export type VisitorLocation={latitude:number;longitude:number;accuracy:number}|null;

const CONSENT_KEY='infoservice-consent-v1';
const defaultPreferences:ConsentPreferences={necessary:true,analytics:false,location:false};

type PrivacyContextValue={
  preferences:ConsentPreferences;
  hasChoice:boolean;
  settingsOpen:boolean;
  location:VisitorLocation;
  locationError:string;
  openSettings:()=>void;
  closeSettings:()=>void;
  savePreferences:(preferences:ConsentPreferences)=>void;
};

const PrivacyContext=createContext<PrivacyContextValue|null>(null);

function readConsent(){
  try{
    const stored=localStorage.getItem(CONSENT_KEY);
    if(!stored)return null;
    const parsed=JSON.parse(stored) as Partial<ConsentPreferences>;
    return {necessary:true,analytics:Boolean(parsed.analytics),location:Boolean(parsed.location)} as ConsentPreferences;
  }catch{return null}
}

export function PrivacyProvider({children}:{children:React.ReactNode}){
  const initial=readConsent();
  const[preferences,setPreferences]=useState<ConsentPreferences>(initial??defaultPreferences);
  const[hasChoice,setHasChoice]=useState(Boolean(initial));
  const[settingsOpen,setSettingsOpen]=useState(!initial);
  const[location,setLocation]=useState<VisitorLocation>(null);
  const[locationError,setLocationError]=useState('');

  useEffect(()=>{
    if(!preferences.location){setLocation(null);setLocationError('');return}
    if(!('geolocation'in navigator)){setLocationError('Localização não disponível neste navegador.');return}
    navigator.geolocation.getCurrentPosition(
      position=>setLocation({
        latitude:Number(position.coords.latitude.toFixed(3)),
        longitude:Number(position.coords.longitude.toFixed(3)),
        accuracy:Math.round(position.coords.accuracy),
      }),
      ()=>setLocationError('Não foi possível obter a localização. Verifique a permissão do navegador.'),
      {enableHighAccuracy:false,timeout:10000,maximumAge:30*60*1000},
    );
  },[preferences.location]);

  const savePreferences=useCallback((next:ConsentPreferences)=>{
    localStorage.setItem(CONSENT_KEY,JSON.stringify(next));
    document.cookie=`infoservice_consent=${encodeURIComponent(JSON.stringify(next))}; Max-Age=15552000; Path=/; SameSite=Lax; Secure`;
    setPreferences(next);setHasChoice(true);setSettingsOpen(false);
  },[]);

  const value=useMemo(()=>({preferences,hasChoice,settingsOpen,location,locationError,openSettings:()=>setSettingsOpen(true),closeSettings:()=>hasChoice&&setSettingsOpen(false),savePreferences}),[preferences,hasChoice,settingsOpen,location,locationError,savePreferences]);
  return <PrivacyContext.Provider value={value}>{children}</PrivacyContext.Provider>
}

export function usePrivacy(){const value=useContext(PrivacyContext);if(!value)throw new Error('PrivacyProvider ausente');return value}
