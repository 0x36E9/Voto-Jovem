"use client"

import { useInView } from "@/hooks/use-in-view"

const bentoItems = [
  {
    variant: "verde",
    cols: "lg:col-span-2",
    icon: "🎓",
    big: "R$4.200",
    title: "Valor anual por aluno no ensino básico público",
    desc: "Esse valor, o FUNDEB, é decidido pelo governo federal eleito. Mais investimento significa melhores professores, estrutura e materiais para você e para suas futuras gerações."
  },
  {
    variant: "amarelo",
    cols: "lg:col-span-2",
    icon: "💊",
    big: "210M",
    title: "Brasileiros dependem do SUS",
    desc: "O Sistema Único de Saúde, criado pela Constituição de 1988, atende toda a população. O financiamento e as políticas do SUS dependem diretamente de quem você elege."
  },
  {
    variant: "branco",
    cols: "lg:col-span-1",
    icon: "🌳",
    title: "Meio ambiente",
    desc: "Desmatamento, saneamento básico e transição energética são pautas eleitorais com impacto real no clima."
  },
  {
    variant: "branco",
    cols: "lg:col-span-1",
    icon: "💼",
    title: "Emprego jovem",
    desc: "Políticas de primeiro emprego, estágios e qualificação profissional são decididas pelos eleitos."
  },
  {
    variant: "branco",
    cols: "lg:col-span-2",
    icon: "🏘️",
    big: "13,1M",
    title: "Famílias em déficit habitacional no Brasil",
    desc: "Programas de moradia popular como o Minha Casa Minha Vida dependem do governo federal. O orçamento destinado a habitação é definido pelos eleitos. Um voto consciente pode significar mais famílias com casa própria."
  },
  {
    variant: "verde",
    cols: "lg:col-span-2",
    icon: "📱",
    big: "45%",
    title: "Dos jovens brasileiros sem acesso a internet de qualidade",
    desc: "Investimento em infraestrutura digital, regulação das redes sociais e políticas de inclusão tecnológica são pauta eleitoral — e afetam diretamente você."
  }
]

export function ImpactoSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="impacto" ref={ref} className="py-24 bg-[#fafbf7]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Por que importa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            O impacto do seu voto
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Cada voto tem consequências concretas na sua vida. Veja como as decisões eleitorais afetam diretamente áreas essenciais do cotidiano brasileiro.
          </p>
        </div>

        <div className={`grid lg:grid-cols-4 gap-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {bentoItems.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 ${item.cols} ${
                item.variant === "verde"
                  ? "bg-[#0d4f24] text-white"
                  : item.variant === "amarelo"
                  ? "bg-[#f5c200] text-[#0d0d0d]"
                  : "bg-white border border-[#e5e7e2]"
              }`}
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              {item.big && (
                <p className={`text-4xl md:text-5xl font-black mb-2 ${
                  item.variant === "verde" ? "text-[#f5c200]" : item.variant === "amarelo" ? "text-[#0d4f24]" : "text-[#0d4f24]"
                }`}>
                  {item.big}
                </p>
              )}
              <h3 className={`text-lg font-bold mb-2 ${
                item.variant === "branco" ? "text-[#0d0d0d]" : ""
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                item.variant === "verde" ? "text-white/80" : item.variant === "amarelo" ? "text-[#0d0d0d]/80" : "text-[#555]"
              }`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
