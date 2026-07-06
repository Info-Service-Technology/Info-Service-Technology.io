import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, UserCheck, HelpCircle, FileText, Code2 } from "lucide-react";

export const Route = createFileRoute("/termo-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso da Plataforma | IST" },
      { 
        name: "description", 
        content: "Leia os Termos de Uso da IST. Conheça as regras, responsabilidades e condições para utilização de nossas APIs e sistemas de análise preditiva." 
      },
    ],
  }),
  component: () => {
    // Conteúdo alinhado com o fornecimento de software analítico (SaaS / APIs)
    const termos = [
      { 
        tag: "Responsabilidades", 
        icon: <UserCheck className="h-4 w-4 text-primary" />,
        t: "Uso de credenciais e chaves de API",
        d: "O contratante corporativo ou governamental é exclusivamente responsável por manter o sigilo de suas chaves de API e credenciais de acesso, respondendo por qualquer requisição feita em seu nome." 
      },
      { 
        tag: "Licenciamento e Propriedade", 
        icon: <FileText className="h-4 w-4 text-primary" />,
        t: "Propriedade intelectual dos algoritmos",
        d: "Todos os códigos-fonte, modelos preditivos de inteligência artificial, interfaces de dashboards e marcas são de propriedade exclusiva da IST, sendo concedida apenas uma licença de uso temporária." 
      },
      { 
        tag: "Nível de Serviço (SLA)", 
        icon: <ShieldCheck className="h-4 w-4 text-primary" />,
        t: "Disponibilidade e infraestrutura",
        d: "A IST garante os níveis de disponibilidade de seus motores analíticos conforme estabelecido em contrato (SLA). Interrupções programadas para manutenção de infraestrutura serão notificadas previamente." 
      },
      { 
        tag: "Integração Tecnológica", 
        icon: <Code2 className="h-4 w-4 text-primary" />,
        t: "Diretrizes de consumo de dados",
        d: "As consultas enviadas aos nossos motores (biometria, validações SUSEP/ANS) devem respeitar os limites técnicos de requisição por segundo para evitar sobrecargas e garantir a estabilidade do ecossistema." 
      }
    ];

    return (
      <PageShell>
        <PageHero
          eyebrow="Atualizado em Julho de 2026"
          title="Termos de Uso"
          description="Diretrizes e condições técnicas para a integração e utilização das soluções analíticas, dashboards e APIs da IST."
        />

        {/* Seção Principal de Termos */}
        <section className="container-corp py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {termos.map((p) => (
                <article key={p.t} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                      {p.icon} {p.tag}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground leading-snug">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Detalhamento Jurídico-Técnico em Accordion */}
            <div className="mt-16 border-t pt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Disposições Gerais para Parceiros B2B e B2G</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">1. Limitação de Responsabilidade e Resultados Preditivos</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Nossas ferramentas geram scores baseados em modelos matemáticos e dados estatísticos de mercado (sinistros, fraudes e biometria). A IST fornece insumos de alta precisão para a tomada de decisão, contudo, a decisão final de subscrição de riscos ou concessão de benefícios permanece sob total responsabilidade do Controlador (empresa contratante ou órgão público).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">2. Links de Terceiros e Bases Integradas</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Para validações normativas, nossos sistemas realizam conexões automatizadas com bancos de dados externos e bases públicas regulatórias. A IST não se responsabiliza pela estabilidade pontual de sistemas governamentais terceiros ou de autarquias fiscalizadoras durante o cruzamento de dados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">3. Modificações na Estrutura das APIs</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    A IST reserva-se o direito de atualizar e aplicar melhorias de performance em seus endpoints de API. Versões legadas (deprecated) serão mantidas em funcionamento conforme os prazos de transição técnica acordados individualmente em contrato comercial.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Caixa de Ajuda / Suporte Corporativo */}
            <div className="mt-16 rounded-xl bg-muted/50 p-8 border border-border text-center flex flex-col items-center gap-4">
              <div className="p-3 bg-background rounded-full border shadow-sm">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Dúvidas sobre a integração ou conformidade?</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Nossa equipe técnica e o setor de governança corporativa estão disponíveis para fornecer suporte sobre os termos contratuais e arquitetura de software.
              </p>
              <Button className="mt-2 group gap-2">
               <a href="mailto:contato@infoservicetechnology.com.br">Falar com Engenharia de Dados</a> <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

          </div>
        </section>
      </PageShell>
    );
  },
});
