"use client"

import { useInView } from "@/hooks/use-in-view"

const criterios = [
  {
    icon: "📋",
    title: "Analise o plano de governo",
    desc: "Todo candidato e obrigado a apresentar propostas ao TSE. Leia e veja se sao realistas, detalhadas e alinhadas com suas prioridades."
  },
  {
    icon: "📊",
    title: "Verifique o historico",
    desc: "Se ja foi eleito antes, pesquise o que fez no mandato. Presenca em votacoes, projetos aprovados e denuncias sao informacoes publicas."
  },
  {
    icon: "⚖️",
    title: "Cheque a ficha limpa",
    desc: "Candidatos condenados em segunda instancia por crimes graves sao barrados pela Lei da Ficha Limpa. Consulte o Divulgacand do TSE."
  },
  {
    icon: "🔎",
    title: "Combata as fake news",
    desc: "Verifique informacoes em portais de checagem como Agencia Lupa, UOL Confere e G1 Fato ou Fake antes de acreditar ou compartilhar."
  }
]

const redFlags = [
  "Promessas impossiveis ou irrealistas sem explicacao de como serao financiadas",
  "Discurso de odio, preconceito ou ataques a grupos sociais especificos",
  "Recusa em participar de debates e foruns publicos de discussao",
  "Historico de escandalos de corrupcao comprovados pela Justica",
  "Fontes de financiamento de campanha obscuras ou suspeitas",
  "Desinformacao comprovada: candidatos que disseminam fake news deliberadamente",
  "Ataque as instituicoes democraticas como TSE, STF e Congresso"
]

const cargos = [
  { icon: "🏛️", title: "Presidente", desc: "Chefe do Executivo federal. Define politicas nacionais, comanda as Forcas Armadas e representa o pais.", digitos: "2 digitos" },
  { icon: "🏢", title: "Governador", desc: "Comanda o estado. Responsavel por seguranca publica estadual, saude e educacao estadual.", digitos: "2 digitos" },
  { icon: "📜", title: "Senador", desc: "Representa o estado no Senado Federal. Mandato de 8 anos. Aprova leis e tratados internacionais.", digitos: "3 digitos" },
  { icon: "🏦", title: "Dep. Federal", desc: "Representa o estado na Camara Federal. Propoe e vota leis federais. Mandato de 4 anos.", digitos: "4 digitos" },
  { icon: "📋", title: "Dep. Estadual", desc: "Atua na Assembleia Legislativa do estado. Aprova leis estaduais e fiscaliza o governador.", digitos: "5 digitos" },
  { icon: "🏘️", title: "Prefeito", desc: "Gestao da cidade: transporte, saude municipal, educacao fundamental, obras e servicos urbanos.", digitos: "2 digitos" },
  { icon: "🗣️", title: "Vereador", desc: "O representante mais proximo do cidadao. Fiscaliza o prefeito, propoe leis municipais e recebe demandas da comunidade.", digitos: "5 digitos" }
]

export function CandidatosSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="candidatos" className="py-24 px-[5%] bg-[#f7f7f3]">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Como escolher
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          Pesquise seus <em className="text-[#1a7a3c] italic">candidatos</em>
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
          Votar bem nao e apenas comparecer as urnas — e fazer uma escolha informada. Veja o guia completo para pesquisar e avaliar candidatos.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mt-10">
        {/* Left - Criterios */}
        <div>
          <p className="text-base text-[#444440] leading-relaxed mb-4">
            Antes de votar, pesquise profundamente os candidatos. Um eleitor informado e a base de uma democracia saudavel. Nao vote apenas por indicacao de outros, por tradicao familiar ou por simpatia sem fundamento.
          </p>
          <p className="text-base text-[#444440] leading-relaxed mb-6">
            Analise o historico, as propostas e o comportamento publico dos candidatos. Verifique se as propostas sao viaveis e se batem com os seus valores e necessidades. Utilize os portais oficiais do TSE para checagem de informacoes.
          </p>

          <div className="flex flex-col gap-3">
            {criterios.map((crit, i) => (
              <div 
                key={i}
                className={`flex gap-4 items-start bg-white rounded-xl p-5 border-l-4 border-[#1a7a3c] transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <span className="text-3xl flex-shrink-0">{crit.icon}</span>
                <div>
                  <h4 className="text-base font-bold text-[#0d4f24] mb-1">{crit.title}</h4>
                  <p className="text-sm text-[#444440] leading-relaxed">{crit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Red Flags */}
        <div className={`bg-[#0d4f24] rounded-[20px] p-8 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
          <h3 className="font-[var(--font-heading)] text-2xl text-[#f5c200] mb-5">
            Sinais de alerta em candidatos
          </h3>
          <div className="flex flex-col">
            {redFlags.map((flag, i) => (
              <div key={i} className="flex gap-3 items-start py-3 border-b border-white/10 last:border-b-0">
                <span className="text-[#ff6b6b] text-lg font-black flex-shrink-0 mt-0.5">X</span>
                <p className="text-sm text-white/75 leading-relaxed">{flag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cargos Grid */}
      <div className={`mt-12 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <h3 className="font-[var(--font-heading)] text-3xl font-bold text-[#0d4f24] mb-2">
          Para quem voce vota?
        </h3>
        <p className="text-[#444440] mb-6">
          Entenda as funcoes de cada cargo eletivo no Brasil e quantos digitos usar na urna.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
          {cargos.map((cargo, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border-2 border-[#eee] text-center transition-all hover:border-[#1a7a3c] hover:bg-[#d6f0df]"
            >
              <span className="text-4xl block mb-3">{cargo.icon}</span>
              <h4 className="text-base font-bold text-[#0d4f24] mb-1">{cargo.title}</h4>
              <p className="text-xs text-[#444440] leading-relaxed mb-3">{cargo.desc}</p>
              <span className="inline-block bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold px-2.5 py-1 rounded-full">
                {cargo.digitos}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
