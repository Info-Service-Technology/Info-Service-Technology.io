import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Lock, Globe } from "lucide-react";
import istLogo from "@/assets/ist-logo.png";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; desc?: string }[];
};

const NAV: NavItem[] = [
  { label: "Ecossistema", to: "/ecossistema" },
  {
    label: "Soluções",
    children: [
      { label: "Para Gestores Públicos", to: "/solucoes/gestores-publicos", desc: "Vigilância, planejamento e políticas públicas orientadas por dados." },
      { label: "Para Redes Hospitalares", to: "/solucoes/redes-hospitalares", desc: "Eficiência operacional, desfechos clínicos e gestão de leitos." },
      { label: "Inteligência Epidemiológica", to: "/solucoes/inteligencia-epidemiologica", desc: "Monitoramento territorial e modelos preditivos em tempo real." },
    ],
  },
  { label: "Tecnologia", to: "/tecnologia" },
  { label: "Governança & Compliance", to: "/governanca" },
  { label: "Imprensa & Blog", to: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-corp flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={istLogo} alt="Info Service Technology" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              {item.to ? (
                <Link
                  to={item.to}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary" }}
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              )}
              {item.children && dropdown === item.label && (
                <div className="absolute left-0 top-full pt-2 w-[420px]">
                  <div className="rounded-xl border border-border bg-popover shadow-2xl p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-lg px-4 py-3 hover:bg-surface transition-colors"
                      >
                        <div className="text-sm font-semibold text-foreground">{c.label}</div>
                        {c.desc && <div className="text-xs text-muted-foreground mt-0.5">{c.desc}</div>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" aria-label="Selecionar idioma">
            <Globe className="h-4 w-4" />
            PT-BR
          </button>
          <span className="h-5 w-px bg-border" />
          <a
            href="https://healthdataanalytics.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
          >
            <Lock className="h-3.5 w-3.5" />
            Área Restrita
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-corp py-4 space-y-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 pb-1">{item.label}</div>
                  {item.children.map((c) => (
                    <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-surface rounded-md">
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={item.label} to={item.to!} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface rounded-md">
                  {item.label}
                </Link>
              )
            )}
            <a href="https://healthdataanalytics.net" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
              <Lock className="h-4 w-4" />
              Área Restrita do Gestor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
