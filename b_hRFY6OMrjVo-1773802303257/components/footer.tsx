import { Vote, Heart } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Por que votar?", href: "#importancia" },
      { label: "Como votar", href: "#como-votar" },
      { label: "Tire seu título", href: "#titulo" },
      { label: "Links úteis", href: "#links" },
    ]
  },
  {
    title: "Links Oficiais",
    links: [
      { label: "Portal do TSE", href: "https://www.tse.jus.br/", external: true },
      { label: "App e-Título", href: "https://www.tse.jus.br/eleitor/titulo-eleitoral/e-titulo", external: true },
      { label: "Consultar Candidatos", href: "https://divulgacandcontas.tse.jus.br/divulga/", external: true },
      { label: "Tirar Título Online", href: "https://www.tse.jus.br/eleitor/titulo-eleitoral/emissao-de-titulo-de-eleitor", external: true },
    ]
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Vote className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-background" style={{ fontFamily: 'var(--font-heading)' }}>
                Seu Voto Importa
              </span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Um projeto educativo para conscientizar jovens brasileiros sobre a importância 
              do voto e da participação democrática.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-semibold text-background mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-background/70 hover:text-secondary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-secondary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              Este site não possui vínculo oficial com o TSE. Conteúdo meramente educativo.
            </p>
            <p className="text-background/50 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-destructive" /> pela democracia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
