import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, Newspaper } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Imprensa & Blog · Casos de sucesso e dados do território | HDI" },
      { name: "description", content: "Artigos, casos de sucesso e análises sobre inteligência de dados aplicada à gestão da saúde pública e privada." },
    ],
  }),
  component: () => {
    const posts = [
      { tag: "Caso de sucesso", t: "Como uma rede hospitalar reduziu 22% do tempo de permanência com predição de altas", d: "Predição de altas integrada ao HIS aumentou a rotatividade de leitos em uma rede com 12 unidades." },
      { tag: "Vigilância", t: "Detecção precoce de arboviroses em macrorregião do Nordeste", d: "Modelos espaço-temporais anteciparam surto em 3 semanas frente ao boletim oficial." },
      { tag: "Governança", t: "LGPD na prática: anonimização de prontuários em ambientes de pesquisa", d: "Framework aplicado em parceria com centro acadêmico brasileiro." },
      { tag: "Gestão pública", t: "Planejamento assistencial baseado em determinantes sociais", d: "Secretaria estadual redesenha rede a partir de indicadores integrados de saúde e IBGE." },
    ];
    return (
      <PageShell>
        <PageHero
          eyebrow="Imprensa & Blog"
          title="Conteúdo institucional, casos de sucesso e dados do território."
          description="Publicações, análises e materiais para líderes de saúde, gestores públicos e comunidade técnica."
        />
        <section className="container-corp py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.t} className="group rounded-xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                  <Newspaper className="h-3.5 w-3.5" /> {p.tag}
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground leading-snug">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Ler análise completa <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </PageShell>
    );
  },
});
