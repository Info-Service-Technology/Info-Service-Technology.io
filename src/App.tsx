import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SeoManager from './components/SeoManager';
import PageTranslator from './i18n/PageTranslator';
import PrivacyConsent from './components/PrivacyConsent';
import Home from './pages/Home';
import HomeExtras from './pages/HomeExtras';
import Ecossistema from './pages/Ecossistema';
import Solucoes from './pages/Solucoes';
import Tecnologia from './pages/Tecnologia';
import Governanca from './pages/Governanca';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';
import {modelos,parcerias,predicao} from './pages/blogArticles';
import InteligenciaEpidemiologica from './pages/InteligenciaEpidemiologica';
import SaudePrivada from './pages/SaudePrivada';
import GestaoPublica from './pages/GestaoPublica';
import NotFound from './pages/NotFound';
import ClusterHDI from './pages/ClusterHDI';

function Scroll(){
  const {pathname}=useLocation();
  useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});},[pathname]);
  return null;
}

export default function App(){
  return <BrowserRouter>
    <Scroll/>
    <SeoManager/>
    <Navbar/>
    <PageTranslator/>
    <Routes>
      <Route path="/" element={<><Home/><HomeExtras/></>}/>
      <Route path="/ecossistema" element={<Ecossistema/>}/>
      <Route path="/cluster-hdi" element={<ClusterHDI/>}/>
      <Route path="/solucoes" element={<Solucoes/>}/>
      <Route path="/tecnologia" element={<Tecnologia/>}/>
      <Route path="/governanca" element={<Governanca/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/predicao-de-doencas" element={<BlogArticle article={predicao}/>}/>
      <Route path="/blog/modelos-preditivos" element={<BlogArticle article={modelos}/>}/>
      <Route path="/blog/parcerias-estrategicas" element={<BlogArticle article={parcerias}/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/privacidade" element={<Privacidade/>}/>
      <Route path="/epidemiologia" element={<InteligenciaEpidemiologica/>}/>
      <Route path="/saude-privada" element={<SaudePrivada/>}/>
      <Route path="/gestao-publica" element={<GestaoPublica/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <PrivacyConsent/>
  </BrowserRouter>;
}
