"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    num: "1",
    title: "Identifique-se",
    desc: "Chegue ao local de votação com documento com foto (RG, CNH, passaporte ou e-Título). O mesário vai confirmar sua identidade e liberar a urna."
  },
  {
    num: "2",
    title: "Vereador (5 dígitos)",
    desc: "A votação começa pelo cargo mais local. Digite o número do seu candidato a vereador (5 dígitos), confira o nome e a foto na tela e pressione CONFIRMA."
  },
  {
    num: "3",
    title: "Prefeito (2 dígitos)",
    desc: "Em eleições municipais, depois do vereador vem o prefeito (2 dígitos). Nas eleições gerais, você vota em deputado estadual (5), deputado federal (4), senador (3), governador (2) e presidente (2)."
  },
  {
    num: "4",
    title: "Use CORRIGE se errar",
    desc: "Se digitar o número errado antes de confirmar, basta pressionar CORRIGE e digitar novamente. Após confirmar, não é possível alterar o voto."
  },
  {
    num: "5",
    title: "Voto computado e pronto!",
    desc: 'Após confirmar todos os cargos, a urna emite um sinal sonoro e a tela exibe "VOTO COMPUTADO". Você votou! O processo inteiro leva menos de 2 minutos.'
  }
]

const urnaInfo = [
  {
    icon: "🔒",
    title: "Criptografia de ponta a ponta",
    desc: "Os votos são criptografados antes mesmo de serem armazenados. Impossível associar um voto ao eleitor."
  },
  {
    icon: "🔍",
    title: "Auditável por todos os partidos",
    desc: "Partidos políticos, Forças Armadas, OAB e sociedade civil podem auditar o processo eleitoral completo."
  },
  {
    icon: "⚡",
    title: "Resultado em poucas horas",
    desc: "Com 147 milhões de eleitores, o Brasil apura votos em menos de 2 horas — feito único no mundo."
  },
  {
    icon: "🌐",
    title: "Referência internacional",
    desc: "Mais de 20 países já estudaram o sistema eleitoral brasileiro para implementar em seus territórios."
  }
]

export function UrnaSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="urna" ref={ref} className="py-24 bg-[#0d4f24] text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,194,0,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#f5c200] rounded-full">
              Tutorial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Como funciona a urna eletrônica
            </h2>
            <p className="text-lg text-white/80">
              A urna eletrônica brasileira é referência mundial em segurança e eficiência. Aprenda o passo a passo para votar.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#f5c200] text-[#0d0d0d] flex items-center justify-center font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-white/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Urna Machine */}
        <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
            {/* Screen */}
            <div className="bg-[#2a3a2a] rounded-xl p-6 mb-6 border-4 border-[#333]">
              <p className="text-[#88ff88] font-mono text-sm mb-2">VOTO PARA PREFEITO</p>
              <p className="text-[#88ff88] font-mono text-4xl tracking-widest">_ _</p>
              <p className="text-[#88ff88]/60 font-mono text-xs mt-4">AGUARDANDO DIGITAÇÃO...</p>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <button key={n} className="bg-[#333] hover:bg-[#444] text-white font-bold py-4 rounded-lg text-xl transition-all">
                  {n}
                </button>
              ))}
              <button className="bg-white hover:bg-gray-100 text-[#0d0d0d] font-bold py-3 rounded-lg text-xs transition-all">
                BRANCO
              </button>
              <button className="bg-[#333] hover:bg-[#444] text-white font-bold py-4 rounded-lg text-xl transition-all">
                0
              </button>
              <button className="bg-[#ff6600] hover:bg-[#ff7711] text-white font-bold py-3 rounded-lg text-xs transition-all">
                CORRIGE
              </button>
              <button className="col-span-3 bg-[#22a050] hover:bg-[#1a8040] text-white font-bold py-4 rounded-lg text-lg transition-all">
                CONFIRMA
              </button>
            </div>
          </div>

          {/* Info List */}
          <div className="mt-8 space-y-3">
            {urnaInfo.map((info, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <h5 className="font-semibold text-white text-sm">{info.title}</h5>
                  <p className="text-xs text-white/60">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
