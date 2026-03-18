"use client"

const tipos = [
  {
    num: "01",
    icon: "🏛️",
    title: "Eleições Gerais",
    desc: "Acontecem a cada 4 anos (anos pares: 2026, 2030...). Você vota para Presidente da República, Governadores, Senadores, Deputados Federais e Deputados Estaduais. São as eleições mais importantes do país.",
    chip: "A cada 4 anos",
    variant: "verde"
  },
  {
    num: "02",
    icon: "🏘️",
    title: "Eleições Municipais",
    desc: "Ocorrem 2 anos depois das gerais (2024, 2028...). Você elege o Prefeito e os Vereadores da sua cidade. Essas eleições impactam diretamente sua vida: transporte, coleta de lixo, escolas municipais e postos de saúde.",
    chip: "A cada 4 anos",
    variant: "amarelo"
  },
  {
    num: "03",
    icon: "🔄",
    title: "Segundo Turno",
    desc: "Quando nenhum candidato obtém mais de 50% dos votos válidos no 1º turno, ocorre o 2º turno entre os dois mais votados. Acontece nas eleições presidenciais e em municípios com mais de 200 mil eleitores.",
    chip: "Quando necessário",
    variant: "claro"
  },
  {
    num: "04",
    icon: "📝",
    title: "Plebiscito",
    desc: "Consulta popular onde cidadãos decidem diretamente sobre uma questão política ou social antes da tomada de decisão pelo governo. Um exemplo histórico foi o plebiscito de 1993 sobre monarquia x república no Brasil.",
    chip: "Consulta prévia",
    variant: "claro"
  },
  {
    num: "05",
    icon: "✅",
    title: "Referendo",
    desc: "Similar ao plebiscito, mas ocorre após a decisão governamental para aprová-la ou rejeitá-la. Em 2005, o Brasil realizou um referendo sobre o desarmamento — a maioria votou contra a proibição da venda de armas de fogo.",
    chip: "Confirmação",
    variant: "claro"
  },
  {
    num: "06",
    icon: "📋",
    title: "Iniciativa Popular",
    desc: "Mecanismo pelo qual a própria população pode propor um projeto de lei, desde que colete assinaturas de pelo menos 1% do eleitorado nacional. A Lei da Ficha Limpa, por exemplo, teve origem em iniciativa popular com mais de 1,6 milhão de assinaturas.",
    chip: "Participação direta",
    variant: "claro"
  },
]

export function TiposSection() {
  return (
    <section id="tipos" className="py-24 bg-[#fafbf7]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Eleições
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Tipos de eleição
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            No Brasil existem diferentes eleições em anos separados. Entenda como funciona cada uma e para quem você vota em cada turno.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipos.map((tipo) => (
            <div
              key={tipo.num}
              className={`relative rounded-2xl p-6 border transition-all hover:shadow-lg ${
                tipo.variant === "verde"
                  ? "bg-[#0d4f24] border-[#0d4f24] text-white"
                  : tipo.variant === "amarelo"
                  ? "bg-[#f5c200] border-[#f5c200] text-[#0d0d0d]"
                  : "bg-white border-[#e5e7e2]"
              }`}
            >
              {/* Background Circle */}
              <div className={`absolute top-4 right-4 w-16 h-16 rounded-full opacity-10 ${
                tipo.variant === "verde" ? "bg-white" : tipo.variant === "amarelo" ? "bg-[#0d0d0d]" : "bg-[#0d4f24]"
              }`} />

              {/* Number */}
              <span className={`text-5xl font-black opacity-20 ${
                tipo.variant === "verde" || tipo.variant === "amarelo" ? "" : "text-[#0d4f24]"
              }`}>
                {tipo.num}
              </span>

              {/* Content */}
              <span className="text-4xl block my-3">{tipo.icon}</span>
              <h3 className={`text-xl font-bold mb-2 ${
                tipo.variant === "claro" ? "text-[#0d0d0d]" : ""
              }`}>
                {tipo.title}
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                tipo.variant === "verde" ? "text-white/80" : tipo.variant === "amarelo" ? "text-[#0d0d0d]/80" : "text-[#555]"
              }`}>
                {tipo.desc}
              </p>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                tipo.variant === "verde" ? "bg-white/20 text-white" : tipo.variant === "amarelo" ? "bg-[#0d0d0d]/10 text-[#0d0d0d]" : "bg-[#d6f0df] text-[#0d4f24]"
              }`}>
                {tipo.chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
