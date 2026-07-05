import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, BrainCircuit, Users, Landmark, ClipboardCheck, Fingerprint } from "lucide-react";

export const Route = createFileRoute("/politica")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e Analytics | IST" },
      { 
        name: "description", 
        content: "Conheça as diretrizes de privacidade e governança de dados da IST, plataforma de análise preditiva B2B e B2G para seguros e saúde suplementar." 
      },
    ],
  }),
  component: () => {
    // Escopo de dados focado em inteligência, biometria e analytics
    const escopoDados = [
      { 
        tag: "Dados cadastrais e vínculos", 
        icon: <ClipboardCheck className="h-4 w-4 text-primary" />,
        t: "Identificação estruturada",
        d: "Nome, CPF/CNPJ, idade, localização corporativa ou governamental, e dados de vínculo com controladores (seguradoras, operadoras ou órgãos públicos)." 
      },
      { 
        tag: "Biometria e Identidade", 
        icon: <Fingerprint className="h-4 w-4 text-primary" />,
        t: "Validação de segurança",
        d: "Dados biométricos faciais e digitais fornecidos por nossos parceiros corporativos exclusivamente para motores de prevenção a fraudes e autenticação de acessos." 
      },
      { 
        tag: "Histórico de Seguros e Sinistros", 
        icon: <Shield className="h-4 w-4 text-primary" />,
        t: "Métricas atuariais e operacionais",
        d: "Dados de apólices, histórico de sinistralidade em seguros ou saúde, guias médicas de operadoras (ANS) e registros de concessão regulados pela SUSEP." 
      },
      { 
        tag: "Dados de Saúde e Preditivos", 
        icon: <BrainCircuit className="h-4 w-4 text-primary" />,
        t: "Inteligência analítica sensível",
        d: "Informações clínicas consolidadas e anonimizadas ou pseudonimizadas utilizadas estritamente para o cálculo de risco populacional e modelos preditivos." 
      },
    ];

    return (
      <PageShell>
        <PageHero
          eyebrow="Governança de Dados B2B / B2G"
          title="Política de Privacidade"
          description="A IST fornece inteligência de dados e análise preditiva avançada. Esta política descreve como processamos dados em nome de nossos clientes corporativos (B2B) e entidades governamentais (B2G), em estrita conformidade com a LGPD, SUSEP e ANS."
        />

        {/* Seção 1: Escopo e Coleta */}
        <section className="container-corp py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">1. Escopo de Processamento Analítico</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Como empresa de tecnologia e inteligência preditiva, a IST atua majoritariamente na condição de <strong>Operadora de Dados Pessoais</strong>. Nós processamos as informações enviadas por nossos parceiros (Controladores) para gerar modelos estatísticos, indicadores de risco e validações de segurança.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {escopoDados.map((p) => (
                <article key={p.tag} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                      {p.icon} {p.tag}
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground leading-snug">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Seção 2: Finalidades de Negócio (B2B / B2G) */}
            <div className="mt-20 border-t pt-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">2. Finalidades Legítimas do Tratamento</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border border-border bg-card/40">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Ecossistema Corporativo (B2B)</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Análise de sinistralidade de planos de saúde, mitigação de fraudes de identidade via biometria e suporte à subscrição de riscos de seguros corporativos regulados pela SUSEP.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border bg-card/40">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                      <Landmark className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Relações Governamentais (B2G)</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Fornecimento de dados estatísticos agregados e modelos matemáticos para subsidiar políticas públicas de saúde, auditoria de contratos estatais e governança de dados institucionais.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Seção 3: Direitos e Segurança Técnica */}
            <div className="mt-16 border-t pt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">3. Princípios de Engenharia de Dados e LGPD</h2>
              <p className="text-sm text-muted-foreground mb-6">Nossas esteiras de processamento aplicam regras rígidas de segurança para garantir a integridade dos dados:</p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="principios-1">
                  <AccordionTrigger className="text-left font-semibold">Minimização e Anonimização</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Sempre que possível, os dados sensíveis de saúde e sinistros passam por rotinas de descaracterização (anonimização técnica) antes de abastecerem nossos algoritmos preditivos de Inteligência Artificial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="principios-2">
                  <AccordionTrigger className="text-left font-semibold">Canal de Atendimento aos Titulares (Art. 18)</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Considerando nosso papel como operadora de dados, requisições de titulares referentes à exclusão ou confirmação de dados são encaminhadas e validadas em conjunto com o parceiro comercial (Controlador) responsável pela captação original da informação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="principios-3">
                  <AccordionTrigger className="text-left font-semibold">Conformidade Regulatória Rigorosa</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Nenhum modelo estatístico ou cruzamento de dados realizado pela IST viola as diretrizes de sigilo médico, as diretrizes da Agência Nacional de Saúde Suplementar (ANS) ou as normativas da SUSEP para o mercado securitário.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </section>
      </PageShell>
    );
  },
});
