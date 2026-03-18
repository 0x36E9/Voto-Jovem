"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-[100px] pb-20 px-[5%] bg-[#0d4f24] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_30%,rgba(245,194,0,0.12),transparent),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(34,160,80,0.2),transparent)]" />
      
      {/* Background Text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.025] text-[clamp(12rem,25vw,22rem)] font-black leading-none whitespace-nowrap pointer-events-none z-0"
        style={{ fontFamily: 'var(--font-heading)' }}
        aria-hidden="true"
      >
        VOTE
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#f5c200]/15 border border-[#f5c200]/40 text-[#f5c200] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#f5c200] rounded-full animate-pulse" />
            Democracia e para todos
          </div>

          {/* Headline */}
          <h1 
            className="text-[clamp(3.5rem,7vw,6rem)] font-black leading-[0.95] text-white tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <em className="text-[#f5c200] italic">Sua voz</em>
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_#f5c200]">define</span>
            <br />
            o Brasil
          </h1>

          {/* Description */}
          <p className="text-lg text-white/75 leading-relaxed max-w-[520px] mb-10">
            <strong className="text-[#f5c200]">16 anos.</strong> Essa e a idade que o Brasil confia em voce para decidir o futuro do pais. Presidentes, governadores, senadores, deputados, prefeitos e vereadores — todos dependem da sua escolha nas urnas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Button 
              asChild 
              className="bg-[#f5c200] hover:bg-[#ffe040] text-[#0d4f24] font-bold px-7 py-6 rounded-full text-base shadow-lg hover:-translate-y-1 transition-all"
            >
              <a href="#titulo">Como me alistar</a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/35 hover:border-white/60 font-bold px-7 py-6 rounded-full text-base hover:-translate-y-1 transition-all"
            >
              <a href="#quiz">Teste seus conhecimentos</a>
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2.5">
            {[
              "Democracia desde 1988",
              "Urna 100% digital",
              "Voto secreto garantido",
              "Resultado em horas"
            ].map((badge) => (
              <span 
                key={badge}
                className="bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="flex flex-col gap-5">
          {/* Stat Cards */}
          {[
            { icon: "👥", num: "147M", label: "eleitores aptos no Brasil", desc: "Em 2024, esse numero bateu recorde historico" },
            { icon: "🧑‍🎓", num: "16%", label: "dos eleitores tem ate 24 anos", desc: "Cada eleicao, mais jovens se alistam pela primeira vez" },
            { icon: "🗺️", num: "5.570", label: "municipios com eleicoes", desc: "Do Oiapoque ao Chui, a democracia chega em todo lugar" },
          ].map((stat) => (
            <div 
              key={stat.num}
              className="bg-white/[0.07] border border-white/[0.12] rounded-[20px] p-6 flex items-center gap-6 hover:bg-[#f5c200]/10 transition-colors"
            >
              <span className="text-4xl flex-shrink-0">{stat.icon}</span>
              <div>
                <div className="text-[2.8rem] font-black text-[#f5c200] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.num}
                </div>
                <div className="text-sm text-white/70 font-medium mt-0.5">{stat.label}</div>
                <div className="text-xs text-white/45 mt-1 leading-relaxed">{stat.desc}</div>
              </div>
            </div>
          ))}

          {/* Quote Card */}
          <div className="bg-[#f5c200] rounded-[20px] p-8">
            <blockquote 
              className="text-xl font-bold text-[#0d4f24] leading-snug italic mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              "A democracia nao e um presente — e uma conquista que precisa ser renovada a cada eleicao."
            </blockquote>
            <cite className="text-sm text-[#0d4f24]/70 font-semibold not-italic">
              — Cultura Democratica Brasileira
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
