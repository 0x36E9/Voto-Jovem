"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const mitos = [
  {
    mito: '"A urna eletrônica pode ser fraudada facilmente"',
    verdade:
      "A urna eletrônica brasileira passa por mais de 30 camadas de segurança, incluindo criptografia de nível militar, lacres físicos e auditorias públicas. Desde 1996, nenhuma fraude foi comprovada. O código-fonte é aberto para análise de partidos, universidades e entidades como a OAB e as Forças Armadas. O Brasil é referência mundial em segurança eleitoral.",
  },
  {
    mito: '"Meu voto não faz diferença, são milhões de pessoas"',
    verdade:
      "Eleições já foram decididas por margens mínimas. Em 2020, pelo menos 17 prefeitos foram eleitos por diferença de menos de 10 votos. Em 2018, um deputado estadual foi eleito com apenas 1 voto de diferença. Além disso, a abstenção enfraquece a legitimidade democrática — quanto menos pessoas votam, menos representativo é o resultado.",
  },
  {
    mito: '"Todos os políticos são iguais, não adianta votar"',
    verdade:
      'Políticos têm históricos, ideologias e comportamentos muito diferentes. Há representantes com décadas de trabalho comprovado por suas comunidades. O "todos são iguais" é uma narrativa que favorece quem não quer que você vote e analise criticamente. Pesquise, compare e exija contas. A Lei da Ficha Limpa existe justamente para separar candidatos com histórico de crimes dos demais.',
  },
  {
    mito: '"O voto é uma obrigação chata, sem sentido prático"',
    verdade:
      "O voto obrigatório existe porque, sem ele, historicamente, os mais pobres e vulneráveis deixam de votar — seja por desinformação, seja por pressão. A obrigatoriedade garante uma representatividade mais ampla. Países com voto voluntário têm abstenção altíssima (EUA: 40–60% de abstenção). Votar é uma das formas mais simples de exercer poder real sobre quem governa sua vida.",
  },
]

export function MitosSection() {
  const { ref, isInView } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMito = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="mitos" className="py-24 px-[5%] bg-[#f7f7f3]">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Desmistificando
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          Mitos e <em className="text-[#1a7a3c] italic">verdades</em>
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
          Desinformação sobre eleições é comum. Veja as fake news mais comuns e entenda a verdade por trás delas.
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-12 max-w-[900px]">
        {mitos.map((item, i) => (
          <div
            key={i}
            className={`bg-white rounded-[20px] overflow-hidden border-2 border-[#eee] transition-all hover:border-[#1a7a3c] ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            {/* Header */}
            <button
              onClick={() => toggleMito(i)}
              className="w-full flex justify-between items-start p-6 gap-4 text-left"
            >
              <div className="bg-[#ffe8e8] rounded-xl p-4 flex-1">
                <span className="inline-block bg-[#ff4444] text-white text-[0.68rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded mb-2">
                  MITO
                </span>
                <p className="text-base font-semibold text-[#c00] italic">{item.mito}</p>
              </div>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 transition-all ${
                openIndex === i 
                  ? "bg-[#1a7a3c] text-white rotate-45" 
                  : "bg-[#d6f0df] text-[#1a7a3c]"
              }`}>
                +
              </div>
            </button>

            {/* Verdade */}
            <div className={`overflow-hidden transition-all duration-400 ${
              openIndex === i ? "max-h-[300px] pb-6 px-6" : "max-h-0 px-6"
            }`}>
              <span className="inline-block bg-[#d6f0df] text-[#1a7a3c] text-[0.68rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded mb-2">
                VERDADE
              </span>
              <p className="text-base text-[#444440] leading-relaxed">
                {item.verdade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
