import {useEffect,useRef,useState} from 'react';
import {Alert,Box} from '@mui/material';

type RecaptchaApi={
  ready?:(callback:()=>void)=>void;
  render?:(element:HTMLElement,options:Record<string,unknown>)=>number;
  reset?:(id:number)=>void;
  enterprise?:RecaptchaApi;
};
declare global{interface Window{grecaptcha?:RecaptchaApi}}

type Props={onChange:(token:string)=>void;resetKey:number};
const siteKey=import.meta.env.VITE_RECAPTCHA_SITE_KEY as string|undefined;

export default function Recaptcha({onChange,resetKey}:Props){
  const container=useRef<HTMLDivElement>(null);const widget=useRef<number|undefined>(undefined);const[loadError,setLoadError]=useState(false);
  useEffect(()=>{
    if(!siteKey)return;
    let active=true;let attempts=0;let intervalId:number|undefined;
    const getApi=()=>{
      const root=window.grecaptcha;
      if(typeof root?.render==='function')return root;
      if(typeof root?.enterprise?.render==='function')return root.enterprise;
      return undefined;
    };
    const renderWidget=()=>{
      if(!active||!container.current||widget.current!==undefined)return;
      const api=getApi();if(!api?.render)return;
      widget.current=api.render(container.current,{sitekey:siteKey,callback:(token:string)=>onChange(token),'expired-callback':()=>onChange(''),'error-callback':()=>onChange('')});
      setLoadError(false);if(intervalId)window.clearInterval(intervalId);
    };
    const waitForApi=()=>{
      const api=getApi();
      if(api){typeof api.ready==='function'?api.ready(renderWidget):renderWidget();return}
      attempts+=1;if(attempts>=150){if(intervalId)window.clearInterval(intervalId);if(active)setLoadError(true)}
    };
    const existing=document.querySelector<HTMLScriptElement>('script[data-infoservice-recaptcha]');
    const loaded=()=>waitForApi();const failed=()=>active&&setLoadError(true);
    if(existing){existing.addEventListener('load',loaded);existing.addEventListener('error',failed)}else{const script=document.createElement('script');script.src='https://www.google.com/recaptcha/api.js?render=explicit';script.async=true;script.defer=true;script.dataset.infoserviceRecaptcha='true';script.addEventListener('load',loaded);script.addEventListener('error',failed);document.head.appendChild(script)}
    intervalId=window.setInterval(waitForApi,100);waitForApi();
    return()=>{active=false;if(intervalId)window.clearInterval(intervalId);const script=document.querySelector<HTMLScriptElement>('script[data-infoservice-recaptcha]');script?.removeEventListener('load',loaded);script?.removeEventListener('error',failed)};
  },[onChange]);
  useEffect(()=>{const root=window.grecaptcha;const api=typeof root?.reset==='function'?root:root?.enterprise;if(widget.current!==undefined&&typeof api?.reset==='function')api.reset(widget.current);onChange('')},[resetKey,onChange]);
  if(!siteKey)return <Alert severity="warning">Configure VITE_RECAPTCHA_SITE_KEY para habilitar o reCAPTCHA.</Alert>;
  if(loadError)return <Alert severity="error">Não foi possível carregar o reCAPTCHA. Verifique a conexão, bloqueadores e os domínios autorizados.</Alert>;
  return <Box ref={container} sx={{minHeight:78,overflowX:'auto'}}/>;
}
