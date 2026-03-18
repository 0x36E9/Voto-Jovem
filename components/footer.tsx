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
    <footer className="bg-zinc-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Vote className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">Seu Voto Importa</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Um projeto educativo para conscientizar jovens brasileiros sobre a importância 
              do voto e da participação democrática.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
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
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              Este site não possui vínculo oficial com o TSE. Conteúdo meramente educativo.
            </p>
            <p className="text-zinc-500 text-sm flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> pela democracia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
