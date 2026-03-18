"use client"

import { useInView } from "@/hooks/use-in-view"

const depoimentos = [
  {
    initial: "A",
    name: "Ana Luiza, 17 anos",
    role: "Estudante do Ensino Médio, Belo Horizonte",
    quote: "Votei pela primeira vez aos 16 anos. A sensação de entrar na cabine e fazer uma escolha que realmente importa é indescritível. Me senti parte de algo maior do que eu."
  },
  {
    initial: "G",
    name: "Gabriel Souza, 22 anos",
    role: "Universitário, Salvador",
    quote: "Sempre achei que política não era comigo, mas quando o transporte da minha cidade piorou, entendi que eu tinha o poder de mudar isso nas urnas. Nunca mais faltei a uma eleição."
  },
  {
    initial: "M",
    name: "Mariana Costa, 19 anos",
    role: "Jovem eleitora, Recife",
    quote: "Minha avó me contou que não pôde votar por anos. Hoje votar é um ato de respeito à história de luta das mulheres. Cada eleição me lembro disso e me emociono ao confirmar meu voto."
  }
]

export function DepoimentosSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Vozes Jovens
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Quem votou diz:
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {depoimentos.map((dep, i) => (
            <div key={i} className="bg-[#fafbf7] rounded-2xl p-6 border border-[#e5e7e2]">
              {/* Stars */}
              <div className="text-[#f5c200] text-lg mb-4">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-[#333] leading-relaxed mb-6 italic">
                "{dep.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0d4f24] text-white flex items-center justify-center font-bold">
                  {dep.initial}
                </div>
                <div>
                  <p className="font-bold text-[#0d0d0d] text-sm">{dep.name}</p>
                  <p className="text-xs text-[#666]">{dep.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
