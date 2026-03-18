"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const mitos = [
  {
    mito: '"A urna eletrônica pode ser fraudada facilmente"',
    verdade: 'A urna eletrônica brasileira passa por mais de 30 camadas de segurança, incluindo criptografia militar, lacres físicos e auditorias públicas. Desde 1996, nenhuma fraude foi comprovada. O código-fonte é aberto para análise de partidos, universidades e entidades como OAB e Forças Armadas. O Brasil é referência mundial em segurança eleitoral.'
  },
  {
    mito: '"Meu voto não faz diferença, são milhões de pessoas"',
    verdade: 'Eleições já foram decididas por margem mínima. Em 2020, pelo menos 17 prefeitos foram eleitos por diferença de menos de 10 votos. Em 2018, um deputado estadual foi eleito com apenas 1 voto de diferença. Além disso, a abstenção enfraquece a legitimidade democrática — quanto menos pessoas votam, menos representativo é o resultado.'
  },
  {
    mito: '"Todos os políticos são iguais, não adianta votar"',
    verdade: 'Políticos têm históricos, ideologias e comportamentos muito diferentes. Há representantes com décadas de trabalho comprovado por suas comunidades. A "todos são iguais" é uma narrativa que favorece quem não quer que você vote e analise criticamente. Pesquise, compare e exija contas. A Lei da Ficha Limpa existe justamente para separar candidatos com histórico de crimes dos demais.'
  },
  {
    mito: '"O voto é uma obrigação chata sem sentido prático"',
    verdade: 'O voto obrigatório existe porque sem ele, historicamente, os mais pobres e vulneráveis deixam de votar — seja por desinformação, seja por pressão. A obrigatoriedade garante uma representatividade mais ampla. Países com voto voluntário têm abstenção altíssima (EUA: 40-60% de abstenção). Votar é uma das formas mais simples de exercer poder real sobre quem governa sua vida.'
  }
]

export function MitosSection() {
  const { ref, isInView } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMito = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="mitos" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Desmistificando
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Mitos e verdades
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Desinformação sobre eleições é comum. Veja as fake news mais comuns e entenda a verdade por trás delas.
          </p>
        </div>

        <div className={`space-y-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {mitos.map((item, i) => (
            <div key={i} className="bg-[#fafbf7] rounded-xl border border-[#e5e7e2] overflow-hidden">
              {/* Header */}
              <button
                onClick={() => toggleMito(i)}
                className="w-full flex justify-between items-start p-6 gap-4 text-left"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-bold bg-[#ff4444]/10 text-[#ff4444] rounded-full mb-2">
                    MITO
                  </span>
                  <p className="text-lg font-bold text-[#0d0d0d]">{item.mito}</p>
                </div>
                <span className={`text-2xl font-bold text-[#0d4f24] transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {/* Verdade */}
              <div className={`px-6 pb-6 transition-all ${openIndex === i ? 'block' : 'hidden'}`}>
                <span className="inline-block px-2 py-0.5 text-xs font-bold bg-[#22a050]/10 text-[#22a050] rounded-full mb-2">
                  VERDADE
                </span>
                <p className="text-[#333] leading-relaxed">
                  {item.verdade}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
