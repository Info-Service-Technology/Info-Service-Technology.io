import {useEffect,useRef,useState} from 'react';
import {Box,FormHelperText} from '@mui/material';

type RecaptchaApi = {
  render: (
    container: HTMLElement,
    parameters: {
      sitekey: string;
      theme?: 'light'|'dark';
      size?: 'normal'|'compact';
      callback?: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
};

type RecaptchaWindow = Window & {grecaptcha?: RecaptchaApi};

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LddAY8tAAAAAKHite3qAX-uUnr4zcu8bJzKccXx';
let apiPromise: Promise<RecaptchaApi>|null = null;

function getRecaptchaApi(): RecaptchaApi|undefined {
  return (window as RecaptchaWindow).grecaptcha;
}

function waitForRecaptchaApi(timeoutMs=10000): Promise<RecaptchaApi> {
  return new Promise((resolve,reject) => {
    const startedAt = Date.now();
    const check = () => {
      const api = getRecaptchaApi();
      if (api?.render) {
        resolve(api);
        return;
      }
      if (Date.now()-startedAt >= timeoutMs) {
        reject(new Error('API do reCAPTCHA indisponível'));
        return;
      }
      window.setTimeout(check,50);
    };
    check();
  });
}

function loadRecaptchaApi(): Promise<RecaptchaApi> {
  const available = getRecaptchaApi();
  if (available?.render) return Promise.resolve(available);
  if (apiPromise) return apiPromise;

  const existing = document.querySelector<HTMLScriptElement>('script[data-infoservice-recaptcha="true"]');
  if (!existing) {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit&hl=pt-BR';
    script.dataset.infoserviceRecaptcha = 'true';
    document.head.appendChild(script);
  }

  apiPromise = waitForRecaptchaApi().catch((error) => {
    apiPromise = null;
    throw error;
  });
  return apiPromise;
}

export default function RecaptchaCheckbox({resetKey=0}:{resetKey?:number}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number|null>(null);
  const [token,setToken] = useState('');
  const [state,setState] = useState<'loading'|'verified'|'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    setToken('');
    setState('loading');

    if (!container) return () => { cancelled = true; };
    container.replaceChildren();

    loadRecaptchaApi()
      .then((api) => {
        if (cancelled) return;
        widgetIdRef.current = api.render(container,{
          sitekey: siteKey,
          theme: 'light',
          size: 'normal',
          callback: (nextToken) => {
            if (cancelled) return;
            setToken(nextToken);
            setState('verified');
          },
          'expired-callback': () => {
            if (cancelled) return;
            setToken('');
            setState('loading');
          },
          'error-callback': () => {
            if (cancelled) return;
            setToken('');
            setState('error');
          },
        });
      })
      .catch(() => {
        if (!cancelled) setState('error');
      });

    return () => {
      cancelled = true;
      const api = getRecaptchaApi();
      if (api && widgetIdRef.current !== null) api.reset(widgetIdRef.current);
      widgetIdRef.current = null;
      container.replaceChildren();
    };
  },[resetKey]);

  return <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:.5}}>
    <Box ref={containerRef} aria-label="Validação reCAPTCHA" sx={{minHeight:78}} />
    <input type="hidden" name="g-recaptcha-response" value={token} readOnly />
    {state==='error' && <FormHelperText error>Não foi possível carregar a validação. Verifique a conexão e tente novamente.</FormHelperText>}
  </Box>;
}
