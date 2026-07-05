import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Cpu, Brain, LineChart, Lock, Cloud, Zap, Database, GitBranch } from "lucide-react";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnologia · IA, Modelos Preditivos e Segurança | HDI" },
      { name: "description", content: "A arquitetura tecnológica do HDI: IA aplicada à saúde, modelos preditivos, arquitetura cloud-native e segurança de nível corporativo." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="Tecnologia"
        title="Cloud-native, orientada a IA, projetada para o setor de saúde."
        description="Do motor de modelos preditivos à camada de segurança soberana — cada peça do HDI foi construída para operar em escala nacional com garantias corporativas de disponibilidade e proteção de dados."
      />

      <section className="container-corp py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Brain, t: "IA aplicada à saúde", d: "Modelos treinados em contexto brasileiro, com validação clínica e vieses monitorados." },
            { i: LineChart, t: "Modelos preditivos", d: "Séries temporais, risco populacional, demanda e desfechos clínicos." },
            { i: Cpu, t: "MLOps de saúde", d: "Ciclo completo de treinamento, versionamento e explicabilidade dos modelos." },
            { i: Cloud, t: "Arquitetura cloud-native", d: "Kubernetes, microserviços e escalabilidade elástica multi-região." },
            { i: Database, t: "Data lake governado", d: "Bronze, prata e ouro com qualidade, linhagem e catálogo de dados." },
            { i: Zap, t: "Streaming em tempo real", d: "Event-driven para vigilância, alertas e operação assistencial." },
            { i: Lock, t: "Segurança by design", d: "Criptografia AES-256, zero trust, RBAC granular e SIEM integrado." },
            { i: GitBranch, t: "Padrões abertos", d: "FHIR R4, HL7, LOINC, SNOMED-CT, CID-11 e TISS." },
          ].map((it) => (
            <div key={it.t} className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all">
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5 inline-block">
                <it.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  ),
});
