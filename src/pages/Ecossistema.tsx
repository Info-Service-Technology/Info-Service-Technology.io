import {Box,Container} from '@mui/material';
import HeroSection from '../components/sections/HeroSection';
import TechnicalMatrix from '../components/sections/TechnicalMatrix';
import ValueFlow from '../components/sections/ValueFlow';

const items=[
  ['Ingestão multi-fonte','Conectores FHIR, HL7 v2, ETL/ELT e APIs REST para HIS, LIS, RNDS, DATASUS e sistemas legados.'],
  ['Camada semântica','Modelo canônico de saúde com catálogo, linhagem e qualidade contínua.'],
  ['IA & modelos preditivos','Motores de risco populacional, demanda assistencial e séries temporais.'],
  ['Orquestração de decisões','Alertas, painéis executivos e APIs inseridos nos processos existentes.'],
  ['Governança soberana','Anonimização, criptografia, perfis de acesso e auditoria fim a fim.'],
  ['Interoperabilidade','Padrões abertos para conversar com qualquer ecossistema.'],
].map(([title,description])=>({title,description}));

export default function Ecossistema(){
  return <>
    <HeroSection compact fullHeight image="/hero.png" imagePosition="right top" tag="O ECOSSISTEMA" title="Uma arquitetura única para toda a jornada do dado em saúde." body="Do sistema hospitalar mais crítico ao indicador socioeconômico municipal — o HDI harmoniza, governa e transforma informações em inteligência acionável para o território."/>
    <Box sx={{py:{xs:9,md:13}}}><Container><TechnicalMatrix items={items}/></Container></Box>
    <ValueFlow/>
  </>;
}
