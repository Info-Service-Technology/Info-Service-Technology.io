import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SolutionGrid } from "./solucoes.gestores-publicos";
import { Radar, Biohazard, Map, Bell, Brain, Globe2 } from "lucide-react";

export const Route = createFileRoute("/solucoes/inteligencia-epidemiologica")({
  head: () => ({
    meta: [
      { title: "Inteligência Epidemiológica | HDI" },
      { name: "description", content: "Monitoramento territorial, alertas em tempo real e modelos preditivos para vigilância em saúde." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="Inteligência Epidemiológica"
        title="Do sinal precoce ao plano de resposta — em tempo real."
        description="Modelos preditivos, séries temporais e georreferenciamento aplicados à vigilância epidemiológica para antecipar surtos, agravos e riscos populacionais."
      />
      <SolutionGrid
        items={[
          { i: Radar, t: "Detecção precoce", d: "Anomalias, clusters espaço-temporais e sinais fracos a partir de múltiplas fontes." },
          { i: Biohazard, t: "Modelagem de agravos", d: "Modelos preditivos para arboviroses, respiratórias e doenças crônicas." },
          { i: Map, t: "Georreferenciamento", d: "Mapas de calor, análise por microárea, bairro, município e regional de saúde." },
          { i: Bell, t: "Alertas orquestrados", d: "Notificações por regra e IA para gestores, equipes de campo e centros de operação." },
          { i: Brain, t: "IA generativa aplicada", d: "Sumarização automática de boletins, cenários e briefings executivos." },
          { i: Globe2, t: "Interoperabilidade global", d: "Aderência a padrões da OMS, OPAS e da RNDS." },
        ]}
      />
    </PageShell>
  ),
});
