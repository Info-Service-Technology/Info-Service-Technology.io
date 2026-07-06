import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/modelos-preditivos")({
  head: () => ({
    meta: [
      { title: "Transforme a Gestão da Saúde: Modelos Preditivos em Ação | HDI" },
      { name: "description", content: "Entenda como a Info Service Technology combina ciência de dados e monitoramento em tempo real para transformar a gestão médica." },
    ],
  }),
  component: () => {
    return (
      <PageShell>
        <article className="container-corp py-16 max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para o Blog
          </Link>

          {/* Cabeçalho do Post */}
          <header className="border-b border-border pb-8 mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full mb-4">
              Modelos Preditivos
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Transforme a Gestão da Saúde: Modelos Preditivos em Ação
            </h1>
            
            {/* Metadados */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>Por <strong className="text-foreground font-medium">Mauro Lúcio</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-11-23">23 de Novembro de 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>1 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Conteúdo da Íntegra */}
          <div className="prose prose-blue dark:prose-invert max-w-none text-base md:text-lg text-foreground/90 leading-relaxed space-y-6">
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Você já ouviu falar sobre a Info Service Technology? Esta startup vem revolucionando a gestão da saúde por meio da utilização de modelos preditivos inovadores. Combinando ciência de dados, big data e tecnologias preditivas, a empresa tem como foco principal a predição de doenças graves, utilizando uma vasta gama de dados como históricos, ambientais, clínicos e sociais.
            </p>
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-sm">
              <img 
                src="/modelos.png" 
                alt="Reunião de negócios corporativa discutindo a expansão internacional de soluções tecnológicas" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p>
              A Info Service Technology oferece uma gama de serviços, desde a predição de doenças até a análise de dados personalizada e o monitoramento de doenças em tempo real. Com isso, a empresa busca não só transformar a maneira como a saúde é gerida, mas também fortalecer sua marca, atrair investidores anjos, acelerar seu crescimento e estabelecer parcerias estratégicas.
            </p>

            <p>
              Além disso, a Info Service Technology tem planos ambiciosos de expansão para novos mercados, com destaque para o Reino Unido. A empresa está participando de programas de mentoria e colaboração com diversas entidades neste país, visando se estabelecer como uma referência em inovação na área da saúde.
            </p>

            <p className="bg-card border border-border p-6 rounded-xl font-medium text-foreground">
              Com sua abordagem inovadora e foco em tecnologias preditivas, a Info Service Technology está se destacando no setor e promete revolucionar a forma como lidamos com a saúde e o bem-estar. É inspirador ver como a ciência de dados pode ser aplicada de forma tão impactante na área da saúde, trazendo benefícios reais para a sociedade.
            </p>
          </div>

          {/* Rodapé do Artigo */}
          <footer className="mt-12 pt-6 border-t border-border flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Info Service Technology. Conteúdo Institucional.
            </div>
            <button 
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary border border-border px-3 py-1.5 rounded-lg bg-card hover:bg-accent transition-all"
            >
              <Share2 className="h-3.5 w-3.5" /> Copiar Link
            </button>
          </footer>
        </article>
      </PageShell>
    );
  },
});
