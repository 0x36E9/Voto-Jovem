"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const phases = [
  { dot: "p1", icon: "📋", title: "Alistamento e revisão do eleitorado", desc: "Período para novos eleitores se alistarem, transferirem domicílio e regularizarem a situação. Encerra meses antes das eleições." },
  { dot: "p2", icon: "🎯", title: "Período pré-eleitoral", desc: "Convenções partidárias, escolha de candidatos, registro de chapas no TSE e início oficial da campanha eleitoral." },
  { dot: "p3", icon: "📣", title: "Campanha eleitoral", desc: "Candidatos fazem propaganda, participam de debates e apresentam propostas. Regras rígidas de financiamento e horário eleitoral gratuito no rádio e TV." },
  { dot: "p4", icon: "🗳️", title: "Dia da eleição", desc: "Primeiro domingo de outubro (ou segundo, para 2º turno). Das 8h às 17h horário de Brasília. Feriado nacional." },
  { dot: "p5", icon: "🏆", title: "Diplomação e posse", desc: "Após a eleição, o TSE e TREs expedem os diplomas aos eleitos. A posse ocorre em janeiro do ano seguinte." }
]

const anos = [
  { year: "2026", title: "Eleições Gerais", desc: "Presidente, Gov., Senadores, Dep. Federais e Estaduais", chip: "Em breve", chipColor: "bg-[#d6f0df] text-[#0d4f24]" },
  { year: "2028", title: "Eleições Municipais", desc: "Prefeitos e Vereadores de todos os municípios", chip: "Aguardando", chipColor: "bg-[#d6f0df] text-[#0d4f24]" },
  { year: "2030", title: "Eleições Gerais", desc: "Novo ciclo federal: Presidente, Governadores e Congresso", chip: "Futuro", chipColor: "bg-[#d6f0df] text-[#0d4f24]" }
]

export function CalendarioSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="calendario" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Quando votar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Calendário eleitoral
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            As eleições no Brasil seguem um ciclo de 4 anos com datas e regras bem definidas. Saiba quando cada eleição acontece e o que esperar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Phases */}
          <div className={`transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#333] mb-4 leading-relaxed">
              O processo eleitoral brasileiro é dividido em fases que começam meses antes do dia da votação. Cada fase tem regras específicas definidas pelo TSE e pela legislação eleitoral.
            </p>
            <p className="text-[#333] mb-8 leading-relaxed">
              O Código Eleitoral e a Lei das Eleições (9.504/1997) regulam todo o processo, desde o alistamento dos eleitores até a diplomação dos eleitos.
            </p>

            <div className="space-y-4">
              {phases.map((phase, i) => (
                <div key={i} className="flex gap-4 p-4 bg-[#fafbf7] rounded-xl border border-[#e5e7e2]">
                  <div className="w-12 h-12 rounded-full bg-[#d6f0df] flex items-center justify-center text-2xl flex-shrink-0">
                    {phase.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d0d0d] mb-1">{phase.title}</h4>
                    <p className="text-sm text-[#555]">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Anos */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-[#0d4f24] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2 font-serif">
                Próximas eleições
              </h3>
              <p className="text-white/70 mb-8">Marque na agenda e não perca!</p>

              <div className="space-y-4">
                {anos.map((ano, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <span className="text-4xl font-black text-[#f5c200]">
                      {ano.year}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{ano.title}</h4>
                      <p className="text-sm text-white/70">{ano.desc}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${ano.chipColor}`}>
                      {ano.chip}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warning Box */}
              <div className="mt-8 p-4 bg-[#f5c200]/20 rounded-xl border border-[#f5c200]/30">
                <h4 className="font-bold text-[#f5c200] mb-2">
                  Datas importantes para 2026
                </h4>
                <p className="text-sm text-white/80">
                  O prazo para alistamento eleitoral para as eleições de 2026 se encerra em maio de 2026. Se você ainda não tem título, corra! Acesse{" "}
                  <Link href="https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral" target="_blank" className="text-[#f5c200] underline">
                    autoatendimento TSE
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
