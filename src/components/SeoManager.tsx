import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useLanguage} from '../i18n/LanguageContext';
import {translateContent} from '../i18n/contentTranslations';
const base='https://www.infoservicetechnology.com.br';
const pages:Record<string,[string,string]>={
  '/':['InfoService | Inteligência de dados em saúde','Inteligência preditiva para gestão pública, redes hospitalares e vigilância epidemiológica.'],
  '/ecossistema':['Ecossistema HDI | InfoService','Arquitetura integrada e governada para toda a jornada da informação em saúde.'],
  '/tecnologia':['Tecnologia e Inteligência de Dados | InfoService','Tecnologia cloud-native, modelos preditivos e interoperabilidade para o setor da saúde.'],
  '/governanca':['Governança e Compliance em Saúde | InfoService','Segurança, LGPD, auditoria e governança de acesso para informações de saúde.'],
  '/blog':['Blog de Inteligência de Dados em Saúde | InfoService','Conteúdo institucional sobre tecnologia, modelos preditivos e gestão da saúde.'],
  '/contato':['Contato e Apresentação Executiva | InfoService','Fale com a InfoService e solicite uma apresentação da plataforma HDI.'],
  '/privacidade':['Política de Privacidade e DPO | InfoService','Saiba como a InfoService trata dados pessoais, cookies, localização aproximada e solicitações à privacidade.'],
  '/gestao-publica':['Inteligência para Gestores Públicos | InfoService','Evidências e inteligência territorial para municípios, estados e secretarias de saúde.'],
  '/saude-privada':['Inteligência para Redes Hospitalares | InfoService','Eficiência operacional e melhores desfechos para redes hospitalares e saúde privada.'],
  '/epidemiologia':['Inteligência Epidemiológica | InfoService','Antecipação de riscos e fortalecimento da vigilância epidemiológica do território.'],
  '/blog/predicao-de-doencas':['Predição de Doenças com Tecnologia | InfoService','Como a tecnologia e a ciência de dados apoiam a predição e a prevenção de doenças.'],
  '/blog/modelos-preditivos':['Modelos Preditivos na Gestão da Saúde | InfoService','Entenda como modelos preditivos apoiam decisões e transformam a gestão da saúde.'],
  '/blog/parcerias-estrategicas':['Parcerias Estratégicas no Mercado de Saúde | InfoService','Como colaborações estratégicas impulsionam inovação e expansão no mercado de saúde.'],
};
function meta(name:string,content:string,property=false){const selector=property?`meta[property="${name}"]`:`meta[name="${name}"]`;let element=document.head.querySelector<HTMLMetaElement>(selector);if(!element){element=document.createElement('meta');element.setAttribute(property?'property':'name',name);document.head.appendChild(element)}element.content=content}
export default function SeoManager(){const{pathname}=useLocation();const{language}=useLanguage();useEffect(()=>{const[sourceTitle,sourceDescription]=pages[pathname]||pages['/'];const title=translateContent(sourceTitle,language);const description=translateContent(sourceDescription,language);document.title=title;meta('description',description);meta('og:title',title,true);meta('og:description',description,true);meta('og:type',pathname.startsWith('/blog/')?'article':'website',true);meta('og:url',base+pathname,true);let canonical=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=base+pathname},[pathname,language]);return null}
