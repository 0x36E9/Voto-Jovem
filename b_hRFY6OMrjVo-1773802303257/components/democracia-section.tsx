"use client"

import { Card, CardContent } from "@/components/ui/card"

const infoPills = [
  { icon: "⚖️", title: "Poderes da Republica", desc: "O Brasil tem 3 poderes independentes: Executivo (governa), Legislativo (faz leis) e Judiciario (julga). O voto elege membros dos dois primeiros." },
  { icon: "📋", title: "Constituicao Cidada de 1988", desc: "A atual Constituicao foi fruto da participacao de mais de 40 mil pessoas durante a Assembleia Constituinte. E a mais democratica da nossa historia." },
  { icon: "🌎", title: "Brasil no ranking democratico", desc: "O Brasil e classificado como 'democracia imperfeita' pelo Indice de Democracia da Economist. Para melhorar esse indice, precisamos de mais participacao cidada." },
  { icon: "⚖️", title: "Justica Eleitoral", desc: "O TSE (Tribunal Superior Eleitoral) e os TREs estaduais sao responsaveis por organizar, fiscalizar e garantir a lisura das eleicoes no Brasil." },
  { icon: "🔒", title: "Voto secreto", desc: "A Constituicao garante que ninguem pode ser obrigado a revelar seu voto. Isso protege voce de pressoes familiares, trabalhistas ou sociais na hora de decidir." },
  { icon: "🌱", title: "Democracia nao e permanente", desc: "Paises que negligenciaram a participacao politica viram democracias desmoronarem. O Brasil ja viveu isso em 1964. Votar e proteger o que conquistamos." },
]

const timeline = [
  { icon: "📜", year: "1822 — Independencia", desc: "Primeiras eleicoes para a Assembleia Constituinte. Voto restrito a homens livres com renda minima." },
  { icon: "👩", year: "1932 — Voto feminino", desc: "Mulheres conquistam o direito ao voto. O Brasil foi o 1º da America do Sul a garantir esse direito." },
  { icon: "🗳️", year: "1988 — Constituicao Cidada", desc: "Voto universal, secreto e direto garantido a todos os brasileiros alfabetizados a partir dos 16 anos." },
  { icon: "💻", year: "1996 — Urna eletronica", desc: "Brasil se torna pioneiro mundial no voto eletronico, eliminando fraudes de cedulas e agilizando a apuracao." },
]

export function DemocraciaSection() {
  return (
    <section id="democracia" className="py-24 px-[5%] bg-[#f7f7f3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
            Fundamentos
          </span>
          <h2 
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            O que e <em className="text-[#1a7a3c] italic">democracia?</em>
          </h2>
          <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
            Para entender por que votar, primeiro precisamos entender o sistema que torna possivel a participacao politica de todos.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#0d4f24] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Democracia: o governo do povo
            </h3>
            <div className="space-y-4 text-[#444440] leading-relaxed">
              <p>
                A palavra democracia vem do grego <em>demos</em> (povo) + <em>kratia</em> (poder). E o sistema em que <strong className="text-[#0d4f24]">o poder politico emana dos cidadaos</strong>, que o exercem diretamente ou por meio de representantes eleitos.
              </p>
              <p>
                O Brasil e uma <strong className="text-[#0d4f24]">Republica Federativa Presidencialista</strong> e adota o sistema democratico representativo. Isso significa que elegemos representantes — vereadores, deputados, senadores, governadores e o presidente — para tomar decisoes em nosso nome.
              </p>
              <p>
                A Constituicao de 1988, chamada de <strong className="text-[#0d4f24]">"Constituicao Cidada"</strong>, e o marco do atual periodo democratico brasileiro. Ela garantiu o sufragio universal — o direito de voto a todos os cidadaos, independentemente de raca, genero, classe social ou nivel de escolaridade.
              </p>
              <p>
                A democracia nao e perfeita, mas e o sistema que melhor protege os direitos individuais e coletivos. Ela permite que erros sejam corrigidos atraves das urnas, sem necessidade de violencia ou ruptura institucional.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-[#0d4f24] text-white rounded-[20px] p-8 mt-6">
              <h4 className="text-xl font-bold text-[#f5c200] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Artigo 1º da Constituicao Federal
              </h4>
              <p className="text-white/80 leading-relaxed">
                "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituicao." — Paragrafo unico do Art. 1º da CF/1988.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#0d4f24] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                A historia do voto no Brasil
              </h3>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-5 relative">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-[-24px] w-0.5 bg-gray-200" />
                    )}
                    <div className="w-10 h-10 rounded-full bg-[#f5c200] flex items-center justify-center text-lg flex-shrink-0 z-10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0d4f24]">{item.year}</h4>
                      <p className="text-sm text-[#444440] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Pills */}
          <div className="flex flex-col gap-4">
            {infoPills.map((pill, i) => (
              <Card 
                key={i}
                className="border-2 border-gray-100 hover:border-[#1a7a3c] hover:shadow-lg hover:shadow-[#1a7a3c]/10 hover:translate-x-1 transition-all cursor-default"
              >
                <CardContent className="p-5">
                  <div className="text-3xl mb-2">{pill.icon}</div>
                  <h4 className="font-bold text-[#0d4f24] mb-1">{pill.title}</h4>
                  <p className="text-sm text-[#444440] leading-relaxed">{pill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
