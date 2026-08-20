import {useEffect,useState} from 'react';
import {Box,Button,Stack,Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {getCookieConsent} from '../utils/formSecurity';

export type CookieConsentChoice = 'accepted' | 'necessary';
const consentKey = 'infoservice-cookie-consent';
const consentCookie = 'infoservice_cookie_consent';

function saveCookieConsent(choice: CookieConsentChoice): void {
  document.cookie = `${consentCookie}=${choice}; Max-Age=31536000; Path=/; SameSite=Lax`;
  window.localStorage.setItem(consentKey, choice);
}

export default function PrivacyConsent() {
  const [visible,setVisible] = useState(false);

  useEffect(() => {
    setVisible(!getCookieConsent());
  },[]);

  const choose = (choice: CookieConsentChoice) => {
    saveCookieConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return <Box role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title" sx={{position:'fixed',zIndex:1400,bottom:0,left:0,right:0,bgcolor:'#fff',borderTop:'1px solid #d9dfe8',boxShadow:'0 -4px 18px rgba(11,19,43,.12)',p:{xs:2.5,md:3}}}>
    <Box sx={{maxWidth:1200,mx:'auto',display:'flex',gap:2,alignItems:{md:'center'},justifyContent:'space-between',flexDirection:{xs:'column',md:'row'}}}>
      <Box sx={{maxWidth:760}}>
        <Typography id="cookie-consent-title" fontWeight={800} color="#133c75">Cookies e localização</Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt:.75}}>Utilizamos um cookie necessário para lembrar sua escolha e, nos formulários, o reCAPTCHA pode usar o cookie técnico necessário do Google para a proteção contra abuso. Com sua autorização, também podemos solicitar a localização aproximada pelo navegador para contextualizar o atendimento. Você pode recusar os opcionais e alterar a decisão limpando os cookies do navegador.</Typography>
        <Typography variant="body2" sx={{mt:1}}><RouterLink to="/privacidade">Leia a Política de Privacidade e o canal do DPO</RouterLink>.</Typography>
      </Box>
      <Stack direction={{xs:'column',sm:'row'}} spacing={1.25} sx={{flexShrink:0}}>
        <Button variant="outlined" color="primary" onClick={() => choose('necessary')}>Recusar opcionais</Button>
        <Button variant="contained" color="primary" onClick={() => choose('accepted')}>Aceitar cookies opcionais</Button>
      </Stack>
    </Box>
  </Box>;
}
