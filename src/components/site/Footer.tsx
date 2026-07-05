import { Link } from "@tanstack/react-router";
import { Shield, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import istLogo from "@/assets/ist-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-corp py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="rounded-lg bg-white/95 p-3 inline-block">
              <img src={istLogo} alt="Info Service Technology" className="h-10 w-auto" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75 max-w-sm">
              HDI — Health Data Insights é um produto da{" "}
              <strong className="text-primary-foreground">Info Service Technology (IST)</strong>, referência em ecossistemas integrados de inteligência em saúde para o setor público e privado.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-primary-foreground/70">
              <Shield className="h-4 w-4 text-accent-emerald" />
              Conformidade LGPD · ISO 27001-ready · HIPAA aligned
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Institucional</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/ecossistema" className="text-primary-foreground/80 hover:text-primary-foreground">Ecossistema</Link></li>
              <li><Link to="/tecnologia" className="text-primary-foreground/80 hover:text-primary-foreground">Tecnologia & IA</Link></li>
              <li><Link to="/governanca" className="text-primary-foreground/80 hover:text-primary-foreground">Governança</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">Imprensa & Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Governança</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Política de Privacidade</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Termos de Uso</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Política de Segurança</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Encarregado (DPO)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Contato Corporativo</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent-cyan" /><span>Sede corporativa<br />Brasil</span></li>
              <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent-cyan" /><a href="mailto:contato@infoservicetechnology.com" className="hover:text-primary-foreground">contato@infoservicetechnology.com</a></li>
              <li className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent-cyan" /><span>Relações Institucionais</span></li>
              <li className="flex gap-2.5"><Linkedin className="h-4 w-4 shrink-0 mt-0.5 text-accent-cyan" /><a href="https://www.infoservicetechnology.com/" target="_blank" rel="noopener" className="hover:text-primary-foreground">infoservicetechnology.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Info Service Technology. Todos os direitos reservados. HDI® é marca registrada.</p>
          <p>CNPJ · Registro ANPD · Certificações de segurança da informação</p>
        </div>
      </div>
    </footer>
  );
}
