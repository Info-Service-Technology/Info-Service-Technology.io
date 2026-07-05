import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ShieldCheck, Lock, FileCheck2, Scale, Eye, UserCheck } from "lucide-react";

export const Route = createFileRoute("/governanca")({
  head: () => ({
    meta: [
      { title: "Governança & Compliance · LGPD e Segurança | HDI" },
      { name: "description", content: "Governança, LGPD, segurança da informação e conformidade governamental na plataforma HDI." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="Governança & Compliance"
        title="Segurança e conformidade não são funcionalidades — são fundação."
        description="A arquitetura de governança do HDI atende governos, hospitais e operadoras que operam sob os mais rigorosos regimes regulatórios de proteção de dados e segurança da informação."
      />

      <section className="container-corp py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: ShieldCheck, t: "LGPD", d: "Aderência total à Lei nº 13.709/2018, com bases legais mapeadas por caso de uso." },
            { i: Lock, t: "Segurança da informação", d: "Criptografia AES-256, TLS 1.3, KMS gerenciado e SIEM 24x7." },
            { i: FileCheck2, t: "Anonimização de prontuários", d: "Pseudonimização, k-anonimato e ambientes seguros de análise." },
            { i: Scale, t: "Regulação setorial", d: "Alinhado a Ministério da Saúde, ANS, ANPD, CFM e órgãos de controle." },
            { i: Eye, t: "Auditoria fim-a-fim", d: "Log imutável, linhagem de dados e trilhas para auditorias externas." },
            { i: UserCheck, t: "Governança de acesso", d: "RBAC granular, MFA obrigatório e revisão periódica de privilégios." },
          ].map((it) => (
            <div key={it.t} className="rounded-xl border border-border bg-card p-7 hover:border-accent-emerald/40 hover:shadow-md transition-all">
              <div className="rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 p-2.5 inline-block">
                <it.i className="h-5 w-5 text-accent-emerald" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  ),
});
