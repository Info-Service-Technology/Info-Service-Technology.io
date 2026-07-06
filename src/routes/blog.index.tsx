import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, Newspaper } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Imprensa & Blog · Casos de sucesso e dados do território | HDI" },
      { name: "description", content: "Artigos, casos de sucesso e análises sobre inteligência de dados aplicada à gestão da saúde pública e privada." },
    ],
  }),
  component: () => {
    // Adicionada a propriedade 'href' correspondente a rota de cada post
    const posts = [
      { 
        tag: "Tecnologia", 
        t: "Acelere seu Negócio: Predição de Doenças com Tecnologia",
        href: "/blog/predicao-de-doencas" 
      },
      { 
        tag: "Modelos Preditivos", 
        t: "Transforme a Gestão da Saúde: Modelos Preditivos em Ação",
        href: "/blog/modelos-preditivos" 
      },
      { 
        tag: "Parcerias Estratégicas", 
        t: "Parcerias Estratégicas: Expandindo no Mercado de Saúde",
        href: "/blog/parcerias-estrategicas" 
      },
    ];

    return (
      <PageShell>
        <PageHero
          eyebrow="Imprensa & Blog"
          title="Conteúdo institucional, casos de sucesso e dados do território."
          description="Publicações, análises e materiais para líderes de saúde, gestores públicos e comunidade técnica."
        />
        <section className="container-corp py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link 
                key={p.t} 
                to={p.href}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-md transition-all text-left"
              >
                <article className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                      <Newspaper className="h-3.5 w-3.5" /> {p.tag}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {p.t}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Ler análise completa <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </PageShell>
    );
  },
});
