"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const phases = [
  { dot: "p1", icon: "📋", title: "Alistamento e revisão do eleitorado", desc: "Período para novos eleitores se alistarem, transferirem domicílio e regularizarem a situação. Encerra meses antes das eleições." },
  { dot: "p2", icon: "🎯", title: "Período pré-eleitoral", desc: "Convenções partidárias, escolha de candidatos, registro de chapas no TSE e início oficial da campanha eleitoral." },
  { dot: "p3", icon: "📣", title: "Campanha eleitoral", desc: "Candidatos fazem propaganda, participam de debates e apresentam propostas. Regras rígidas de financiamento e horário eleitoral gratuito no rádio e na TV." },
  { dot: "p4", icon: "🗳️", title: "Dia da eleição", desc: "Primeiro domingo de outubro (ou segundo, para 2º turno). Das 8h às 17h, horário de Brasília. Feriado nacional." },
  { dot: "p5", icon: "🏆", title: "Diplomação e posse", desc: "Após a eleição, o TSE e os TREs expedem os diplomas aos eleitos. A posse ocorre em janeiro do ano seguinte." }
]

const anos = [
  { year: "2026", title: "Eleições gerais", desc: "Presidente, governadores, senadores, deputados federais e estaduais", chip: "Em breve", chipColor: "bg-[#d6f0df] text-[#0d4f24]" },
  { year: "2028", title: "Eleições municipais", desc: "Prefeitos e vereadores de todos os municípios", chip: "Aguardando", chipColor: "bg-[#d6f0df] text-[#0d4f24]" },
  { year: "2030", title: "Eleições gerais", desc: "Novo ciclo federal: presidente, governadores e Congresso", chip: "Futuro", chipColor: "bg-[#d6f0df] text-[#0d4f24]" }
]

export function CalendarioSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="calendario" className="py-24 px-[5%] bg-white">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Quando votar
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          Calendário <em className="text-[#1a7a3c] italic">eleitoral</em>
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
          As eleições no Brasil seguem um ciclo de 4 anos, com datas e regras bem definidas. Saiba quando cada eleição acontece e o que esperar.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start mt-12">
        {/* Left - Phases */}
        <div>
          <p className="text-base text-[#444440] leading-relaxed mb-4">
            O processo eleitoral brasileiro é dividido em fases que começam meses antes do dia da votação. Cada fase tem regras específicas definidas pelo TSE e pela legislação eleitoral.
          </p>
          <p className="text-base text-[#444440] leading-relaxed mb-6">
            O <strong className="text-[#0d4f24]">Código Eleitoral</strong> e a <strong className="text-[#0d4f24]">Lei das Eleições (9.504/1997)</strong> regulam todo o processo, desde o alistamento dos eleitores até a diplomação dos eleitos.
          </p>

          <div className="flex flex-col">
            {phases.map((phase, i) => (
              <div 
                key={i}
                className={`flex gap-5 py-5 border-b border-dashed border-[#ddd] last:border-b-0 transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 ${
                  phase.dot === "p1" ? "bg-[#dff0e8] text-[#0d4f24]" :
                  phase.dot === "p2" ? "bg-[#fff3b0] text-[#a07000]" :
                  phase.dot === "p3" ? "bg-[#fde8e8] text-[#c00]" :
                  phase.dot === "p4" ? "bg-[#e8eeff] text-[#2244aa]" :
                  "bg-[#f5c200] text-[#0d4f24]"
                }`}>
                  {phase.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0d4f24]">{phase.title}</h4>
                  <p className="text-sm text-[#444440] leading-relaxed mt-0.5">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Anos */}
        <div className={`bg-[#f7f7f3] rounded-3xl p-10 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
          <h3 className="font-[var(--font-heading)] text-3xl font-bold text-[#0d4f24] mb-2">
            Próximas eleições
          </h3>
          <p className="text-sm text-[#444440] mb-8">Marque na agenda e não perca!</p>

          <div className="flex flex-col gap-4">
            {anos.map((ano, i) => (
              <div key={i} className="bg-white rounded-xl px-6 py-5 flex items-center justify-between border-2 border-transparent transition-all hover:border-[#1a7a3c]">
                <div className="font-[var(--font-heading)] text-4xl font-black text-[#f5c200]">
                  {ano.year}
                </div>
                <div className="flex-1 px-6">
                  <h4 className="text-sm font-bold text-[#0d4f24]">{ano.title}</h4>
                  <p className="text-xs text-[#444440]">{ano.desc}</p>
                </div>
                <span className={`text-[0.72rem] font-bold px-3 py-1 rounded-full ${ano.chipColor}`}>
                  {ano.chip}
                </span>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="mt-6 p-6 bg-[#d6f0df] rounded-xl">
            <h4 className="text-base font-bold text-[#0d4f24] mb-2">
              Datas importantes para 2026
            </h4>
            <p className="text-sm text-[#444440] leading-relaxed">
              O prazo para alistamento eleitoral para as eleições de 2026 se encerra em <strong className="text-[#0d4f24]">maio de 2026</strong>. Se você ainda não tem título, corra! Acesse{" "}
              <Link 
                href="https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor"
                target="_blank"
                className="text-[#1a7a3c] font-bold underline"
              >
                autoatendimento TSE
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
