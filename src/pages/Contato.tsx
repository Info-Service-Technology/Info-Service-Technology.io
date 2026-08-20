import {FormEvent,useState} from 'react';
import {Alert,Box,Button,Checkbox,CircularProgress,Container,FormControlLabel,FormHelperText,Grid,MenuItem,TextField,Typography} from '@mui/material';
import {useSearchParams} from 'react-router-dom';
import RecaptchaCheckbox from '../components/RecaptchaCheckbox';
import {getApproximateLocation,getCookieConsent,submitToFormSubmit,validateLeadForm} from '../utils/formSecurity';

const subjects=['Solicitar apresentação executiva','Falar com Relações Institucionais','Gestores Públicos','Inteligência Epidemiológica','Redes Hospitalares','Outros assuntos'];
const whatsappPattern='(?:\\+?55\\s?)?\\(?[1-9]\\d\\)?\\s?9\\d{4}[-\\s]?\\d{4}';

export default function Contato(){
  const [params]=useSearchParams();
  const initial=params.get('assunto')==='relacoes'?subjects[1]:subjects[0];
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const [errorMessage,setErrorMessage]=useState('Não foi possível enviar a mensagem. Tente novamente.');
  const [recaptchaResetKey,setRecaptchaResetKey]=useState(0);

  const submit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=event.currentTarget;
    if(!form.reportValidity()) return;
    const body=new FormData(form);
    const validationError=validateLeadForm(body);
    if(validationError){setErrorMessage(validationError);setStatus('error');return;}
    setStatus('sending');
    try{
      body.append('_subject',`Contato pelo site: ${body.get('assunto')}`);
      body.append('_template','table');
      body.append('localizacao_aproximada',getCookieConsent()==='accepted'?await getApproximateLocation():'Não coletada: cookies opcionais não autorizados');
      await submitToFormSubmit(body);
      form.reset();
      setRecaptchaResetKey((value)=>value+1);
      setStatus('success');
    }catch{
      setErrorMessage('Não foi possível enviar a mensagem. Tente novamente.');
      setStatus('error');
    }
  };

  return <Box sx={{py:{xs:8,md:12},bgcolor:'#f8f9fa'}}><Container><Grid container spacing={7}><Grid item xs={12} md={5}><Typography variant="overline" color="#d81159" fontWeight={800}>CONTATO</Typography><Typography variant="h1" sx={{mt:2}}>Como podemos ajudar?</Typography><Typography color="text.secondary" mt={3} fontSize={17}>Escolha o assunto e envie sua mensagem. Nossa equipe responderá pelo e-mail informado.</Typography></Grid><Grid item xs={12} md={7}><Box component="form" onSubmit={submit} noValidate={false} sx={{bgcolor:'#fff',border:'1px solid #e0e0e0',p:{xs:3,md:5}}}><input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display:'none'}}/><input type="hidden" name="_captcha" value="true"/><Grid container spacing={2}><Grid item xs={12}><TextField select required fullWidth name="assunto" label="Assunto do contato" defaultValue={initial}>{subjects.map(subject=><MenuItem key={subject} value={subject}>{subject}</MenuItem>)}</TextField></Grid><Grid item xs={12} sm={6}><TextField required fullWidth name="nome" label="Nome completo" inputProps={{minLength:2,maxLength:80,pattern:"[A-Za-zÀ-ÖØ-öø-ÿ'’ -]+"}}/></Grid><Grid item xs={12} sm={6}><TextField required fullWidth name="email" type="email" label="E-mail institucional" inputProps={{maxLength:160}}/></Grid><Grid item xs={12} sm={6}><TextField required fullWidth name="instituicao" label="Empresa / Instituição"/></Grid><Grid item xs={12} sm={6}><TextField required fullWidth name="telefone" type="tel" label="WhatsApp" inputMode="tel" inputProps={{pattern:whatsappPattern,maxLength:19}}/></Grid><Grid item xs={12}><TextField required fullWidth name="mensagem" multiline rows={5} label="Mensagem"/></Grid><Grid item xs={12}><FormControlLabel control={<Checkbox required name="consentimento_privacidade" value="sim"/>} label={<Typography variant="body2">Li e concordo com a <a href="/privacidade">Política de Privacidade</a>.</Typography>}/><FormHelperText>O consentimento é necessário para que possamos responder ao seu contato.</FormHelperText></Grid><Grid item xs={12}><RecaptchaCheckbox resetKey={recaptchaResetKey}/></Grid><Grid item xs={12}><Button type="submit" disabled={status==='sending'} variant="contained" size="large" startIcon={status==='sending'?<CircularProgress size={18}/>:undefined}>{status==='sending'?'Enviando...':'Enviar mensagem'}</Button></Grid>{status==='success'&&<Grid item xs={12}><Alert severity="success" onClose={()=>setStatus('idle')}>Mensagem enviada com sucesso, em breve nossa equipe entrará em contato</Alert></Grid>}{status==='error'&&<Grid item xs={12}><Alert severity="error" onClose={()=>setStatus('idle')}>{errorMessage}</Alert></Grid>}</Grid></Box></Grid></Grid></Container></Box>;
}
