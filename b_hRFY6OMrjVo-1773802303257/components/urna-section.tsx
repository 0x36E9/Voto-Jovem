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
    desc: "Com 147 milhoes de eleitores, o Brasil apura votos em menos de 2 horas — feito unico no mundo."
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
    <section id="urna" className="py-24 px-[5%] bg-[#0d4f24] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[#f5c200]/[0.06]" />

      <div className="grid lg:grid-cols-2 gap-20 items-start relative z-10">
        {/* Left Content */}
        <div ref={ref}>
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <span className="inline-flex items-center gap-2 bg-[#f5c200]/20 text-[#f5c200] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[#f5c200] rounded-full" />
              Tutorial
            </span>
            <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-none tracking-tight mb-4">
              Como funciona a <em className="text-[#f5c200] italic">urna eletrônica</em>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[600px] mb-8">
              A urna eletrônica brasileira é referência mundial em segurança e eficiência. Aprenda o passo a passo para votar.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`flex gap-6 py-6 border-b border-white/10 last:border-b-0 transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#f5c200] text-[#0d4f24] font-[var(--font-heading)] text-xl font-black flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-white/65 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Urna Machine */}
        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
          <div className="bg-white/[0.06] border-2 border-white/[0.12] rounded-[30px] p-10 flex flex-col gap-4">
            {/* Screen */}
            <div className="bg-[#0a2010] rounded-2xl p-6 border-2 border-[#22a050]/40 font-mono">
              <div className="text-[#f5c200] text-xs mb-2 tracking-[2px]">VOTO PARA PREFEITO</div>
              <div className="text-[#22ff66] text-3xl font-bold tracking-[4px] mb-2">_ _</div>
              <div className="text-white/60 text-xs">AGUARDANDO DIGITAÇÃO...</div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <div key={n} className="bg-white/10 border border-white/15 rounded-lg py-3 text-center text-lg font-bold text-white cursor-pointer transition-all hover:bg-[#f5c200] hover:text-[#0d4f24]">
                  {n}
                </div>
              ))}
              <div className="bg-white/15 border border-white/15 rounded-lg py-3 text-center text-sm font-bold text-white cursor-pointer transition-all hover:bg-[#f5c200] hover:text-[#0d4f24]">
                BRANCO
              </div>
              <div className="bg-white/10 border border-white/15 rounded-lg py-3 text-center text-lg font-bold text-white cursor-pointer transition-all hover:bg-[#f5c200] hover:text-[#0d4f24]">
                0
              </div>
              <div className="bg-[#ff6666]/20 border border-[#ff6666]/30 rounded-lg py-3 text-center text-sm font-bold text-[#ff8888] cursor-pointer transition-all hover:bg-[#ff6666]/40">
                CORRIGE
              </div>
              <div className="col-span-3 bg-[#22a050]/30 border border-[#22a050]/40 rounded-lg py-3 text-center text-sm font-bold text-[#88ffaa] cursor-pointer transition-all hover:bg-[#22a050]/50">
                CONFIRMA
              </div>
            </div>
          </div>

          {/* Info List */}
          <div className="flex flex-col gap-3 mt-6">
            {urnaInfo.map((info, i) => (
              <div 
                key={i} 
                className="flex gap-3 items-start bg-white/[0.05] rounded-xl p-4"
              >
                <span className="text-2xl flex-shrink-0">{info.icon}</span>
                <div>
                  <h5 className="text-sm font-bold text-[#f5c200] mb-0.5">{info.title}</h5>
                  <p className="text-xs text-white/60 leading-relaxed">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
