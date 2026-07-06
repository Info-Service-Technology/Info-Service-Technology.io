import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/predicao-de-doencas")({
  head: () => ({
    meta: [
      { title: "Acelere seu Negócio: Predição de Doenças com Tecnologia | HDI" },
      { name: "description", content: "Como a Info Service Technology utiliza ciência de dados e inteligência preditiva para prever doenças graves com precisão." },
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
              Tecnologia & IA
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Acelere seu Negócio: Predição de Doenças com Tecnologia
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
                <span>2 min de leitura</span>
              </div>
            </div>
          </header>

          {/* Conteúdo da Íntegra */}
          <div className="prose prose-blue dark:prose-invert max-w-none text-base md:text-lg text-foreground/90 leading-relaxed space-y-6">
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Você já parou para pensar como a tecnologia pode revolucionar a gestão da saúde? A Info Service Technology está na vanguarda dessa transformação, utilizando ciência de dados, big data e tecnologias preditivas para prever doenças graves com precisão e agilidade.
            </p>
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-sm">
              <img 
                src="/predicao.png" 
                alt="Reunião de negócios corporativa discutindo a expansão internacional de soluções tecnológicas" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p>
              Ao combinar dados históricos, ambientais, clínicos e sociais, esta startup consegue oferecer serviços de predição de doenças, análise de dados personalizada e monitoramento em tempo real. Imagine poder identificar potenciais problemas de saúde antes mesmo de apresentarem sintomas, permitindo intervenções precoces e eficazes.
            </p>

            <p>
              Além disso, a Info Service Technology tem planos ambiciosos de fortalecer sua marca, atrair investidores, acelerar o desenvolvimento da startup e estabelecer parcerias estratégicas. Sua visão includes a expansão para novos mercados, com destaque para o Reino Unido, onde já participam de programas de mentoria e colaboração com várias entidades renomadas.
            </p>

            <p>
              Essa abordagem inovadora e proativa para a gestão da saúde promete não apenas melhorar a qualidade de vida das pessoas, mas também otimizar os recursos do sistema de saúde. A capacidade de prever doenças com antecedência pode resultar em tratamentos mais eficazes, redução de custos e uma abordagem mais centrada no paciente.
            </p>

            <p>
              A Info Service Technology está, sem dúvida, acelerando o futuro da saúde por meio da tecnologia. Com sua expertise em ciência de dados e predição de doenças, a empresa está moldando um novo paradigma na gestão da saúde, onde a prevenção e a precisão são fundamentais.
            </p>

            <p className="bg-card border border-border p-6 rounded-xl font-medium text-foreground">
              Se você se interessa por inovação na saúde e pelo potencial transformador da tecnologia, fique de olho na Info Service Technology e em suas próximas iniciativas. Essa startup promete revolucionar a forma como lidamos com a saúde, trazendo benefícios tangíveis para indivíduos e sistemas de saúde em todo o mundo.
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
