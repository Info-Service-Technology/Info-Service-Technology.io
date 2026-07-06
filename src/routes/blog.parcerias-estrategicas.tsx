import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/parcerias-estrategicas")({
  head: () => ({
    meta: [
      { title: "Parcerias Estratégicas: Expandindo no Mercado de Saúde | HDI" },
      { name: "description", content: "Entenda como a Info Service Technology utiliza colaborações e internacionalização para impulsionar a inovação em saúde." },
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
              Parcerias Estratégicas
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Parcerias Estratégicas: Expandindo no Mercado de Saúde
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
              A colaboração entre empresas no mercado de saúde tem se mostrado cada vez mais estratégica para impulsionar o crescimento e a inovação. Um excelente exemplo deste modelo é a parceria estabelecida pela Info Service Technology, uma startup focada em transformar a gestão da saúde por meio de tecnologias avançadas.
            </p>
            
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-sm">
              <img 
                src="/parceria.jpeg" 
                alt="Reunião de negócios corporativa discutindo a expansão internacional de soluções tecnológicas" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p>
              A Info Service Technology utiliza ciência de dados, big data e tecnologias preditivas para prever doenças graves, oferecer análises personalizadas e monitorar em tempo real o estado de saúde dos pacientes. Com um olhar atento para o futuro, a empresa busca não apenas fortalecer sua marca e atrair investidores, mas também expandir sua atuação para novos mercados, como o promissor cenário do Reino Unido.
            </p>

            <p>
              Participar de programas de mentoria e colaboração com entidades do Reino Unido tem sido uma estratégia inteligente da Info Service Technology para se posicionar de forma competitiva e conquistar espaço em um mercado internacional altamente exigente e inovador. Essa abordagem permite a troca de conhecimento e experiências com profissionais e empresas renomadas, além de abrir portas para novas oportunidades de negócio e parcerias vantagens.
            </p>

            <p>
              Com uma visão clara e foco em inovação, a Info Service Technology está trilhando um caminho de sucesso ao investir em parcerias estratégicas e na expansão para mercados globais. Essa abordagem não apenas fortalece a posição da empresa no setor de saúde, mas também a posiciona como uma referência em tecnologia e gestão da informação.
            </p>

            <p className="bg-card border border-border p-6 rounded-xl font-medium text-foreground">
              Em um mercado tão dinâmico e competitivo como o da saúde, a união de forças por meio de parcerias estratégicas se torna essencial para impulsionar o crescimento e garantir a sustentabilidade dos negócios. A Info Service Technology é um exemplo inspirador de como a colaboração pode ser um diferencial decisivo para o sucesso de uma empresa no mercado de saúde.
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
