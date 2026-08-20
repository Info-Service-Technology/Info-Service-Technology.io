/// <reference types="vite/client" />

interface ImportMetaEnv{
  readonly VITE_RECAPTCHA_SITE_KEY?:string;
  readonly VITE_CONTACT_API_URL?:string;
  readonly VITE_DPO_NAME?:string;
}

interface ImportMeta{readonly env:ImportMetaEnv}
