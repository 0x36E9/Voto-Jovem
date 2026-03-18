"use client"

import { Card, CardContent } from "@/components/ui/card"

const infoPills = [
  { icon: "⚖️", title: "Poderes da República", desc: "O Brasil tem 3 poderes independentes: Executivo (governa), Legislativo (faz leis) e Judiciário (julga). O voto elege membros dos dois primeiros." },
  { icon: "📋", title: "Constituição Cidadã de 1988", desc: "A atual Constituição foi fruto da participação de mais de 40 mil pessoas durante a Assembleia Constituinte. É a mais democrática da nossa história." },
  { icon: "🌎", title: "Brasil no ranking democrático", desc: "O Brasil é classificado como 'democracia imperfeita' pelo Índice de Democracia da Economist. Para melhorar esse índice, precisamos de mais participação cidadã." },
  { icon: "⚖️", title: "Justiça Eleitoral", desc: "O TSE (Tribunal Superior Eleitoral) e os TREs estaduais são responsáveis por organizar, fiscalizar e garantir a lisura das eleições no Brasil." },
  { icon: "🔒", title: "Voto secreto", desc: "A Constituição garante que ninguém pode ser obrigado a revelar seu voto. Isso protege você de pressões familiares, trabalhistas ou sociais na hora de decidir." },
  { icon: "🌱", title: "Democracia não é permanente", desc: "Países que negligenciaram a participação política viram democracias desmoronarem. O Brasil já viveu isso em 1964. Votar é proteger o que conquistamos." },
]

const timeline = [
  { icon: "📜", year: "1822 — Independência", desc: "Primeiras eleições para a Assembleia Constituinte. Voto restrito a homens livres com renda mínima." },
  { icon: "👩", year: "1932 — Voto feminino", desc: "Mulheres conquistam o direito ao voto. O Brasil foi o 1º da América do Sul a garantir esse direito." },
  { icon: "🗳️", year: "1988 — Constituição Cidadã", desc: "Voto universal, secreto e direto garantido a todos os brasileiros alfabetizados a partir dos 16 anos." },
  { icon: "💻", year: "1996 — Urna eletrônica", desc: "Brasil se torna pioneiro mundial no voto eletrônico, eliminando fraudes de cédulas e agilizando a apuração." },
]

export function DemocraciaSection() {
  return (
    <section id="democracia" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Fundamentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            O que é democracia?
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Para entender por que votar, primeiro precisamos entender o sistema que torna possível a participação política de todos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0d4f24]">
              Democracia: o governo do povo
            </h3>

            <div className="prose prose-lg text-[#333]">
              <p>
                A palavra democracia vem do grego demos (povo) + kratia (poder). É o sistema em que o poder político emana dos cidadãos, que o exercem diretamente ou por meio de representantes eleitos.
              </p>
              <p>
                O Brasil é uma República Federativa Presidencialista e adota o sistema democrático representativo. Isso significa que elegemos representantes — vereadores, deputados, senadores, governadores e o presidente — para tomar decisões em nosso nome.
              </p>
              <p>
                A Constituição de 1988, chamada de "Constituição Cidadã", é o marco do atual período democrático brasileiro. Ela garantiu o sufrágio universal — o direito de voto a todos os cidadãos, independentemente de raça, gênero, classe social ou nível de escolaridade.
              </p>
              <p>
                A democracia não é perfeita, mas é o sistema que melhor protege os direitos individuais e coletivos. Ela permite que erros sejam corrigidos através das urnas, sem necessidade de violência ou ruptura institucional.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="p-6 bg-[#f0faf4] border-l-4 border-[#22a050] rounded-r-xl">
              <h4 className="font-bold text-[#0d4f24] mb-2">
                Artigo 1º da Constituição Federal
              </h4>
              <p className="text-[#333] italic">
                "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição." — Parágrafo único do Art. 1º da CF/1988.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-[#0d0d0d] mb-6">
                A história do voto no Brasil
              </h4>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-full bg-[#d6f0df]" />
                    )}
                    <div className="w-10 h-10 rounded-full bg-[#d6f0df] flex items-center justify-center text-xl flex-shrink-0 z-10">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0d4f24]">{item.year}</h5>
                      <p className="text-sm text-[#555]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Pills */}
          <div className="space-y-4">
            {infoPills.map((pill, i) => (
              <Card key={i} className="border-[#e5e7e2] hover:border-[#22a050]/40 transition-all hover:shadow-md">
                <CardContent className="p-5">
                  <span className="text-3xl mb-3 block">{pill.icon}</span>
                  <h4 className="font-bold text-[#0d0d0d] mb-2">{pill.title}</h4>
                  <p className="text-sm text-[#555]">{pill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
