import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Database, Cpu, Network, Shield, Workflow, Layers, GitBranch, Zap } from "lucide-react";

export const Route = createFileRoute("/ecossistema")({
  head: () => ({
    meta: [
      { title: "Ecossistema · Como a integração de dados funciona | HDI" },
      { name: "description", content: "Como o HDI unifica sistemas hospitalares, laboratórios, vigilância e bases governamentais em um data lake soberano com IA e modelos preditivos." },
    ],
  }),
  component: EcossistemaPage,
});

function EcossistemaPage() {
  const pillars = [
    { i: Database, t: "Ingestão multi-fonte", d: "Conectores FHIR, HL7 v2, ETL/ELT e APIs REST para HIS, LIS, RNDS, DATASUS e sistemas legados." },
    { i: Layers, t: "Camada semântica", d: "Modelo canônico de saúde com catálogo, linhagem e qualidade contínua dos dados." },
    { i: Cpu, t: "IA & modelos preditivos", d: "Motores de risco populacional, demanda assistencial e séries temporais epidemiológicas." },
    { i: Workflow, t: "Orquestração de decisões", d: "Alertas, dashboards executivos e APIs para embarcar inteligência em processos existentes." },
    { i: Shield, t: "Governança soberana", d: "Anonimização, criptografia, RBAC e auditoria fim-a-fim em conformidade com a LGPD." },
    { i: GitBranch, t: "Interoperabilidade", d: "Padrões abertos (FHIR R4, LOINC, SNOMED-CT, CID-11) para conversar com qualquer ecossistema." },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="O Ecossistema"
        title="Uma arquitetura única para toda a jornada do dado em saúde."
        description="Do sistema hospitalar mais crítico ao indicador socioeconômico municipal — o HDI harmoniza, governa e transforma dados em inteligência acionável para o território."
      />

      <section className="container-corp py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-md transition-all">
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5 inline-block">
                <p.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-corp py-20">
          <span className="eyebrow">Fluxo de valor</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl">
            Da fonte ao insight, com governança em cada etapa.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Conectar", d: "Ingestão em batch e streaming a partir das fontes do território.", i: Network },
              { n: "02", t: "Harmonizar", d: "Padronização semântica, deduplicação e enriquecimento.", i: Layers },
              { n: "03", t: "Inferir", d: "Modelos preditivos, IA generativa e séries temporais.", i: Cpu },
              { n: "04", t: "Agir", d: "Dashboards, alertas e APIs para operacionalizar decisões.", i: Zap },
            ].map((s) => (
              <div key={s.n} className="relative rounded-xl border border-border bg-card p-6">
                <div className="text-xs font-bold text-accent-cyan tracking-widest">{s.n}</div>
                <s.i className="mt-3 h-6 w-6 text-primary" />
                <h4 className="mt-4 font-bold text-foreground">{s.t}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
