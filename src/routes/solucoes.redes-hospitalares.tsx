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
        description="Modelos analíticos, inteligência analítica e interoperabilidade para hospitais, redes hospitalares, secretarias de saúde e organizações que utilizam dados para aprimorar a gestão e a qualidade assistencial."
      />
      <SolutionGrid
        items={[
          { i: BedDouble, t: "Inteligência para capacidade assistencial", d: "Antecipe a demanda por serviços de saúde e apoie o planejamento da utilização da capacidade assistencial, reduzindo gargalos e aumentando a eficiência operacional." },
          { i: Activity, t: "Jornada assistencial integrada", d: "Analise o percurso do paciente entre a Atenção Primária, Atenção Especializada, serviços ambulatoriais e hospitais, promovendo maior continuidade do cuidado." },
          { i: Stethoscope, t: "Desfechos clínicos", d: "Acompanhe indicadores assistenciais e avalie os resultados clínicos por linha de cuidado, especialidade e perfil populacional." },
          { i: DollarSign, t: "Inteligência para tomada de decisão", d: "Consolide dados de múltiplas fontes em indicadores estratégicos para apoiar gestores hospitalares e de saúde pública na definição de políticas e ações." },
          { i: Workflow, t: "Interoperabilidade inteligente", d: "Integre dados provenientes de prontuários eletrônicos, laboratórios, operadoras e demais sistemas de saúde por meio dos principais padrões nacionais e internacionais, formando uma visão única e confiável das informações." },
          { i: Hospital, t: "Visão integrada da rede assistencial", d: "Centralize indicadores de hospitais, ambulatórios, unidades de saúde e demais estabelecimentos assistenciais em uma plataforma única para gestão integrada da rede." },
        ]}
      />
    </PageShell>
  ),
});
