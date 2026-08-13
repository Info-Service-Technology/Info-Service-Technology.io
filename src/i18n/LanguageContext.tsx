import {createContext,useContext,useEffect,useMemo,useState} from 'react';
export type Language='pt-BR'|'en'|'fr'|'es'|'pt-PT';
const messages={
  'pt-BR':{ecosystem:'Ecossistema',technology:'Tecnologia',governance:'Governança',blog:'Blog',solutions:'Soluções',contact:'Contato',restricted:'Área Restrita',public:'Gestores Públicos',epidemiology:'Inteligência Epidemiológica',hospitals:'Redes Hospitalares'},
  en:{ecosystem:'Ecosystem',technology:'Technology',governance:'Governance',blog:'Blog',solutions:'Solutions',contact:'Contact',restricted:'Restricted Area',public:'Public Managers',epidemiology:'Epidemiological Intelligence',hospitals:'Hospital Networks'},
  fr:{ecosystem:'Écosystème',technology:'Technologie',governance:'Gouvernance',blog:'Blog',solutions:'Solutions',contact:'Contact',restricted:'Espace réservé',public:'Gestionnaires publics',epidemiology:'Intelligence épidémiologique',hospitals:'Réseaux hospitaliers'},
  es:{ecosystem:'Ecosistema',technology:'Tecnología',governance:'Gobernanza',blog:'Blog',solutions:'Soluciones',contact:'Contacto',restricted:'Área restringida',public:'Gestores públicos',epidemiology:'Inteligencia epidemiológica',hospitals:'Redes hospitalarias'},
  'pt-PT':{ecosystem:'Ecossistema',technology:'Tecnologia',governance:'Governação',blog:'Blog',solutions:'Soluções',contact:'Contacto',restricted:'Área Reservada',public:'Gestores Públicos',epidemiology:'Inteligência Epidemiológica',hospitals:'Redes Hospitalares'},
} as const;
type Context={language:Language;setLanguage:(value:Language)=>void;t:(key:keyof typeof messages['pt-BR'])=>string};
const LanguageContext=createContext<Context|null>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){
  const [language, setLanguageState] = useState<Language>(() => {
    const saved=localStorage.getItem('infoservice-language');
    return saved&&saved in messages?saved as Language:'pt-BR';
  });
  useEffect(() => { document.documentElement.lang = language }, [language]);

  const setLanguage = (value: Language) => {
    localStorage.setItem('infoservice-language', value);
    setLanguageState(value);
  };

  const value = useMemo(() => ({ language, setLanguage, t: (key: keyof typeof messages['pt-BR']) => messages[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
export function useLanguage(){const value=useContext(LanguageContext);if(!value)throw new Error('LanguageProvider ausente');return value}
