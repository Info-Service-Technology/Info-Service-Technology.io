import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Database, Activity, Building2, Landmark, ShieldCheck, LineChart,
  Cpu, Lock, FileCheck2, Network, Radar, Hospital, FlaskConical, Globe2, Users2, TrendingUp, CheckCircle2
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IST - Ecossistema Integrado de Inteligência em TI" },
      { name: "description", content: "A plataforma corporativa HDI que integra dados hospitalares, laboratoriais, epidemiológicos e socioeconômicos com IA e modelos preditivos para transformar a gestão de saúde." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <Metrics />
      <Ecosystem />
      <Segments />
      <Compliance />
      <CTA />
    </PageShell>
  );
}

/* ─────────── HERO ─────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[640px] flex items-center perspective-1000">
      <div className="absolute inset-0 grid-bg opacity-[0.09]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-cyan/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-emerald/15 blur-[100px]" />

      <div className="relative container-corp py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          
          {/* Lado Esquerdo */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow text-xs tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse" />
              Visão Geral do Território · Plataforma corporativa
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Inteligência preditiva para a{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-emerald bg-clip-text text-transparent">
                gestão da saúde
              </span>{" "}
              em escala nacional.
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/80 max-w-xl">
              O HDI integra sistemas hospitalares, laboratórios, vigilância epidemiológica, bases governamentais e indicadores socioeconômicos, criando uma <strong className="text-primary-foreground">visão completa do território</strong>. Com IA e modelos preditivos, apoiamos decisões estratégicas de secretarias, governos e redes hospitalares.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/ecossistema" className="inline-flex items-center gap-2 rounded-md bg-accent-cyan px-5 py-2.5 text-xs font-semibold text-primary hover:bg-accent-cyan/90 transition-colors">
                Explorar o Ecossistema <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/solucoes/gestores-publicos" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-white/10 transition-colors backdrop-blur">
                Falar com Relações Institucionais
              </Link>
            </div>
          </div>

          {/* Lado Direito - Painel com Efeito de Profundidade e Perspectiva */}
          <div className="relative hidden lg:block w-full max-w-[560px] justify-self-end [transform:rotateY(-6deg)_rotateX(4deg)] transition-transform duration-500 hover:[transform:rotateY(0deg)_rotateX(0deg)]">
            {/* Brilho difuso de fundo (Glow) para destacar o painel */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-emerald/10 rounded-2xl blur-2xl -z-10" />
            <DashboardMock />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────── DASHBOARD MOCK ─────────── */
function DashboardMock() {
  return (
    <div className="relative w-full">
      {/* Adicionado shadow customizado pesado e borda sutil branca/10 */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-white p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] text-slate-900 text-[11px]">

        {/* topo compactado */}
        <div className="grid gap-3 grid-cols-[1fr_auto] items-start border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 leading-tight">Análises do Município</h3>
            <p className="text-[10px] text-slate-400">Gráficos e indicadores do município.</p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50 p-1.5 text-[9px] max-w-[320px] justify-end">
            <span className="text-slate-400">Doença:</span>
            <span className="rounded bg-white border px-1.5 py-0.5 font-medium">Todas</span>
            <span className="text-slate-400">Início:</span>
            <span className="rounded bg-white border px-1.5 py-0.5">06/07/2024</span>
            <span className="text-slate-400">Fim:</span>
            <span className="rounded bg-white border px-1.5 py-0.5">06/07/2026</span>
            <span className="text-slate-400">Granularidade:</span>
            <span className="rounded bg-white border px-1.5 py-0.5">Semana</span>
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-3 grid gap-2 grid-cols-4">
          {[
            ["Casos no período", "61"],
            ["UFs afetadas", "1"],
            ["Municípios afetados", "1"],
            ["Δ janela móvel", "-41.2%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 text-center">
              <p className="text-[9px] text-slate-400 truncate whitespace-nowrap" title={label}>{label}</p>
              <strong className="mt-0.5 block text-sm text-slate-950 font-bold">{value}</strong>
            </div>
          ))}
        </div>

        {/* Gráficos */}
        <div className="mt-3 grid gap-3 grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-white p-3 flex flex-col justify-between">
            <div>
              <p className="text-[9px] text-slate-400">Comparativos</p>
              <h4 className="text-[10px] font-semibold text-slate-800">Casos no município</h4>
            </div>

            <div className="mt-3 h-36 border-l border-b border-slate-200 relative mx-auto w-full max-w-[120px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:25%_25%]" />
              <div className="absolute bottom-0 left-[20%] h-[60%] w-[60%] bg-blue-600 rounded-t-sm" />
              <span className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 text-[8px] text-slate-400 whitespace-nowrap">
                município analisado
              </span>
            </div>

            <p className="mt-6 text-[8px] text-slate-400 leading-tight">
              Escopo municipal aplicado automaticamente pelo tenant.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-3 flex flex-col justify-between">
            <div>
              <p className="text-[9px] text-slate-400">Tendências</p>
              <h4 className="text-[10px] font-semibold text-slate-800">Casos ao longo do tempo</h4>
            </div>

            <div className="mt-3 h-36 border-l border-b border-slate-200 relative w-full">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20%_25%]" />
              <svg viewBox="0 0 500 220" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <path
                  d="M0 170 C60 110, 100 90, 160 100 S250 120, 300 80 S390 20, 455 55 S490 120, 500 105"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <p className="mt-2 text-[8px] text-slate-400">
              Granularidade: <strong>Semana.</strong>
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <p className="mt-3 pt-2 border-t border-slate-50 text-[8px] text-slate-400 truncate">
          Filtros ativos: doença=<strong>Todas</strong>, período=<strong>2024-07-06 → 2026-07-06</strong>
        </p>
      </div>
    </div>
  );
}


/* ─────────── METRICS ─────────── */
function Metrics() {
  const stats = [
    { v: "Integração", l: "Registros de saúde integrados", i: Database },
    { v: "Conexão", l: "Instituições conectadas", i: Hospital },
    { v: "SLA", l: "Disponibilidade da plataforma", i: Activity },
    { v: "CDN", l: "Latência média de análise", i: TrendingUp },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-corp py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.l} className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5 shrink-0">
                <s.i className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ECOSYSTEM ─────────── */
function Ecosystem() {
  const sources = [
    { icon: Hospital, label: "Sistemas Hospitalares", desc: "HIS, EMR e prontuários eletrônicos" },
    { icon: FlaskConical, label: "Laboratórios", desc: "LIS, diagnósticos e resultados clínicos" },
    { icon: Radar, label: "Vigilância Epidemiológica", desc: "Notificações compulsórias e surtos" },
    { icon: Landmark, label: "Bases Governamentais", desc: "DATASUS, SIH, SIA, SIM, SINASC" },
    { icon: Users2, label: "Indicadores Socioeconômicos", desc: "IBGE, censos e determinantes sociais" },
  ];

  return (
    <section className="relative border-b border-border bg-background">
      <div className="container-corp py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">O Ecossistema</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Data Lake governado, para integração de dados.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Data Marts especializados para cada contexto de negócio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* sources */}
          <div className="space-y-3">
            {sources.map((s) => (
              <div key={s.label} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5 shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-foreground">{s.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse shrink-0" />
              </div>
            ))}
          </div>

          {/* connector */}
          <div className="hidden lg:flex flex-col items-center gap-3 px-8">
            <div className="h-24 w-px bg-gradient-to-b from-transparent via-accent-cyan to-transparent" />
            <ArrowRight className="h-6 w-6 text-accent-cyan" />
            <div className="h-24 w-px bg-gradient-to-b from-transparent via-accent-cyan to-transparent" />
          </div>

          {/* data lake */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent-cyan/20 via-primary/10 to-accent-emerald/20 blur-2xl" />
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary to-primary-deep p-8 text-primary-foreground shadow-xl">
              <div className="flex items-center gap-2 text-xs text-accent-cyan font-semibold uppercase tracking-wider">
                <Network className="h-4 w-4" /> HDI Data Lake
              </div>
              <h3 className="mt-4 text-2xl font-bold">Camada única de inteligência</h3>
              <p className="mt-3 text-sm text-primary-foreground/75 leading-relaxed">
                Governança de dados, catálogo semântico e linhagem completa. Dados anonimizados, criptografados e auditáveis em conformidade com a LGPD.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  { i: Cpu, t: "Modelos preditivos & IA" },
                  { i: LineChart, t: "Painéis executivos em tempo real" },
                  { i: Globe2, t: "Visão de território multi-escala" },
                ].map((r) => (
                  <div key={r.t} className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5">
                    <r.i className="h-4 w-4 text-accent-cyan shrink-0" />
                    <span className="text-sm">{r.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── SEGMENTS ─────────── */
function Segments() {
  const items = [
    {
      icon: Landmark,
      tag: "Gestão Pública & Governamental",
      title: "Para secretarias, ministérios e municípios",
      desc: "Instrumentalize políticas públicas com evidências. Vigilância proativa, planejamento assistencial e alocação de recursos com base em dados populacionais e determinantes sociais.",
      bullets: ["Monitoramento epidemiológico contínuo", "Planejamento da rede assistencial", "Indicadores de equidade e acesso", "Integração com DATASUS e RNDS"],
      cta: "/solucoes/gestores-publicos",
      accent: "cyan",
    },
    {
      icon: Building2,
      tag: "Saúde Privada & Redes Hospitalares",
      title: "Para operadoras e grandes redes hospitalares",
      desc: "Eleve desfechos clínicos e eficiência operacional. Predição de demanda, gestão de leitos, jornada do paciente e inteligência para contratos de valor.",
      bullets: ["Previsão de ocupação e altas", "Gestão de risco populacional", "Analytics de desfechos clínicos", "Interoperabilidade FHIR nativa"],
      cta: "/solucoes/redes-hospitalares",
      accent: "emerald",
    },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="container-corp py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Segmentos de Atendimento</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Plataforma para simplificar a gestão.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {items.map((it) => (
            <article key={it.tag} className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all">
              <div className={`h-1 w-full ${it.accent === "cyan" ? "bg-accent-cyan" : "bg-accent-emerald"}`} />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg p-2.5 border ${it.accent === "cyan" ? "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan" : "bg-accent-emerald/10 border-accent-emerald/30 text-accent-emerald"}`}>
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.tag}</span>
                </div>
                <h3 className="mt-5 text-2xl md:text-3xl font-bold text-foreground tracking-tight">{it.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{it.desc}</p>

                <ul className="mt-6 grid gap-2.5">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${it.accent === "cyan" ? "text-accent-cyan" : "text-accent-emerald"}`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link to={it.cta} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Conhecer solução completa <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── COMPLIANCE ─────────── */
function Compliance() {
  const badges = [
    { i: ShieldCheck, t: "LGPD", d: "Aderência total à Lei Geral de Proteção de Dados brasileira." },
    { i: Lock, t: "Criptografia AES-256", d: "Dados em trânsito e em repouso, com gestão de chaves auditável." },
    { i: FileCheck2, t: "Anonimização", d: "Pseudonimização e anonimização de prontuários e resultados." },
    { i: CheckCircle2, t: "ISO 27001 · HIPAA", d: "Práticas alinhadas às normas internacionais de segurança da informação." },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="container-corp py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Compliance & Confiança</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Dados sensíveis exigem uma arquitetura de segurança inegociável.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Cada camada do HDI foi projetada para atender governos, hospitais e operadoras que operam sob os mais rigorosos regimes regulatórios e de segurança da informação.
            </p>
            <Link to="/governanca" className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
              Central de Governança <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {badges.map((b) => (
              <div key={b.t} className="rounded-xl border border-border bg-card p-6 hover:border-accent-emerald/40 hover:shadow-md transition-all">
                <div className="rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 p-2.5 inline-block">
                  <b.i className="h-5 w-5 text-accent-emerald" />
                </div>
                <h4 className="mt-4 font-bold text-foreground">{b.t}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── CTA ─────────── */
function CTA() {
  return (
    <section className="bg-background">
      <div className="container-corp py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-primary-deep p-12 md:p-16 text-primary-foreground">
          <div className="absolute inset-0 grid-bg opacity-[0.08]" />
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent-cyan/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <span className="eyebrow">Relações Institucionais</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Pronto para transformar dados em decisões de saúde?
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl leading-relaxed">
                Nossa equipe corporativa atende governos, secretarias e redes hospitalares com projetos sob medida de integração e inteligência de dados.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/apresentacao-hdi.pdf" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-cyan px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent-cyan/90 transition-colors">
                Solicitar apresentação executiva <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/blog" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors">
                Ver casos de sucesso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
