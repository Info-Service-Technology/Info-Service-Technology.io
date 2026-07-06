import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ShieldAlert, Scale, Landmark, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/dpo")({
  head: () => ({
    meta: [
      { title: "Encarregado pelo Tratamento de Dados (DPO) | IST" },
      { 
        name: "description", 
        content: "Entre em contato com o DPO / Encarregado de Proteção de Dados da IST. Canal oficial para requisições de privacidade sob a LGPD." 
      },
    ],
  }),
  component: () => {
    return (
      <PageShell>
        <PageHero
          eyebrow="Conformidade e Privacidade"
          title="Encarregado de Dados (DPO)"
          description="Canal oficial de atendimento para esclarecimentos sobre o processamento de dados pessoais, modelos preditivos e direitos dos titulares perante a LGPD."
        />

        <section className="container-corp py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Bloco de Contato Direto */}
            <div className="mb-12 rounded-xl bg-card border border-border p-8 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-foreground">Identificação do Encarregado</h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Em cumprimento ao Art. 41 da LGPD, a IST possui um Comitê de Segurança e Privacidade que atua como Encarregado de Proteção de Dados (DPO).
                </p>
                <p className="text-xs text-muted-foreground mt-4 font-mono">
                  Contato Institucional: contato@infoservicetechnology.com.br
                </p>
              </div>
              <div className="flex justify-end">
                <Button className="w-full md:w-auto gap-2" asChild>
                  <a href="mailto:contato@infoservicetechnology.com.br" target="_blank" rel="noopener">
                    <Mail className="h-4 w-4" /> Enviar E-mail
                  </a>
                </Button>
              </div>
            </div>

            {/* Atribuições do DPO no Cenário B2B/B2G */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Atribuições e Escopo de Atuação</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border border-border bg-card/40">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Mediação com Controladores</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Atuamos diretamente com os DPOs das seguradoras, operadoras de saúde e órgãos públicos contratantes para responder a auditorias e validar a governança dos algoritmos.
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
                      <h3 className="font-bold text-base">Interface com a ANPD</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Ponto de contato central para atender a fiscalizações, apresentar Relatórios de Impacto à Proteção de Dados (RIPD) e demonstrar conformidade regulatória.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Perguntas Frequentes / Fluxo de Requisições */}
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Como processamos as requisições?</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="dpo-1">
                  <AccordionTrigger className="text-left font-semibold">Sou cliente de uma seguradora/plano. Como exerço meus direitos na IST?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Como a IST atua como <strong>Operadora</strong> (processando dados sob instrução de terceiros), requisições de titulares referentes a cadastros originais devem ser submetidas diretamente à seguradora ou operadora de saúde contratada por você. Nosso DPO dará todo o suporte técnico necessário a esse parceiro para garantir o cumprimento da sua solicitação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dpo-2">
                  <AccordionTrigger className="text-left font-semibold">Qual o prazo médio de resposta do comitê?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Para requisições diretas de nossos clientes corporativos institucionais, o Comitê de Privacidade responde em um prazo técnico de até 15 dias úteis, salvo cenários de alta complexidade analítica previstos em contrato.
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
