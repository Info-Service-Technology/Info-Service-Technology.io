import {useEffect,useState} from 'react';
import {Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,FormControlLabel,Stack,Switch,Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {ConsentPreferences,usePrivacy} from '../privacy/PrivacyContext';

export default function CookieConsent(){
  const{preferences,hasChoice,settingsOpen,closeSettings,savePreferences}=usePrivacy();
  const[draft,setDraft]=useState<ConsentPreferences>(preferences);
  useEffect(()=>setDraft(preferences),[preferences,settingsOpen]);
  const save=(next:ConsentPreferences)=>{setDraft(next);savePreferences(next)};
  return <Dialog open={settingsOpen} onClose={closeSettings} aria-labelledby="cookie-title" maxWidth="xs" fullWidth disableEscapeKeyDown={!hasChoice}>
    <DialogTitle id="cookie-title" sx={{fontWeight:800}}>Aviso de Cookies e Privacidade</DialogTitle>
    <DialogContent>
      <Typography color="text.secondary" lineHeight={1.65}>Usamos armazenamento necessário para lembrar suas preferências. Com sua autorização, também podemos obter uma localização aproximada para contextualizar seu atendimento. Leia nossa <Link to="/privacidade" onClick={closeSettings} style={{color:'#0077b6',textDecoration:'underline'}}>Política de Privacidade</Link>.</Typography>
      <Typography variant="body2" sx={{mt:2,fontWeight:700}}>Ao continuar e registrar sua escolha, você declara ter lido os termos de privacidade.</Typography>
      <Stack mt={3} spacing={1}>
        <FormControlLabel control={<Switch checked disabled/>} label="Cookies necessários (sempre ativos)"/>
        <FormControlLabel control={<Switch checked={draft.analytics} onChange={(_,checked)=>setDraft(current=>({...current,analytics:checked}))}/>} label="Medição de uso (opcional)"/>
        <FormControlLabel control={<Switch checked={draft.location} onChange={(_,checked)=>setDraft(current=>({...current,location:checked}))}/>} label="Localização aproximada (opcional)"/>
      </Stack>
      <Box sx={{mt:2,p:1.5,bgcolor:'#f6f7f9',border:'1px solid #e0e0e0'}}><Typography variant="caption" color="text.secondary">A localização usa a permissão do navegador, tem precisão reduzida e só é anexada quando você envia um formulário. A recusa não impede o uso do site.</Typography></Box>
    </DialogContent>
    <DialogActions sx={{p:3,pt:0,display:'grid',gap:1}}>
      <Button fullWidth variant="contained" onClick={()=>save({necessary:true,analytics:true,location:true})}>Aceitar todos</Button>
      <Button fullWidth variant="outlined" onClick={()=>save({necessary:true,analytics:false,location:false})}>Aceitar somente necessários</Button>
      <Button fullWidth variant="text" onClick={()=>save(draft)}>Salvar preferências</Button>
    </DialogActions>
  </Dialog>
}
