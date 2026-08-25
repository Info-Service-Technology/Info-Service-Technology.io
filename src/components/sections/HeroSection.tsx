import {Box,Button,Container,Stack,Typography} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import SectionTag from '../SectionTag';
import {useLanguage} from '../../i18n/LanguageContext';
import {translateContent} from '../../i18n/contentTranslations';

export default function HeroSection({tag,title,body,image='/hero.png',compact=false,fullHeight=false,highlight}:{tag?:string;title:string;body?:string;image?:string;compact?:boolean;fullHeight?:boolean;highlight?:string}) {
  const {language}=useLanguage();
  const home = !compact && title.includes('gestão da saúde');
  const sourceMarked = highlight || (home ? 'gestão da saúde' : undefined);
  const translatedTitle=translateContent(title,language);
  const marked = sourceMarked ? translateContent(sourceMarked,language) : undefined;
  const parts = marked ? translatedTitle.split(marked) : [translatedTitle];
  const sourceTag = tag || (home ? '• VISÃO GERAL DO TERRITÓRIO · PLATAFORMA CORPORATIVA' : undefined);
  const displayTag=sourceTag?translateContent(sourceTag,language):undefined;
  const displayBody=body?translateContent(body,language):undefined;
  return <Box component="section" sx={{minHeight:fullHeight?'calc(100vh - 80px)':compact?430:'calc(100vh - 80px)',display:'flex',alignItems:'center',color:'white',backgroundColor:'#101828',backgroundImage:`linear-gradient(to right,rgba(16,24,40,.98) 5%,rgba(16,24,40,.86) 43%,rgba(16,24,40,.08) 78%),url("${image}")`,backgroundSize:'cover',backgroundPosition:'center right',backgroundRepeat:'no-repeat'}}>
    <Container maxWidth="lg" sx={{px:{xs:3,md:5}}}>
      <Box maxWidth={home?700:760} sx={{ml:{lg:home?2:0}}}>
        {displayTag&&<SectionTag color="#00d5f2">{displayTag}</SectionTag>}
        <Typography variant="h1" sx={{mt:2,maxWidth:720}}>{parts[0]}{marked&&<Box component="span" sx={{color:'#00d5f2'}}>{marked}</Box>}{parts[1]}</Typography>
        {displayBody&&<Typography sx={{mt:3,fontSize:{xs:16,md:17},lineHeight:1.5,color:'#e0e5ed',maxWidth:650}}>{displayBody}</Typography>}
        {!compact&&<Stack direction={{xs:'column',sm:'row'}} spacing={2} mt={4}><Button component={Link} to="/ecossistema" variant="contained" endIcon={<ArrowForward/>}>{translateContent('Explorar o Ecossistema',language)}</Button><Button component={Link} to="/contato?assunto=relacoes" variant="outlined" sx={{color:'white',borderColor:'#8290a4'}}>{translateContent('Falar com Relações Institucionais',language)}</Button></Stack>}
      </Box>
    </Container>
  </Box>;
}
