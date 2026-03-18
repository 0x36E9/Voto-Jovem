"use client"

import { useInView } from "@/hooks/use-in-view"

const termos = [
  { term: "Sufrágio", tag: "Base", desc: "Direito de votar e ser votado. No Brasil, é universal: todo cidadão apto tem esse direito independentemente de renda, raça, gênero ou escolaridade." },
  { term: "Eleitorado", tag: "Base", desc: "Conjunto de eleitores aptos a votar no Brasil. Atualmente, mais de 147 milhões de brasileiros compõem o eleitorado nacional." },
  { term: "Zona Eleitoral", tag: "Título", desc: "Divisão territorial da Justiça Eleitoral. Cada zona tem uma seção eleitoral onde os eleitores daquela área votam." },
  { term: "Mandato", tag: "Cargo", desc: "Período de exercício de um cargo eletivo. No Brasil: vereadores e deputados (4 anos), senadores (8 anos), prefeitos, governadores e presidente (4 anos)." },
  { term: "Colégio Eleitoral", tag: "História", desc: "Órgão que elegeu presidentes durante a ditadura militar (1964-1985). Com a redemocratização, voltamos ao voto direto para presidente." },
  { term: "Quociente Eleitoral", tag: "Sistema", desc: "Cálculo usado para definir quantas cadeiras cada partido ocupa na Câmara. É a divisão de votos válidos pelo número de vagas disputadas." },
  { term: "Propaganda Eleitoral", tag: "Campanha", desc: "Material de campanha divulgado por candidatos. Só pode ser veiculada a partir da data fixada pela legislação, com regras rígidas do TSE." },
  { term: "Ficha Limpa", tag: "Lei", desc: "Lei complementar 135/2010, de iniciativa popular. Impede candidaturas de pessoas condenadas em segunda instância por crimes graves como corrupção." },
  { term: "Coligação", tag: "Partido", desc: "Aliança entre partidos políticos para disputa eleitoral. Aumenta o quociente eleitoral e facilita a eleição de candidatos em listas proporcionais." },
  { term: "Diploma", tag: "Posse", desc: "Documento emitido pela Justiça Eleitoral após a eleição que certifica oficialmente o candidato eleito. É necessário para tomar posse do cargo." },
  { term: "Abstenção", tag: "Participação", desc: "Percentual de eleitores que não compareceram às urnas sem justificativa. Alta abstenção fragiliza a representatividade democrática." },
  { term: "Cédula Eleitoral", tag: "História", desc: "Papel físico usado para votar antes da urna eletrônica. Era suscetível a fraudes. Em 1996, o Brasil substituiu as cédulas pelas urnas eletrônicas." }
]

export function GlossarioSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="glossario" className="py-24 px-[5%] bg-white">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Vocabulário
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          Glossário <em className="text-[#1a7a3c] italic">eleitoral</em>
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
          Os termos mais importantes do universo político-eleitoral explicados de forma clara e objetiva.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {termos.map((termo, i) => (
          <div
            key={i}
            className={`bg-[#f7f7f3] rounded-2xl p-6 border-2 border-transparent transition-all hover:border-[#1a7a3c] hover:bg-[#d6f0df] ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
            style={{ transitionDelay: `${(i % 6 + 1) * 50}ms` }}
          >
            <h4 className="text-base font-bold text-[#0d4f24] mb-2 flex items-center gap-2">
              {termo.term}
              <span className="text-[0.65rem] font-bold bg-[#f5c200] text-[#0d4f24] px-2 py-0.5 rounded tracking-wide uppercase">
                {termo.tag}
              </span>
            </h4>
            <p className="text-sm text-[#444440] leading-relaxed">{termo.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
