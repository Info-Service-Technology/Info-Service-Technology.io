import {FormEvent,useCallback,useState} from 'react';
import {Alert,Box,Button,Checkbox,CircularProgress,Container,FormControlLabel,Grid,Link as MuiLink,MenuItem,TextField,Typography} from '@mui/material';
import {Link,useSearchParams} from 'react-router-dom';
import Recaptcha from '../components/Recaptcha';
import {usePrivacy} from '../privacy/PrivacyContext';
import {appendLocation,normalizePhone,sendContact,validateContact} from '../utils/contactForm';

const subjects=['Solicitar apresentação executiva','Falar com Relações Institucionais','Gestores Públicos','Inteligência Epidemiológica','Redes Hospitalares','Outros assuntos'];
export default function Contato(){
  const[params]=useSearchParams();const requested=params.get('assunto');const initial=requested==='relacoes'?subjects[1]:requested==='privacidade'?subjects[5]:subjects[0];
  const[status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');const[error,setError]=useState('');const[token,setToken]=useState('');const[resetKey,setResetKey]=useState(0);const{location}=usePrivacy();
  const captchaChanged=useCallback((value:string)=>setToken(value),[]);
  const submit=async(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const body=new FormData(form);const validationError=validateContact(body);if(validationError){setError(validationError);setStatus('error');return}if(!token){setError('Confirme o reCAPTCHA antes de enviar.');setStatus('error');return}setStatus('sending');setError('');try{body.set('telefone',normalizePhone(String(body.get('telefone')??'')));body.append('recaptchaToken',token);appendLocation(body,location);await sendContact(body);form.reset();setStatus('success');setResetKey(value=>value+1)}catch(caught){setError(caught instanceof Error?caught.message:'Não foi possível enviar a mensagem. Tente novamente.');setStatus('error');setResetKey(value=>value+1)}};
  return <Box sx={{py:{xs:8,md:12},bgcolor:'#f8f9fa'}}><Container><Grid container spacing={7}><Grid item xs={12} md={5}><Typography variant="overline" color="#d81159" fontWeight={800}>CONTATO</Typography><Typography variant="h1" sx={{mt:2}}>Como podemos ajudar?</Typography><Typography color="text.secondary" mt={3} fontSize={17}>Escolha o assunto e envie sua mensagem. Nossa equipe responderá pelo e-mail informado.</Typography></Grid><Grid item xs={12} md={7}><Box component="form" onSubmit={submit} noValidate sx={{bgcolor:'#fff',border:'1px solid #e0e0e0',p:{xs:3,md:5}}}><Grid container spacing={2}>
    <Grid item xs={12}><TextField select required fullWidth name="assunto" label="Assunto do contato" defaultValue={initial}>{subjects.map(subject=><MenuItem key={subject} value={subject}>{subject}</MenuItem>)}</TextField></Grid>
    <Grid item xs={12} sm={6}><TextField required fullWidth name="nome" label="Nome completo" autoComplete="name" inputProps={{minLength:5,maxLength:120}} helperText="Informe nome e sobrenome."/></Grid>
    <Grid item xs={12} sm={6}><TextField required fullWidth name="email" type="email" label="E-mail institucional" autoComplete="email" inputProps={{maxLength:254}}/></Grid>
    <Grid item xs={12} sm={6}><TextField required fullWidth name="instituicao" label="Empresa / Instituição" inputProps={{minLength:2,maxLength:160}}/></Grid>
    <Grid item xs={12} sm={6}><TextField required fullWidth name="telefone" type="tel" label="Telefone - WhatsApp" autoComplete="tel" inputProps={{inputMode:'tel',minLength:10,maxLength:20}} helperText="DDD + número; inclua o país se necessário."/></Grid>
    <Grid item xs={12}><TextField required fullWidth name="mensagem" multiline rows={5} label="Mensagem" inputProps={{minLength:10,maxLength:4000}}/></Grid>
    <Box component="input" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" sx={{position:'absolute',left:'-10000px',width:1,height:1}}/>
    <Grid item xs={12}><FormControlLabel required control={<Checkbox required name="privacidade" value="aceito"/>} label={<Typography variant="body2">Li e concordo com a <MuiLink component={Link} to="/privacidade">Política de Privacidade e DPO</MuiLink>.</Typography>}/></Grid>
    <Grid item xs={12}><Recaptcha onChange={captchaChanged} resetKey={resetKey}/></Grid>
    <Grid item xs={12}><Button type="submit" disabled={status==='sending'} variant="contained" size="large" startIcon={status==='sending'?<CircularProgress size={18}/>:undefined}>{status==='sending'?'Enviando...':'Enviar mensagem'}</Button></Grid>
    {status==='success'&&<Grid item xs={12}><Alert severity="success" onClose={()=>setStatus('idle')}>Mensagem enviada com sucesso, em breve nossa equipe entrará em contato</Alert></Grid>}{status==='error'&&<Grid item xs={12}><Alert severity="error" onClose={()=>setStatus('idle')}>{error}</Alert></Grid>}
  </Grid></Box></Grid></Grid></Container></Box>
}
