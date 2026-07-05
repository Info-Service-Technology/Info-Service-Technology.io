import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, Lock, EyeOff, Server, Terminal, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/politica-de-seguranca")({
  head: () => ({
    meta: [
      { title: "Política de Segurança da Informação | IST" },
      { 
        name: "description", 
        content: "Conheça as diretrizes de segurança cibernética, criptografia de biometria e proteção de dados preditivos adotadas pela infraestrutura da IST." 
      },
    ],
  }),
  component: () => {
    // Pilares de segurança de dados em alto desempenho
    const pilaresSeguranca = [
      { 
        tag: "Criptografia Avançada", 
        icon: <Lock className="h-4 w-4 text-primary" />,
        t: "Proteção de dados em trânsito e repouso",
        d: "Todas as requisições de biometria facial, dados de apólices e prontuários médicos trafegam por canais criptografados via TLS 1.3 e são armazenados utilizando chaves AES-256." 
      },
      { 
        tag: "Segregação Logística", 
        icon: <EyeOff className="h-4 w-4 text-primary" />,
        t: "Pseudonimização automatizada",
        d: "Os motores preditivos isolam dados de identificação (CPF, nome) das métricas de saúde e sinistralidade. Os algoritmos de IA calculam riscos populacionais sem expor identidades desnecessariamente." 
      },
      { 
        tag: "Arquitetura Nuvem Segura", 
        icon: <Server className="h-4 w-4 text-primary" />,
        t: "Infraestrutura resiliente e redundante",
        d: "Hospedagem em datacenters globais com certificações ISO/IEC 27001, SOC 2 Type II, com rotinas de backup automatizadas e isolamento lógico de ambientes (VPC)." 
      },
      { 
        tag: "Controle de Acesso Restrito", 
        icon: <Terminal className="h-4 w-4 text-primary" />,
        t: "Autenticação multifator e logs de auditoria",
        d: "Acesso administrativo interno restrito a engenheiros autorizados via conexões VPN seguras, autenticação baseada em chaves criptográficas (MFA) e geração de logs imutáveis de acesso." 
      }
    ];

    return (
      <PageShell>
        <PageHero
          eyebrow="Padrão Corporativo Internacional"
          title="Segurança da Informação"
          description="Diretrizes técnicas e operacionais que garantem a confidencialidade, integridade e alta disponibilidade das esteiras analíticas da IST."
        />

        <section className="container-corp py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Introdução aos Pilares Técnicos */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-2xl font-bold text-foreground">Infraestrutura Blindada para Análise Preditiva</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Processar inteligência de sinistros da SUSEP, dados regulados pela ANS e validações biométricas exige vigilância rigorosa. Adotamos o modelo de segurança <em>Zero Trust</em> (Nunca Confiar, Sempre Verificar).
              </p>
            </div>

            {/* Grid com pilares de tecnologia */}
            <div className="grid gap-6 md:grid-cols-2 mb-16">
              {pilaresSeguranca.map((p) => (
                <article key={p.t} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col justify-between">
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

            {/* Detalhes de Auditoria e Incidentes em Accordion */}
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Auditoria e Governança Contínua</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="seg-1">
                  <AccordionTrigger className="text-left font-semibold">1. Testes de Intrusão (PenTests) e Vulnerabilidades</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Submetemos nossas APIs e plataformas a análises periódicas de segurança e testes de intrusão executados por consultorias externas independentes, neutralizando potenciais brechas antes que elas cheguem à produção.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="seg-2">
                  <AccordionTrigger className="text-left font-semibold">2. Plano de Resposta a Incidentes Cibernéticos</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    Mantemos um plano ativo de mitigação de desastres e contenção de vazamentos. Em caso de anomalias detectadas em nossa infraestrutura, nossos clientes B2B/B2G e as autoridades competentes (como a ANPD) serão notificados sob os estritos prazos e protocolos da legislação brasileira.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Alerta de Segurança */}
            <div className="mt-16 rounded-xl border border-warning/20 bg-warning/5 p-6 flex gap-4 items-start">
              <ShieldAlert className="h-6 w-6 text-warning shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground text-sm">Aviso de Prática Segura</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  A equipe da IST nunca solicita senhas mestre, tokens privados ou chaves secretas de produção via canais informais de comunicação (como aplicativos de mensagem ou redes sociais). Todas as integrações técnicas acontecem via chaves geradas em nosso console seguro.
                </p>
              </div>
            </div>

          </div>
        </section>
      </PageShell>
    );
  },
});
