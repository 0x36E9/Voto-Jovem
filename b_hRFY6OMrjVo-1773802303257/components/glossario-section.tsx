"use client"

import { useInView } from "@/hooks/use-in-view"

const termos = [
  { term: "Sufragio", tag: "Base", desc: "Direito de votar e ser votado. No Brasil, e universal — todo cidadao apto tem esse direito independentemente de renda, raca, genero ou escolaridade." },
  { term: "Eleitorado", tag: "Base", desc: "Conjunto de eleitores aptos a votar no Brasil. Atualmente mais de 147 milhoes de brasileiros compoem o eleitorado nacional." },
  { term: "Zona Eleitoral", tag: "Titulo", desc: "Divisao territorial da Justica Eleitoral. Cada zona tem uma secao eleitoral onde os eleitores daquela area votam." },
  { term: "Mandato", tag: "Cargo", desc: "Periodo de exercicio de um cargo eletivo. No Brasil: vereadores e deputados (4 anos), senadores (8 anos), prefeitos, governadores e presidente (4 anos)." },
  { term: "Colegio Eleitoral", tag: "Historia", desc: "Orgao que elegeu presidentes durante a ditadura militar (1964-1985). Com a redemocratizacao, voltamos ao voto direto para presidente." },
  { term: "Quociente Eleitoral", tag: "Sistema", desc: "Calculo usado para definir quantas cadeiras cada partido ocupa na Camara. E a divisao de votos validos pelo numero de vagas disputadas." },
  { term: "Propaganda Eleitoral", tag: "Campanha", desc: "Material de campanha divulgado por candidatos. So pode ser veiculada a partir da data fixada pela legislacao, com regras rigidas do TSE." },
  { term: "Ficha Limpa", tag: "Lei", desc: "Lei complementar 135/2010, de iniciativa popular. Impede candidaturas de pessoas condenadas em segunda instancia por crimes graves como corrupcao." },
  { term: "Coligacao", tag: "Partido", desc: "Alianca entre partidos politicos para disputa eleitoral. Aumenta o quociente eleitoral e facilita a eleicao de candidatos em listas proporcionais." },
  { term: "Diploma", tag: "Posse", desc: "Documento emitido pela Justica Eleitoral apos a eleicao que certifica oficialmente o candidato eleito. E necessario para tomar posse do cargo." },
  { term: "Abstencao", tag: "Participacao", desc: "Percentual de eleitores que nao compareceram as urnas sem justificativa. Alta abstencao fragiliza a representatividade democratica." },
  { term: "Cedula Eleitoral", tag: "Historia", desc: "Papel fisico usado para votar antes da urna eletronica. Era suscetivel a fraudes. Em 1996, o Brasil substituiu as cedulas pelas urnas eletronicas." }
]

export function GlossarioSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="glossario" className="py-24 px-[5%] bg-white">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Vocabulario
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          Glossario <em className="text-[#1a7a3c] italic">eleitoral</em>
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
          Os termos mais importantes do universo politico-eleitoral explicados de forma clara e objetiva.
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
