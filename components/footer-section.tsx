import Link from "next/link"

const footerLinks = {
  secoes: [
    { label: "O que é democracia", href: "#democracia" },
    { label: "Tipos de eleição", href: "#tipos" },
    { label: "Urna eletrônica", href: "#urna" },
    { label: "Como escolher candidatos", href: "#candidatos" },
    { label: "Calendário eleitoral", href: "#calendario" }
  ],
  saibaMais: [
    { label: "Título eleitoral", href: "#titulo" },
    { label: "Impacto do voto", href: "#impacto" },
    { label: "Mitos e verdades", href: "#mitos" },
    { label: "Glossário", href: "#glossario" },
    { label: "Quiz", href: "#quiz" }
  ],
  tse: [
    { label: "Portal TSE", href: "https://www.tse.jus.br/" },
    { label: "Alistamento", href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor" },
    { label: "Divulgacand", href: "https://divulgacandcontas.tse.jus.br/" },
    { label: "Meu local de voto", href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral" },
    { label: "Urna eletrônica", href: "https://www.tse.jus.br/eleicoes/urna-eletronica" }
  ]
}

export function FooterSection() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Voto Jovem Brasil
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Site educativo e de conscientização sobre democracia e participação política para jovens brasileiros. Sem fins partidários ou político-eleitorais.
            </p>
          </div>

          {/* Seções */}
          <div>
            <h4 className="font-bold mb-4 text-white/90">Seções</h4>
            <ul className="space-y-2">
              {footerLinks.secoes.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#f5c200] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Saiba Mais */}
          <div>
            <h4 className="font-bold mb-4 text-white/90">Saiba mais</h4>
            <ul className="space-y-2">
              {footerLinks.saibaMais.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#f5c200] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links TSE */}
          <div>
            <h4 className="font-bold mb-4 text-white/90">Links TSE</h4>
            <ul className="space-y-2">
              {footerLinks.tse.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} target="_blank" className="text-sm text-white/60 hover:text-[#f5c200] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-xs text-white/40 mb-4">
            © 2026 Voto Jovem Brasil — Site educativo independente. Todos os links direcionam para{" "}
            <Link href="https://www.tse.jus.br/" target="_blank" className="text-[#f5c200] hover:underline">
              fontes oficiais do TSE
            </Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-3 py-1 text-xs bg-white/5 rounded-full text-white/50">
              Sem fins partidários
            </span>
            <span className="px-3 py-1 text-xs bg-white/5 rounded-full text-white/50">
              Conteúdo em português
            </span>
            <span className="px-3 py-1 text-xs bg-white/5 rounded-full text-white/50">
              Links TSE oficiais
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
