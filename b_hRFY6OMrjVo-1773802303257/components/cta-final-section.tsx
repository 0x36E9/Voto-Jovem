"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function CtaFinalSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-32 px-[5%] bg-gradient-to-br from-[#f5c200] via-[#ffe040] to-[#f5c200] text-center relative overflow-hidden">
      {/* Background Text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-heading)] text-[clamp(10rem,25vw,20rem)] font-black text-black/[0.04] leading-none whitespace-nowrap pointer-events-none"
        aria-hidden="true"
      >
        VOTE
      </div>

      <div ref={ref} className={`relative z-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-black/10 rounded-full text-xs font-bold tracking-[2px] uppercase px-4 py-1.5 text-[#0d4f24] mb-6">
          O Brasil espera por você
        </div>

        {/* Title */}
        <h2 className="font-[var(--font-heading)] text-[clamp(3rem,7vw,6rem)] font-black text-[#0d4f24] leading-[0.95] tracking-[-2px] mb-6">
          O futuro começa<br /><em className="italic">na urna.</em>
        </h2>

        {/* Description */}
        <p className="text-lg text-black/65 max-w-[600px] mx-auto leading-relaxed font-medium mb-10">
          Você leu sobre democracia, aprendeu a votar e conhece seus direitos. Agora é hora de agir. Tire seu título, pesquise seus candidatos e faça história nas próximas eleições.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a7a3c] text-white font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Alistamento online — TSE
          </Link>
          <Link
            href="https://divulgacandcontas.tse.jus.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0d4f24] font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Pesquise candidatos
          </Link>
          <Link
            href="https://www.tse.jus.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#0d4f24] text-[#0d4f24] font-bold px-7 py-4 rounded-full transition-all hover:bg-[#0d4f24]/10"
          >
            Portal do TSE
          </Link>
        </div>
      </div>
    </section>
  )
}
