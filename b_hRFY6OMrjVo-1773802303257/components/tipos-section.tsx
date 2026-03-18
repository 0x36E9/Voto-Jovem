"use client"

const tipos = [
  { 
    num: "01", 
    icon: "🏛️", 
    title: "Eleicoes Gerais", 
    desc: "Acontecem a cada 4 anos (anos pares: 2026, 2030...). Voce vota para Presidente da Republica, Governadores, Senadores, Deputados Federais e Deputados Estaduais. Sao as eleicoes mais importantes do pais.",
    chip: "A cada 4 anos",
    variant: "verde"
  },
  { 
    num: "02", 
    icon: "🏘️", 
    title: "Eleicoes Municipais", 
    desc: "Ocorrem 2 anos depois das gerais (2024, 2028...). Voce elege o Prefeito e os Vereadores da sua cidade. Essas eleicoes impactam diretamente sua vida: transporte, coleta de lixo, escolas municipais e postos de saude.",
    chip: "A cada 4 anos",
    variant: "amarelo"
  },
  { 
    num: "03", 
    icon: "🔄", 
    title: "Segundo Turno", 
    desc: "Quando nenhum candidato obtem mais de 50% dos votos validos no 1º turno, ocorre o 2º turno entre os dois mais votados. Acontece nas eleicoes presidenciais e em municipios com mais de 200 mil eleitores.",
    chip: "Quando necessario",
    variant: "claro"
  },
  { 
    num: "04", 
    icon: "📝", 
    title: "Plebiscito", 
    desc: "Consulta popular onde cidadaos decidem diretamente sobre uma questao politica ou social antes da tomada de decisao pelo governo. Um exemplo historico foi o plebiscito de 1993 sobre monarquia x republica no Brasil.",
    chip: "Consulta previa",
    variant: "claro"
  },
  { 
    num: "05", 
    icon: "✅", 
    title: "Referendo", 
    desc: "Similar ao plebiscito, mas ocorre apos a decisao governamental para aprova-la ou rejeita-la. Em 2005, o Brasil realizou um referendo sobre o desarmamento — a maioria votou contra a proibicao da venda de armas de fogo.",
    chip: "Confirmacao",
    variant: "claro"
  },
  { 
    num: "06", 
    icon: "📋", 
    title: "Iniciativa Popular", 
    desc: "Mecanismo pelo qual a propria populacao pode propor um projeto de lei, desde que colete assinaturas de pelo menos 1% do eleitorado nacional. A Lei da Ficha Limpa, por exemplo, teve origem em iniciativa popular com mais de 1,6 milhao de assinaturas.",
    chip: "Participacao direta",
    variant: "claro"
  },
]

export function TiposSection() {
  return (
    <section id="tipos" className="py-24 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
            Eleicoes
          </span>
          <h2 
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Tipos de <span className="bg-[#f5c200] px-2 rounded-md">eleicao</span>
          </h2>
          <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
            No Brasil existem diferentes eleicoes em anos separados. Entenda como funciona cada uma e para quem voce vota em cada turno.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipos.map((tipo) => (
            <div 
              key={tipo.num}
              className={`rounded-3xl p-8 relative overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-xl ${
                tipo.variant === 'verde' 
                  ? 'bg-[#0d4f24] text-white' 
                  : tipo.variant === 'amarelo' 
                    ? 'bg-[#f5c200]' 
                    : 'bg-[#f7f7f3] border-2 border-gray-200'
              }`}
            >
              {/* Background Circle */}
              <div className="absolute -top-5 -right-5 w-[120px] h-[120px] rounded-full bg-white/[0.06]" />
              
              {/* Number */}
              <span 
                className="absolute top-6 right-7 text-6xl font-black opacity-20 leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {tipo.num}
              </span>

              {/* Content */}
              <span className="text-4xl block mb-4">{tipo.icon}</span>
              <h3 className={`text-xl font-bold mb-3 ${
                tipo.variant === 'verde' 
                  ? 'text-[#f5c200]' 
                  : tipo.variant === 'amarelo' 
                    ? 'text-[#0d4f24]' 
                    : 'text-[#0d4f24]'
              }`}>
                {tipo.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                tipo.variant === 'verde' 
                  ? 'text-white/80' 
                  : tipo.variant === 'amarelo' 
                    ? 'text-black/70' 
                    : 'text-[#444440]'
              }`}>
                {tipo.desc}
              </p>
              <span className={`inline-block mt-4 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full ${
                tipo.variant === 'verde' 
                  ? 'bg-[#f5c200] text-[#0d4f24]' 
                  : tipo.variant === 'amarelo' 
                    ? 'bg-[#0d4f24] text-[#f5c200]' 
                    : 'bg-[#1a7a3c] text-white'
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
