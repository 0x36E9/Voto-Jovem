"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function CtaFinalSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#f5c200] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-[#0d4f24]/[0.05] tracking-tighter">VOTE</span>
      </div>

      <div className={`container mx-auto px-4 max-w-4xl text-center relative z-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Eyebrow */}
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-white bg-[#0d4f24] rounded-full">
          O Brasil espera por você
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#0d0d0d] mb-6 font-serif">
          O futuro começa na urna.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#0d0d0d]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Você leu sobre democracia, aprendeu a votar, conhece seus direitos. Agora é hora de agir. Tire seu título, pesquise seus candidatos e faça história nas próximas eleições.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor" target="_blank" className="px-8 py-4 bg-[#0d4f24] text-white font-bold rounded-full hover:bg-[#0a3d1c] transition-all shadow-lg">
            Alistamento online — TSE
          </Link>
          <Link href="https://divulgacandcontas.tse.jus.br/" target="_blank" className="px-8 py-4 bg-white text-[#0d4f24] font-bold rounded-full hover:bg-white/90 transition-all shadow-lg">
            Pesquise candidatos
          </Link>
          <Link href="https://www.tse.jus.br/" target="_blank" className="px-8 py-4 bg-transparent text-[#0d4f24] font-bold rounded-full border-2 border-[#0d4f24] hover:bg-[#0d4f24]/10 transition-all">
            Portal do TSE
          </Link>
        </div>
      </div>
    </section>
  )
}
