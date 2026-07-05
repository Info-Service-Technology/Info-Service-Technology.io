import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Database, Activity, Building2, Landmark, ShieldCheck, LineChart,
  Cpu, Lock, FileCheck2, Network, Radar, Hospital, FlaskConical, Globe2, Users2, TrendingUp, CheckCircle2
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HDI · Health Data Insights — Ecossistema Integrado de Inteligência em Saúde" },
      { name: "description", content: "A plataforma corporativa que integra dados hospitalares, laboratoriais, epidemiológicos e socioeconômicos com IA e modelos preditivos para transformar a gestão de saúde." },
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
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 grid-bg opacity-[0.09]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-cyan/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-emerald/15 blur-[100px]" />

      <div className="relative container-corp pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse" />
              Visão Geral do Território · Plataforma corporativa
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Inteligência preditiva para a{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-emerald bg-clip-text text-transparent">
                gestão da saúde
              </span>{" "}
              em escala nacional.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/80 max-w-2xl">
              O HDI integra sistemas hospitalares, laboratórios, vigilância epidemiológica, bases governamentais e indicadores socioeconômicos, criando uma <strong className="text-primary-foreground">visão completa do território</strong>. Com IA e modelos preditivos, apoiamos decisões estratégicas de secretarias, governos e redes hospitalares.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/ecossistema" className="inline-flex items-center gap-2 rounded-md bg-accent-cyan px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent-cyan/90 transition-colors">
                Explorar o Ecossistema <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/solucoes/gestores-publicos" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors backdrop-blur">
                Falar com Relações Institucionais
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-primary-foreground/60">
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent-emerald" /> LGPD compliant</div>
              <div className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-accent-emerald" /> Criptografia AES-256</div>
              <div className="flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-accent-emerald" /> ISO 27001 ready</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent-emerald" /> HIPAA aligned</div>
            </div>
          </div>

          {/* Console mock */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-cyan/30 to-accent-emerald/20 blur-2xl opacity-60" />
            <div className="relative rounded-2xl border border-white/15 bg-primary-deep/70 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-emerald/70" />
                  </div>
                  hdi · console de território
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-emerald">Live</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-primary-foreground/50">Risco epidemiológico · macrorregião</div>
                    <div className="mt-1 text-3xl font-bold">Moderado ↗</div>
                  </div>
                  <div className="rounded-lg bg-accent-cyan/15 border border-accent-cyan/30 px-3 py-1.5 text-xs text-accent-cyan font-semibold">
                    +12,4%
                  </div>
                </div>

                {/* fake chart */}
                <div className="h-32 rounded-lg bg-black/20 border border-white/5 p-3 flex items-end gap-1.5">
                  {[35,42,38,55,48,62,58,71,65,78,72,84,90,82,88].map((h,i)=>(
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-accent-cyan/40 to-accent-cyan" style={{height: `${h}%`}} />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    {l:"Hospitais", v:"1.284", c:"cyan"},
                    {l:"Laboratórios", v:"342", c:"emerald"},
                    {l:"Municípios", v:"1.076", c:"cyan"},
                  ].map(m=>(
                    <div key={m.l} className="rounded-lg bg-white/[0.04] border border-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-primary-foreground/50">{m.l}</div>
                      <div className={`mt-1 text-lg font-bold ${m.c==='cyan'?'text-accent-cyan':'text-accent-emerald'}`}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── METRICS ─────────── */
function Metrics() {
  const stats = [
    { v: "180M+", l: "Registros de saúde integrados", i: Database },
    { v: "1.5K+", l: "Instituições conectadas", i: Hospital },
    { v: "99,98%", l: "Disponibilidade da plataforma", i: Activity },
    { v: "< 4s", l: "Latência média de análise", i: TrendingUp },
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
            Um único data lake governado, alimentado por todo o território.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            O HDI unifica fontes fragmentadas em uma camada semântica soberana. A partir dela, modelos preditivos e IA generativa entregam evidências acionáveis para gestão pública e privada.
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
            Uma plataforma. Dois mundos da saúde.
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
              <a href="mailto:contato@infoservicetechnology.com.br" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-cyan px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent-cyan/90 transition-colors">
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
