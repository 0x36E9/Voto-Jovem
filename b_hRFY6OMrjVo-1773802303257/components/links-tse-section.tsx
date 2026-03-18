"use client"

import Link from "next/link"

const links = [
  {
    icon: "🏛️",
    title: "Portal do TSE",
    desc: "Tribunal Superior Eleitoral. Noticias, servicos, legislacao e tudo sobre o sistema eleitoral brasileiro.",
    url: "tse.jus.br",
    href: "https://www.tse.jus.br/",
    tag: "Oficial"
  },
  {
    icon: "📝",
    title: "Alistamento Eleitoral",
    desc: "Tire seu titulo, transfira domicilio, altere dados e regularize sua situacao eleitoral online e gratuitamente.",
    url: "alistamento.tse.jus.br",
    href: "https://www.tse.jus.br/comunicacao/noticias/2022/Marco/rapido-facil-e-sem-burocracia-3-passos-para-tirar-o-titulo-pela-internet",
    tag: "Servico"
  },
  {
    icon: "📍",
    title: "Meu Local de Votacao",
    desc: "Descubra sua secao e zona eleitoral. Confirme onde votar usando apenas o CPF.",
    url: "tse.jus.br/autoatendimento",
    href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral",
    tag: "Consulta"
  },
  {
    icon: "🔍",
    title: "Divulgacand",
    desc: "Pesquise candidatos: propostas, bens declarados, ficha de filiacao, historia eleitoral e dados de campanha.",
    url: "divulgacandcontas.tse.jus.br",
    href: "https://divulgacandcontas.tse.jus.br/",
    tag: "Pesquisa"
  },
  {
    icon: "📊",
    title: "Estatisticas Eleitorais",
    desc: "Dados completos sobre eleitorado, votacao, abstencao e resultados de todas as eleicoes brasileiras desde 1945.",
    url: "stats.tse.jus.br",
    href: "https://sig.tse.jus.br/ords/dw/f?p=2501:7:0",
    tag: "Dados"
  },
  {
    icon: "🖥️",
    title: "Urna Eletronica",
    desc: "Tudo sobre o funcionamento, seguranca e auditoria da urna eletronica brasileira. Desmintindo mitos com dados.",
    url: "tse.jus.br/urna",
    href: "https://www.tse.jus.br/eleicoes/urna-eletronica",
    tag: "Tecnologia"
  },
  {
    icon: "📰",
    title: "Noticias do TSE",
    desc: "Acompanhe os comunicados oficiais, portarias, resolucoes e noticias da Justica Eleitoral brasileira.",
    url: "tse.jus.br/comunicacao",
    href: "https://www.tse.jus.br/comunicacao/noticias",
    tag: "Noticias"
  },
  {
    icon: "📖",
    title: "Glossario Eleitoral",
    desc: "Dicionario completo com termos eleitorais. Ideal para entender os processos, leis e vocabulario da democracia.",
    url: "tse.jus.br/glossario",
    href: "https://www.tse.jus.br/eleitor-e-eleicoes/glossario",
    tag: "Aprendizado"
  },
  {
    icon: "🗺️",
    title: "Tribunais Regionais (TREs)",
    desc: "Cada estado tem seu TRE. Para assuntos estaduais, acesse o tribunal do seu estado. Ex: TRE-SP para Sao Paulo.",
    url: "tre-[estado].jus.br",
    href: "https://www.tre-sp.jus.br/",
    tag: "Regional"
  }
]

export function LinksTseSection() {
  return (
    <section id="links" className="py-24 px-[5%] bg-[#0d4f24] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute -bottom-[200px] -left-[150px] w-[500px] h-[500px] rounded-full bg-[#f5c200]/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 bg-[#f5c200]/20 text-[#f5c200] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#f5c200] rounded-full" />
            Recursos Oficiais
          </span>
          <h2 
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-none tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Portais <em className="text-[#f5c200] italic">essenciais</em>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-[680px]">
            Todos os links do TSE e da Justica Eleitoral que voce precisa para exercer sua cidadania com informacao e seguranca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.06] border border-white/[0.12] rounded-[20px] p-8 flex flex-col gap-3 relative overflow-hidden text-white transition-all hover:bg-[#f5c200]/[0.12] hover:border-[#f5c200]/40 hover:-translate-y-1"
            >
              {/* Arrow */}
              <span className="absolute top-6 right-6 text-xl text-[#f5c200] opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                ↗
              </span>

              <span className="inline-block bg-white/10 text-[0.68rem] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full text-white/70 w-fit">
                {link.tag}
              </span>
              <span className="text-4xl">{link.icon}</span>
              <h3 className="text-base font-bold text-[#f5c200]">{link.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{link.desc}</p>
              <span className="text-xs text-white/40 font-semibold mt-auto">{link.url}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
