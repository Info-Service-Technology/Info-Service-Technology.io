import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative border-b border-border bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-accent-cyan/20 to-transparent blur-3xl" />
      <div className="relative container-corp py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent-cyan">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
