"use client"

import { useInView } from "@/hooks/use-in-view"

const bentoItems = [
  {
    variant: "verde",
    cols: "lg:col-span-2",
    icon: "🎓",
    big: "R$4.200",
    title: "Valor anual por aluno no ensino básico público",
    desc: "Esse valor, do FUNDEB, é decidido pelo governo federal eleito. Mais investimento significa melhores professores, estrutura e materiais para você e para suas futuras gerações."
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
    desc: "Programas de moradia popular, como o Minha Casa Minha Vida, dependem do governo federal. O orçamento destinado à habitação é definido pelos eleitos. Um voto consciente pode significar mais famílias com casa própria."
  },
  {
    variant: "verde",
    cols: "lg:col-span-2",
    icon: "📱",
    big: "45%",
    title: "Dos jovens brasileiros sem acesso à internet de qualidade",
    desc: "Investimento em infraestrutura digital, regulação das redes sociais e políticas de inclusão tecnológica são pauta eleitoral e afetam diretamente você."
  }
]

export function ImpactoSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="impacto" className="py-24 px-[5%] bg-[#f7f7f3]">
      <div ref={ref} className={`max-w-[700px] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Por que importa
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          O impacto do <em className="text-[#1a7a3c] italic">seu voto</em>
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed">
          Cada voto tem consequências concretas na sua vida. Veja como as decisões eleitorais afetam diretamente áreas essenciais do cotidiano brasileiro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {bentoItems.map((item, i) => (
          <div
            key={i}
            className={`${item.cols} rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-transparent ${
              item.variant === "verde" ? "bg-[#0d4f24]" :
              item.variant === "amarelo" ? "bg-[#f5c200]" :
              "bg-white hover:border-[#1a7a3c]/20"
            } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <span className="text-4xl block mb-4">{item.icon}</span>
            {item.big && (
              <div className={`font-[var(--font-heading)] text-6xl font-black leading-none mb-1 ${
                item.variant === "verde" ? "text-[#f5c200]" :
                item.variant === "amarelo" ? "text-[#0d4f24]" :
                "text-[#0d4f24]"
              }`}>
                {item.big}
              </div>
            )}
            <h3 className={`text-lg font-bold mb-2 ${
              item.variant === "verde" ? "text-white" :
              item.variant === "amarelo" ? "text-[#0d4f24]" :
              "text-[#0d4f24]"
            }`}>
              {item.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              item.variant === "verde" ? "text-white/70" :
              item.variant === "amarelo" ? "text-black/60" :
              "text-[#444440]"
            }`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
