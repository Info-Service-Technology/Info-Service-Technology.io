import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SolutionGrid } from "./solucoes.gestores-publicos";
import { Hospital, Activity, BedDouble, Stethoscope, DollarSign, Workflow } from "lucide-react";

export const Route = createFileRoute("/solucoes/redes-hospitalares")({
  head: () => ({
    meta: [
      { title: "Soluções para Redes Hospitalares | HDI" },
      { name: "description", content: "Eficiência operacional, desfechos clínicos e gestão de leitos para operadoras e grandes redes hospitalares." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="Saúde Privada & Redes Hospitalares"
        title="Da porta de entrada ao contrato de valor — inteligência integrada."
        description="Modelos preditivos, analytics de desfechos e interoperabilidade nativa para redes hospitalares, operadoras e grupos assistenciais de grande porte."
      />
      <SolutionGrid
        items={[
          { i: BedDouble, t: "Gestão preditiva de leitos", d: "Previsão de ocupação, altas e transferências para otimizar capacidade." },
          { i: Activity, t: "Desfechos clínicos", d: "Analytics longitudinal por linha de cuidado, especialidade e protocolo." },
          { i: Stethoscope, t: "Jornada do paciente", d: "Rastreamento omnichannel do encontro ao pós-alta." },
          { i: DollarSign, t: "Contratos de valor", d: "Bundles, capitation e VBHC com inteligência de risco populacional." },
          { i: Workflow, t: "Interoperabilidade FHIR", d: "Integração nativa a HIS, EMR, PACS/RIS e portais de operadoras." },
          { i: Hospital, t: "Rede assistencial", d: "Visão consolidada de toda a rede: hospital, ambulatório, home care e telesaúde." },
        ]}
      />
    </PageShell>
  ),
});
