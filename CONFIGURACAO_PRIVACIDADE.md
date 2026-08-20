# Configuração de privacidade e formulários

1. Crie uma chave **reCAPTCHA v2 (caixa “Não sou um robô”)** para os domínios de produção e teste.
2. No projeto da Vercel, cadastre:
   - `VITE_RECAPTCHA_SITE_KEY`: chave pública do reCAPTCHA.
   - `RECAPTCHA_SECRET_KEY`: chave secreta, usada somente pela função `/api/contact`.
   - `VITE_DPO_NAME`: nome completo do encarregado de dados formalmente designado.
3. Faça um novo deploy. Variáveis com prefixo `VITE_` são incorporadas durante o build.

Para testar a função localmente, use `vercel dev`. Com `npm run dev`, a interface abre normalmente, mas a rota serverless `/api/contact` não é executada pelo Vite. Como alternativa, defina `VITE_CONTACT_API_URL` apontando para uma implantação de teste.

Nunca inclua `RECAPTCHA_SECRET_KEY` no código, no Git ou em uma variável iniciada por `VITE_`.
