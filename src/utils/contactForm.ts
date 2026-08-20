export const namePattern=/^[\p{L}][\p{L}\p{M}'’.-]+(?:\s+[\p{L}][\p{L}\p{M}'’.-]+)+$/u;
export const phonePattern=/^[+()0-9\s.-]{10,25}$/;
export const normalizePhone=(value:string)=>value.replace(/[^\d+]/g,'').replace(/(?!^)\+/g,'');
export const contactEndpoint=(import.meta.env.VITE_CONTACT_API_URL as string|undefined)||'/api/contact';

export function appendLocation(body:FormData,location:{latitude:number;longitude:number;accuracy:number}|null){
  if(!location)return;
  body.append('localizacao_aproximada',`${location.latitude}, ${location.longitude}`);
  body.append('precisao_localizacao_metros',String(location.accuracy));
}

export async function sendContact(body:FormData){
  const payload=Object.fromEntries(body.entries());
  const response=await fetch(contactEndpoint,{method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify(payload)});
  const result=await response.json().catch(()=>({}));
  if(!response.ok||result.success===false)throw new Error(typeof result.message==='string'?result.message:'Falha no envio');
}
