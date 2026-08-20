import {FormEvent,useState} from 'react';
import {Alert,Box,Button,Checkbox,CircularProgress,Container,FormControlLabel,FormHelperText,Grid,MenuItem,TextField,Typography} from '@mui/material';
import RecaptchaCheckbox from '../RecaptchaCheckbox';
import {getApproximateLocation,getCookieConsent,submitToFormSubmit,validateLeadForm} from '../../utils/formSecurity';

const whatsappPattern='(?:\\+?55\\s?)?\\(?[1-9]\\d\\)?\\s?9\\d{4}[-\\s]?\\d{4}';

export default function DynamicQuoteForm({title}:{title:string}){
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const [errorMessage,setErrorMessage]=useState('Não foi possível enviar a mensagem. Tente novamente em alguns instantes.');
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
      body.append('_subject','Novo contato pelo site InfoService');
      body.append('_template','table');
      body.append('localizacao_aproximada',getCookieConsent()==='accepted'?await getApproximateLocation():'Não coletada: cookies opcionais não autorizados');
      await submitToFormSubmit(body);
      form.reset();
      setRecaptchaResetKey((value)=>value+1);
      setStatus('success');
    }catch{
      setErrorMessage('Não foi possível enviar a mensagem. Tente novamente em alguns instantes.');
      setStatus('error');
    }
  };

  return <Box id="contato" component="section" sx={{py:{xs:9,md:13},bgcolor:'#f6f7f9',borderTop:'1px solid #e0e0e0'}}><Container><Grid container spacing={7}><Grid item xs={12} md={6}><Typography variant="overline" color="#d81159" fontWeight={800}>FALE COM A INFOSERVICE</Typography><Typography variant="h2" sx={{mt:2}}>{title}</Typography><Typography mt={3} color="text.secondary">Conte-nos um pouco sobre o seu contexto. Nossa equipe entrará em contato para uma conversa inicial.</Typography></Grid><Grid item xs={12} md={6}><Box component="form" onSubmit={submit} noValidate={false}><input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display:'none'}}/><input type="hidden" name="_captcha" value="true"/><Grid container spacing={2}><Grid item xs={12} sm={6}><TextField required fullWidth name="nome" label="Nome" inputProps={{minLength:2,maxLength:80,pattern:"[A-Za-zÀ-ÖØ-öø-ÿ'’ -]+"}}/></Grid><Grid item xs={12} sm={6}><TextField required fullWidth name="email" type="email" label="E-mail institucional" inputProps={{maxLength:160}}/></Grid><Grid item xs={12}><TextField required fullWidth name="instituicao" label="Instituição"/></Grid><Grid item xs={12}><TextField required fullWidth name="telefone" type="tel" label="WhatsApp" inputMode="tel" inputProps={{pattern:whatsappPattern,maxLength:19}}/></Grid><Grid item xs={12}><TextField select fullWidth name="perfil" label="Perfil" defaultValue=""><MenuItem value="Gestão pública">Gestão pública</MenuItem><MenuItem value="Saúde privada">Saúde privada</MenuItem><MenuItem value="Pesquisa e inovação">Pesquisa e inovação</MenuItem></TextField></Grid><Grid item xs={12}><TextField required fullWidth name="mensagem" multiline rows={4} label="Qual desafio deseja resolver?"/></Grid><Grid item xs={12}><FormControlLabel control={<Checkbox required name="consentimento_privacidade" value="sim"/>} label={<Typography variant="body2">Li e concordo com a <a href="/privacidade">Política de Privacidade</a>.</Typography>}/><FormHelperText>O consentimento é necessário para que possamos responder ao seu contato.</FormHelperText></Grid><Grid item xs={12}><RecaptchaCheckbox resetKey={recaptchaResetKey}/></Grid><Grid item xs={12}><Button disabled={status==='sending'} type="submit" variant="contained" size="large" startIcon={status==='sending'?<CircularProgress size={18}/>:undefined}>{status==='sending'?'Enviando...':'Solicitar apresentação'}</Button></Grid>{status==='success'&&<Grid item xs={12}><Alert severity="success" onClose={()=>setStatus('idle')}>Mensagem enviada com sucesso, em breve nossa equipe entrará em contato</Alert></Grid>}{status==='error'&&<Grid item xs={12}><Alert severity="error" onClose={()=>setStatus('idle')}>{errorMessage}</Alert></Grid>}</Grid></Box></Grid></Grid></Container></Box>;
}

