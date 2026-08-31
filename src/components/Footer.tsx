import {Box,Button,Container,Divider,Grid,IconButton,Stack,Tooltip,Typography} from '@mui/material';
import {Android,Apple,ArrowForward,Facebook,Instagram,LinkedIn,YouTube} from '@mui/icons-material';
import {Link,useLocation} from 'react-router-dom';

const mutedButtonSx={color:'#fff',borderColor:'rgba(255,255,255,.28)','&.Mui-disabled':{color:'rgba(255,255,255,.76)',borderColor:'rgba(255,255,255,.22)'}};

function ComingSoonIcon({label,children}:{label:string;children:React.ReactNode}){return <Tooltip title="Em breve"><span><IconButton disabled aria-label={`${label} — em breve`} sx={{'&.Mui-disabled':{color:'rgba(255,255,255,.78)'}}}>{children}</IconButton></span></Tooltip>}
function FooterLinks(){return <Stack direction="row" spacing={{xs:2,md:3}} useFlexGap flexWrap="wrap" sx={{'& a':{color:'#c8c8c8',fontSize:13,textDecoration:'none','&:hover':{color:'#fff'}}}}><Link to="/ecossistema">Ecossistema</Link><Link to="/solucoes">Soluções</Link><Link to="/tecnologia">Tecnologia</Link><Link to="/governanca">Governança</Link><Link to="/blog">Blog</Link><Link to="/contato">Contato</Link></Stack>}

function InstitutionalFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#181818', color: '#fff', pt: { xs: 7, md: 8 }, pb: 4 }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          
          {/* COLUNA 1: INFO E ENDEREÇO */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 800, fontSize: 24 }}>InfoService</Typography>
            <Typography sx={{ fontSize: 12, color: '#38a3ff', mt: .25 }}>
              HealthTech/Data & AI
            </Typography>
           
            
           
          </Grid>

          {/* COLUNA 2: REDES SOCIAIS */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography fontWeight={800} mb={1.5}>Presença digital</Typography>
            <Stack direction="row" spacing={.5}>
              <ComingSoonIcon label="Instagram"><Instagram /></ComingSoonIcon>
              <ComingSoonIcon label="LinkedIn"><LinkedIn /></ComingSoonIcon>
              <ComingSoonIcon label="Facebook"><Facebook /></ComingSoonIcon>
              <ComingSoonIcon label="YouTube"><YouTube /></ComingSoonIcon>
            </Stack>
            <Typography variant="caption" color="#8f8f8f">Canais oficiais em breve</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             {/* ENDEREÇO INSERIDO AQUI */}
            <Typography sx={{ color: '#8f8f8f', fontSize: 13, lineHeight: 1.5, mt: 3 }}>
              Av. Getúlio Vargas, 335 — Quitandinha<br />
              Petrópolis/RJ — CEP 25651-075
            </Typography>
            </Grid>
          {/* COLUNA 3: APPLICATIVOS */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography fontWeight={800} mb={2}>Baixe o aplicativo</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="flex-start">
              <Button disabled variant="outlined" startIcon={<Apple />} sx={mutedButtonSx}>App Store</Button>
              <Button disabled variant="outlined" startIcon={<Android />} sx={mutedButtonSx}>Google Play</Button>
            </Stack>
            <Typography variant="caption" color="#8f8f8f" display="block" mt={1.5}>
              Aplicativos em desenvolvimento
            </Typography>
          </Grid>

        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,.13)', my: 4 }} />

        {/* LINKS DO RODAPÉ */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} justifyContent="space-between" alignItems={{ md: 'center' }}>
          <FooterLinks />
          <Stack direction="row" spacing={2.5} useFlexGap flexWrap="wrap" sx={{ '& a': { color: '#c8c8c8', fontSize: 13, textDecoration: 'none', '&:hover': { color: '#fff' } } }}>
            <Link to="/privacidade">Política de Privacidade</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
function HomeContact(){return <Box id="contato" sx={{bgcolor:'#181818',color:'#fff',py:{xs:8,md:10},borderBottom:'1px solid rgba(255,255,255,.12)'}}><Container maxWidth={false} sx={{px:{xs:3,md:5}}}><Grid container alignItems="center" spacing={6}><Grid item xs={12} md={5} sx={{position:'relative',isolation:'isolate','&:before,&:after':{content:'""',position:'absolute',width:{xs:120,md:155},height:{xs:120,md:155},border:'1px solid rgba(255,255,255,.22)',transform:'rotate(45deg)',zIndex:-1,top:{xs:35,md:18}},'&:before':{left:{xs:80,md:100}},'&:after':{left:{xs:185,md:250}}}}><Typography variant="overline" sx={{color:'#d81159',fontWeight:800,letterSpacing:2.4}}>RELAÇÕES INSTITUCIONAIS</Typography><Typography variant="h2" sx={{maxWidth:560,mt:2}}>Pronto para transformar dados em decisões de saúde?</Typography></Grid><Grid item xs={12} md={7}><Typography sx={{color:'#d4d4d4',fontSize:17,maxWidth:650,mb:4}}>Nossa equipe corporativa atende governos, secretarias e redes hospitalares com projetos sob medida de integração e inteligência de dados.</Typography><Stack direction={{xs:'column',sm:'row'}} spacing={2}><Button component={Link} to="/contato?assunto=apresentacao" variant="contained" color="secondary" endIcon={<ArrowForward/>}>Solicitar apresentação executiva</Button><Button component={Link} to="/blog" variant="outlined" sx={{color:'#fff',borderColor:'#666'}}>Ver casos de sucesso</Button></Stack></Grid></Grid></Container></Box>}

export default function Footer(){const{pathname}=useLocation();return <>{pathname==='/'&&<HomeContact/>}<InstitutionalFooter/></>}
