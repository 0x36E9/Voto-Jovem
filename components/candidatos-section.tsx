"use client"

import { useInView } from "@/hooks/use-in-view"

const criterios = [
  {
    icon: "📋",
    title: "Analise o plano de governo",
    desc: "Todo candidato é obrigado a apresentar propostas ao TSE. Leia e veja se são realistas, detalhadas e alinhadas com suas prioridades."
  },
  {
    icon: "📊",
    title: "Verifique o histórico",
    desc: "Se já foi eleito antes, pesquise o que fez no mandato. Presença em votações, projetos aprovados e denúncias são informações públicas."
  },
  {
    icon: "⚖️",
    title: "Cheque a ficha limpa",
    desc: "Candidatos condenados em segunda instância por crimes graves são barrados pela Lei da Ficha Limpa. Consulte o Divulgacand do TSE."
  },
  {
    icon: "🔎",
    title: "Combata as fake news",
    desc: "Verifique informações em portais de checagem como Agência Lupa, UOL Confere e G1 Fato ou Fake antes de acreditar ou compartilhar."
  }
]

const redFlags = [
  "Promessas impossíveis ou irrealistas sem explicação de como serão financiadas",
  "Discurso de ódio, preconceito ou ataques a grupos sociais específicos",
  "Recusa em participar de debates e fóruns públicos de discussão",
  "Histórico de escândalos de corrupção comprovados pela Justiça",
  "Fontes de financiamento de campanha obscuras ou suspeitas",
  "Desinformação comprovada: candidatos que disseminam fake news deliberadamente",
  "Ataque às instituições democráticas como TSE, STF e Congresso"
]

const cargos = [
  { icon: "🏛️", title: "Presidente", desc: "Chefe do Executivo federal. Define políticas nacionais, comanda as Forças Armadas e representa o país.", digitos: "2 dígitos" },
  { icon: "🏢", title: "Governador", desc: "Comanda o estado. Responsável por segurança pública estadual, saúde e educação estadual.", digitos: "2 dígitos" },
  { icon: "📜", title: "Senador", desc: "Representa o estado no Senado Federal. Mandato de 8 anos. Aprova leis e tratados internacionais.", digitos: "3 dígitos" },
  { icon: "🏦", title: "Dep. Federal", desc: "Representa o estado na Câmara Federal. Propõe e vota leis federais. Mandato de 4 anos.", digitos: "4 dígitos" },
  { icon: "📋", title: "Dep. Estadual", desc: "Atua na Assembleia Legislativa do estado. Aprova leis estaduais e fiscaliza o governador.", digitos: "5 dígitos" },
  { icon: "🏘️", title: "Prefeito", desc: "Gestão da cidade: transporte, saúde municipal, educação fundamental, obras e serviços urbanos.", digitos: "2 dígitos" },
  { icon: "🗣️", title: "Vereador", desc: "O representante mais próximo do cidadão. Fiscaliza o prefeito, propõe leis municipais e recebe demandas da comunidade.", digitos: "5 dígitos" }
]

export function CandidatosSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="candidatos" ref={ref} className="py-24 bg-[#fafbf7]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Como escolher
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Pesquise seus candidatos
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Votar bem não é apenas comparecer às urnas — é fazer uma escolha informada. Veja o guia completo para pesquisar e avaliar candidatos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Critérios */}
          <div className={`transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#333] mb-4 leading-relaxed">
              Antes de votar, pesquise profundamente os candidatos. Um eleitor informado é a base de uma democracia saudável. Não vote apenas por indicação de outros, por tradição familiar ou por simpatia sem fundamento.
            </p>
            <p className="text-[#333] mb-8 leading-relaxed">
              Analise o histórico, as propostas e o comportamento público dos candidatos. Verifique se as propostas são viáveis e se batem com os seus valores e necessidades. Utilize os portais oficiais do TSE para checagem de informações.
            </p>

            <div className="space-y-4">
              {criterios.map((crit, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-[#e5e7e2] hover:border-[#22a050]/30 transition-all">
                  <span className="text-3xl">{crit.icon}</span>
                  <div>
                    <h4 className="font-bold text-[#0d0d0d] mb-1">{crit.title}</h4>
                    <p className="text-sm text-[#555]">{crit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Red Flags */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-[#fff8f0] border border-[#ffd6a5] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0d0d0d] mb-6 flex items-center gap-2">
                Sinais de alerta em candidatos
              </h3>
              <ul className="space-y-3">
                {redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#333]">
                    <span className="text-[#e05555] font-bold text-lg">X</span>
                    <span className="text-sm leading-relaxed">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cargos Grid */}
        <div className={`mt-20 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0d0d0d] mb-4 font-serif">
            Para quem você vota?
          </h3>
          <p className="text-center text-[#555] mb-10 max-w-xl mx-auto">
            Entenda as funções de cada cargo eletivo no Brasil e quantos dígitos usar na urna.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cargos.map((cargo, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#e5e7e2] p-5 hover:shadow-lg hover:border-[#22a050]/40 transition-all text-center">
                <span className="text-4xl mb-3 block">{cargo.icon}</span>
                <h4 className="font-bold text-[#0d0d0d] mb-2">{cargo.title}</h4>
                <p className="text-xs text-[#666] mb-3">{cargo.desc}</p>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#d6f0df] text-[#0d4f24] rounded-full">
                  {cargo.digitos}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
