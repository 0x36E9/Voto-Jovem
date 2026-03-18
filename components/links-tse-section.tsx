"use client"

import Link from "next/link"

const links = [
  {
    icon: "🏛️",
    title: "Portal do TSE",
    desc: "Tribunal Superior Eleitoral. Notícias, serviços, legislação e tudo sobre o sistema eleitoral brasileiro.",
    url: "tse.jus.br",
    href: "https://www.tse.jus.br/",
    tag: "Oficial"
  },
  {
    icon: "📝",
    title: "Alistamento Eleitoral",
    desc: "Tire seu título, transfira domicílio, altere dados e regularize sua situação eleitoral online e gratuitamente.",
    url: "alistamento.tse.jus.br",
    href: "https://www.tse.jus.br/comunicacao/noticias/2022/Marco/rapido-facil-e-sem-burocracia-3-passos-para-tirar-o-titulo-pela-internet",
    tag: "Serviço"
  },
  {
    icon: "📍",
    title: "Meu Local de Votação",
    desc: "Descubra sua seção e zona eleitoral. Confirme onde votar usando apenas o CPF.",
    url: "tse.jus.br/autoatendimento",
    href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral",
    tag: "Consulta"
  },
  {
    icon: "🔍",
    title: "Divulgacand",
    desc: "Pesquise candidatos: propostas, bens declarados, ficha de filiação, história eleitoral e dados de campanha.",
    url: "divulgacandcontas.tse.jus.br",
    href: "https://divulgacandcontas.tse.jus.br/",
    tag: "Pesquisa"
  },
  {
    icon: "📊",
    title: "Estatísticas Eleitorais",
    desc: "Dados completos sobre eleitorado, votação, abstenção e resultados de todas as eleições brasileiras desde 1945.",
    url: "stats.tse.jus.br",
    href: "https://sig.tse.jus.br/ords/dw/f?p=2501:7:0",
    tag: "Dados"
  },
  {
    icon: "🖥️",
    title: "Urna Eletrônica",
    desc: "Tudo sobre o funcionamento, segurança e auditoria da urna eletrônica brasileira. Desmintindo mitos com dados.",
    url: "tse.jus.br/urna",
    href: "https://www.tse.jus.br/eleicoes/urna-eletronica",
    tag: "Tecnologia"
  },
  {
    icon: "📰",
    title: "Notícias do TSE",
    desc: "Acompanhe os comunicados oficiais, portarias, resoluções e notícias da Justiça Eleitoral brasileira.",
    url: "tse.jus.br/comunicacao",
    href: "https://www.tse.jus.br/comunicacao/noticias",
    tag: "Notícias"
  },
  {
    icon: "📖",
    title: "Glossário Eleitoral",
    desc: "Dicionário completo com termos eleitorais. Ideal para entender os processos, leis e vocabulário da democracia.",
    url: "tse.jus.br/glossario",
    href: "https://www.tse.jus.br/eleitor-e-eleicoes/glossario",
    tag: "Aprendizado"
  },
  {
    icon: "🗺️",
    title: "Tribunais Regionais (TREs)",
    desc: "Cada estado tem seu TRE. Para assuntos estaduais, acesse o tribunal do seu estado. Ex: TRE-SP para São Paulo.",
    url: "tre-[estado].jus.br",
    href: "https://www.tre-sp.jus.br/",
    tag: "Regional"
  }
]

export function LinksTseSection() {
  return (
    <section id="links" className="py-24 bg-[#0d4f24] text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,194,0,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#f5c200] rounded-full">
            Recursos Oficiais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Portais essenciais
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Todos os links do TSE e da Justiça Eleitoral que você precisa para exercer sua cidadania com informação e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#f5c200]/50 transition-all"
            >
              {/* Arrow */}
              <span className="absolute top-4 right-4 text-white/30 group-hover:text-[#f5c200] transition-colors">
                ↗
              </span>

              <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-[#f5c200]/20 text-[#f5c200] rounded-full mb-3">
                {link.tag}
              </span>
              <span className="text-3xl block mb-3">{link.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{link.title}</h3>
              <p className="text-sm text-white/70 mb-3">{link.desc}</p>
              <span className="text-xs text-[#f5c200]">{link.url}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
