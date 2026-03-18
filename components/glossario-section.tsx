"use client"

import { useInView } from "@/hooks/use-in-view"

const termos = [
  { term: "Sufrágio", tag: "Base", desc: "Direito de votar e ser votado. No Brasil, é universal — todo cidadão apto tem esse direito independentemente de renda, raça, gênero ou escolaridade." },
  { term: "Eleitorado", tag: "Base", desc: "Conjunto de eleitores aptos a votar no Brasil. Atualmente mais de 147 milhões de brasileiros compõem o eleitorado nacional." },
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
    <section id="glossario" ref={ref} className="py-24 bg-[#fafbf7]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Vocabulário
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Glossário eleitoral
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Os termos mais importantes do universo político-eleitoral explicados de forma clara e objetiva.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {termos.map((termo, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#e5e7e2] p-5 hover:border-[#22a050]/40 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-[#0d4f24]">
                  {termo.term}
                </h4>
                <span className="px-2 py-0.5 text-xs font-semibold bg-[#d6f0df] text-[#0d4f24] rounded-full">
                  {termo.tag}
                </span>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">{termo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
