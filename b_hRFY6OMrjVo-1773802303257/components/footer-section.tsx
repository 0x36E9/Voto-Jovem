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
    { label: "Divulgação", href: "https://divulgacandcontas.tse.jus.br/" },
    { label: "Meu local de voto", href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral" },
    { label: "Urna eletrônica", href: "https://www.tse.jus.br/hotsites/simulador-de-votacao/" }
  ]
}

export function FooterSection() {
  return (
    <footer className="bg-[#060e08] text-white/50 pt-16 pb-8 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10 mb-8">
        {/* Brand */}
        <div>
          <div className="font-[var(--font-heading)] text-3xl font-black text-[#f5c200] mb-3">
            Voto Jovem Brasil
          </div>
          <p className="text-sm leading-relaxed text-white/50 max-w-[260px]">
            Site educativo e de conscientização sobre democracia e participação política para jovens brasileiros. Sem fins partidários ou político-eleitorais.
          </p>
        </div>

        {/* Secoes */}
        <div>
          <h4 className="text-xs font-bold tracking-[2px] uppercase text-[#f5c200] mb-4">Secoes</h4>
          <ul className="flex flex-col gap-2">
            {footerLinks.secoes.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-sm text-white/50 hover:text-[#f5c200] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Saiba Mais */}
        <div>
          <h4 className="text-xs font-bold tracking-[2px] uppercase text-[#f5c200] mb-4">Saiba mais</h4>
          <ul className="flex flex-col gap-2">
            {footerLinks.saibaMais.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-sm text-white/50 hover:text-[#f5c200] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links TSE */}
        <div>
          <h4 className="text-xs font-bold tracking-[2px] uppercase text-[#f5c200] mb-4">Links TSE</h4>
          <ul className="flex flex-col gap-2">
            {footerLinks.tse.map((link, i) => (
              <li key={i}>
                <Link 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-[#f5c200] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-center md:text-left">
          © 2026 Voto Jovem Brasil — Site educativo independente. Todos os links direcionam para{" "}
          <Link href="https://www.tse.jus.br/" target="_blank" className="text-[#f5c200]">
            fontes oficiais do TSE
          </Link>.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="text-[0.72rem] font-bold px-3 py-1 rounded-full bg-white/[0.07] text-white/50">
            Sem fins partidários
          </span>
          <span className="text-[0.72rem] font-bold px-3 py-1 rounded-full bg-white/[0.07] text-white/50">
            Conteúdo em português
          </span>
          <span className="text-[0.72rem] font-bold px-3 py-1 rounded-full bg-white/[0.07] text-white/50">
            Links TSE oficiais
          </span>
        </div>
      </div>
    </footer>
  )
}
