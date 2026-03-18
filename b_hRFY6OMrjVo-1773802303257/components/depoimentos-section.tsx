"use client"

import { useInView } from "@/hooks/use-in-view"

const depoimentos = [
  {
    initial: "A",
    name: "Ana Luiza, 17 anos",
    role: "Estudante do Ensino Medio, Belo Horizonte",
    quote: "Votei pela primeira vez aos 16 anos. A sensacao de entrar na cabine e fazer uma escolha que realmente importa e indescritivel. Me senti parte de algo maior do que eu."
  },
  {
    initial: "G",
    name: "Gabriel Souza, 22 anos",
    role: "Universitario, Salvador",
    quote: "Sempre achei que politica nao era comigo, mas quando o transporte da minha cidade piorou, entendi que eu tinha o poder de mudar isso nas urnas. Nunca mais faltei a uma eleicao."
  },
  {
    initial: "M",
    name: "Mariana Costa, 19 anos",
    role: "Jovem eleitora, Recife",
    quote: "Minha avo me contou que nao pode votar por anos. Hoje votar e um ato de respeito a historia de luta das mulheres. Cada eleicao me lembro disso e me emociono ao confirmar meu voto."
  }
]

export function DepoimentosSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="depoimentos" className="py-24 px-[5%] bg-[#0d4f24]">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#f5c200]/20 text-[#f5c200] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#f5c200] rounded-full" />
          Vozes Jovens
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-none tracking-tight mb-4">
          Quem <em className="text-[#f5c200] italic">votou</em> diz:
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {depoimentos.map((dep, i) => (
          <div
            key={i}
            className={`bg-white/[0.07] border border-white/[0.12] rounded-[22px] p-8 transition-colors hover:bg-white/10 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            {/* Stars */}
            <div className="text-[#f5c200] text-base mb-4 tracking-wider">
              ★★★★★
            </div>

            {/* Quote */}
            <blockquote className="text-base text-white/85 leading-relaxed italic mb-6">
              "{dep.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#f5c200] flex items-center justify-center font-[var(--font-heading)] text-xl font-bold text-[#0d4f24] flex-shrink-0">
                {dep.initial}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{dep.name}</div>
                <div className="text-xs text-white/50">{dep.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
