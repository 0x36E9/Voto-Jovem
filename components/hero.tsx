"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0d4f24] text-white overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,160,80,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,194,0,0.15),transparent_50%)]" />
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-black text-white/[0.03] tracking-tighter">VOTE</span>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-2 h-2 bg-[#f5c200] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">Democracia é para todos</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Sua voz{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#f5c200]">define</span>
            </span>{" "}
            o Brasil
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            16 anos. Essa é a idade que o Brasil confia em você para decidir o futuro do país. Presidentes, governadores, senadores, deputados, prefeitos e vereadores — todos dependem da sua escolha nas urnas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#f5c200] hover:bg-[#d9ab00] text-[#0d0d0d] font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-[#f5c200]/20">
              Como me alistar
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full">
              Teste seus conhecimentos
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              "Democracia desde 1988",
              "Urna 100% digital",
              "Voto secreto garantido",
              "Resultado em horas"
            ].map((badge) => (
              <span key={badge} className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/10">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-6">
          {/* Stat Cards */}
          {[
            { icon: "👥", num: "147M", label: "eleitores aptos no Brasil", desc: "Em 2024, esse número bateu recorde histórico" },
            { icon: "🧑‍🎓", num: "16%", label: "dos eleitores têm até 24 anos", desc: "Cada eleição, mais jovens se alistam pela primeira vez" },
            { icon: "🗺️", num: "5.570", label: "municípios com eleições", desc: "Do Oiapoque ao Chuí, a democracia chega em todo lugar" },
          ].map((stat) => (
            <div key={stat.num} className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <span className="text-4xl">{stat.icon}</span>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-[#f5c200]">{stat.num}</span>
                </div>
                <p className="text-white/90 font-medium">{stat.label}</p>
                <p className="text-sm text-white/60">{stat.desc}</p>
              </div>
            </div>
          ))}

          {/* Quote Card */}
          <div className="p-6 bg-gradient-to-br from-[#f5c200]/20 to-[#f5c200]/5 rounded-2xl border border-[#f5c200]/30">
            <p className="text-white/90 italic leading-relaxed">
              "A democracia não é um presente — é uma conquista que precisa ser renovada a cada eleição."
            </p>
            <p className="text-sm text-[#f5c200] mt-3 font-medium">
              — Cultura Democrática Brasileira
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
