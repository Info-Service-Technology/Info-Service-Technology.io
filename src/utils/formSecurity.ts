export const formSubmitEndpoint = 'https://formsubmit.co/ajax/contato@infoservicetechnology.com.br';
const consentKey = 'infoservice-cookie-consent';
const consentCookie = 'infoservice_cookie_consent';

export function getCookieConsent(): 'accepted' | 'necessary' | null {
  const cookie = document.cookie.match(new RegExp(`(?:^|; )${consentCookie}=([^;]*)`))?.[1];
  const stored = cookie || window.localStorage.getItem(consentKey);
  return stored === 'accepted' || stored === 'necessary' ? stored : null;
}

export function isValidName(value: string): boolean {
  const name = value.trim().replace(/\s+/g, ' ');
  return name.length >= 2 && name.length <= 80 && /^[A-Za-zÀ-ÖØ-öø-ÿ'’ -]+$/.test(name) && /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(name);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function normalizeWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, '');
  return digits.startsWith('55') && digits.length === 13 ? digits.slice(2) : digits;
}

export function isValidWhatsApp(value: string): boolean {
  const digits = normalizeWhatsApp(value);
  return /^(?:[1-9]\d)(?:9\d{8})$/.test(digits);
}

export function hasRecaptchaToken(body: FormData): boolean {
  return String(body.get('g-recaptcha-response') ?? '').trim().length > 0;
}

export function validateLeadForm(body: FormData): string | null {
  if (!isValidName(String(body.get('nome') ?? ''))) {
    return 'Informe um nome válido, sem números ou caracteres especiais.';
  }
  if (!isValidEmail(String(body.get('email') ?? ''))) {
    return 'Informe um endereço de e-mail válido.';
  }
  if (!isValidWhatsApp(String(body.get('telefone') ?? ''))) {
    return 'Informe um WhatsApp válido com DDD, por exemplo: (11) 99999-9999.';
  }
  if (body.get('consentimento_privacidade') !== 'sim') {
    return 'É necessário aceitar a Política de Privacidade para enviar a mensagem.';
  }
  if (!hasRecaptchaToken(body)) {
    return 'Confirme a validação “Não sou um robô” antes de enviar a mensagem.';
  }
  return null;
}

export function getApproximateLocation(): Promise<string> {
  if (!('geolocation' in navigator)) {
    return Promise.resolve('Indisponível neste navegador');
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => resolve(`latitude ${coords.latitude.toFixed(4)}, longitude ${coords.longitude.toFixed(4)}, precisão aproximada de ${Math.round(coords.accuracy)} m`),
      () => resolve('Não autorizada ou indisponível'),
      {enableHighAccuracy: false, maximumAge: 300000, timeout: 3500},
    );
  });
}

export async function submitToFormSubmit(body: FormData): Promise<void> {
  if (!hasRecaptchaToken(body)) {
    throw new Error('reCAPTCHA não confirmado; envio bloqueado antes do FormSubmit');
  }

  const response = await fetch(formSubmitEndpoint, {
    method: 'POST',
    headers: {Accept: 'application/json'},
    body,
  });
  const raw = await response.text();
  let result: {success?: boolean | string} = {};
  try {
    result = JSON.parse(raw) as {success?: boolean | string};
  } catch {
    result = {};
  }
  if (!response.ok || result.success === false || result.success === 'false') {
    throw new Error('Falha no envio pelo FormSubmit');
  }
}
