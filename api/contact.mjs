const EMAIL='mauroslucios@infoservicetechnology.com.br';
const allowedSubjects=new Set(['Solicitar apresentação executiva','Falar com Relações Institucionais','Gestores Públicos','Inteligência Epidemiológica','Redes Hospitalares','Outros assuntos','Novo contato pelo site InfoService']);

const clean=(value,max=200)=>String(value??'').replace(/[<>]/g,'').trim().slice(0,max);
const validName=value=>/^[\p{L}][\p{L}\p{M}'’.-]+(?:\s+[\p{L}][\p{L}\p{M}'’.-]+)+$/u.test(value);
const validEmail=value=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)&&value.length<=254;
const validPhone=value=>!value||/^\+?[0-9]{10,15}$/.test(value.replace(/[^\d+]/g,'').replace(/(?!^)\+/g,''));

export default async function handler(request,response){
  if(request.method!=='POST')return response.status(405).json({success:false,message:'Método não permitido.'});
  const body=request.body??{};
  if(clean(body.website))return response.status(200).json({success:true});
  const nome=clean(body.nome);const email=clean(body.email);const telefone=clean(body.telefone,30);const mensagem=clean(body.mensagem,4000);const instituicao=clean(body.instituicao);
  if(!validName(nome)||!validEmail(email)||!validPhone(telefone)||!instituicao||mensagem.length<10||clean(body.privacidade)!=='aceito')return response.status(400).json({success:false,message:'Revise os dados informados e aceite a política de privacidade.'});
  const secret=process.env.RECAPTCHA_SECRET_KEY;const token=clean(body.recaptchaToken,4096);
  if(!secret)return response.status(503).json({success:false,message:'reCAPTCHA não configurado no servidor.'});
  const verifyBody=new URLSearchParams({secret,response:token});
  const verify=await fetch('https://www.google.com/recaptcha/api/siteverify',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:verifyBody});
  const verification=await verify.json();
  if(!verification.success)return response.status(400).json({success:false,message:'Confirme o reCAPTCHA e tente novamente.'});
  const assunto=clean(body.assunto)||'Novo contato pelo site InfoService';
  const outgoing=new FormData();
  for(const[key,value]of Object.entries(body)){if(key!=='recaptchaToken'&&key!=='website')outgoing.set(key,clean(value,4000))}
  outgoing.set('nome',nome);outgoing.set('email',email);outgoing.set('telefone',telefone);outgoing.set('instituicao',instituicao);outgoing.set('mensagem',mensagem);
  outgoing.set('_subject',`Contato pelo site: ${allowedSubjects.has(assunto)?assunto:'Outros assuntos'}`);outgoing.set('_template','table');outgoing.set('_captcha','false');outgoing.set('_url','https://www.infoservicetechnology.com.br/contato');
  const sent=await fetch(`https://formsubmit.co/ajax/${EMAIL}`,{method:'POST',headers:{Accept:'application/json',Origin:'https://www.infoservicetechnology.com.br',Referer:'https://www.infoservicetechnology.com.br/contato'},body:outgoing});
  const result=await sent.json().catch(()=>({}));
  if(!sent.ok||result.success===false||result.success==='false')return response.status(502).json({success:false,message:'Serviço de envio indisponível.'});
  response.setHeader('Cache-Control','no-store');return response.status(200).json({success:true});
}
