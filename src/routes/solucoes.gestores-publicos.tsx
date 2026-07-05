import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Landmark, Radar, Users2, LineChart, MapPin, Shield } from "lucide-react";

export const Route = createFileRoute("/solucoes/gestores-publicos")({
  head: () => ({
    meta: [
      { title: "Soluções para Gestores Públicos | HDI" },
      { name: "description", content: "Vigilância epidemiológica, planejamento assistencial e políticas públicas orientadas por dados para secretarias e governos." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="Gestão Pública & Governamental"
        title="Políticas públicas orientadas por evidências e inteligência territorial."
        description="Da vigilância epidemiológica ao planejamento da rede assistencial, o HDI equipa secretarias, ministérios e municípios com uma visão completa e preditiva do território."
      />
      <SolutionGrid
        items={[
          { i: Radar, t: "Vigilância proativa", d: "Detecção precoce de surtos, agravos e eventos sentinelas em tempo real." },
          { i: MapPin, t: "Inteligência de território", d: "Panorama de indicadores por região, município ou área de abrangência." },
          { i: Users2, t: "Equidade & acesso", d: "Determinantes sociais integrados a indicadores clínicos e assistenciais." },
          { i: LineChart, t: "Planejamento assistencial", d: "Dimensionamento de rede, leitos e recursos humanos com base em demanda projetada." },
          { i: Landmark, t: "Integração com bases oficiais", d: "DATASUS, RNDS, SIH, SIA, SIM, SINASC, e-SUS APS e ANS." },
          { i: Shield, t: "Governança pública", d: "Auditoria, transparência e conformidade com a LGPD e órgãos de controle." },
        ]}
      />
    </PageShell>
  ),
});

export function SolutionGrid({ items }: { items: { i: any; t: string; d: string }[] }) {
  return (
    <section className="container-corp py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.t} className="rounded-xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-md transition-all">
            <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5 inline-block">
              <it.i className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground">{it.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
