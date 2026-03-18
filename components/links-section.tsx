"use client"

import { ExternalLink, Vote, FileText, MapPin, Search, Smartphone, Scale, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const links = [
  {
    icon: Vote,
    title: "Portal do TSE",
    description: "Site oficial do Tribunal Superior Eleitoral com todas as informações sobre eleições.",
    url: "https://www.tse.jus.br/",
    category: "Principal"
  },
  {
    icon: FileText,
    title: "Tirar Título Online",
    description: "Solicite seu título de eleitor pela internet de forma rápida e gratuita.",
    url: "https://www.tse.jus.br/eleitor/titulo-eleitoral/emissao-de-titulo-de-eleitor",
    category: "Serviços"
  },
  {
    icon: MapPin,
    title: "Consultar Local de Votação",
    description: "Descubra onde você vai votar com base no seu título de eleitor.",
    url: "https://www.tse.jus.br/eleitor/titulo-eleitoral/local-de-votacao/consulta-por-nome",
    category: "Serviços"
  },
  {
    icon: Search,
    title: "Consultar Situação Eleitoral",
    description: "Verifique se sua situação eleitoral está regular.",
    url: "https://www.tse.jus.br/eleitor/titulo-eleitoral/situacao-eleitoral/consulta-por-nome",
    category: "Serviços"
  },
  {
    icon: Smartphone,
    title: "App e-Título",
    description: "Baixe o aplicativo oficial para ter seu título digital no celular.",
    url: "https://www.tse.jus.br/eleitor/titulo-eleitoral/e-titulo",
    category: "Aplicativo"
  },
  {
    icon: Scale,
    title: "Divulgação de Candidaturas",
    description: "Consulte candidatos, partidos e seus dados nas eleições.",
    url: "https://divulgacandcontas.tse.jus.br/divulga/",
    category: "Candidatos"
  },
  {
    icon: FileText,
    title: "Certidões Eleitorais",
    description: "Emita certidões de quitação eleitoral e crimes eleitorais.",
    url: "https://www.tse.jus.br/eleitor/certidoes",
    category: "Serviços"
  },
  {
    icon: HelpCircle,
    title: "Dúvidas Frequentes",
    description: "Encontre respostas para as perguntas mais comuns sobre eleições.",
    url: "https://www.tse.jus.br/eleitor/perguntas-frequentes",
    category: "Ajuda"
  },
]

export function LinksSection() {
  return (
    <section id="links" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Links úteis
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Acesse os serviços oficiais do TSE para resolver qualquer questão 
            relacionada ao seu título de eleitor e votação.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                    {link.category}
                  </span>
                  <h3 className="font-semibold text-zinc-900 mt-1 mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Pronto para exercer sua cidadania?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Não deixe para depois! Tire seu título de eleitor agora mesmo e 
            faça parte das decisões que moldam o futuro do Brasil.
          </p>
          <a
            href="https://www.tse.jus.br/eleitor/titulo-eleitoral/emissao-de-titulo-de-eleitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Tirar Título Agora
          </a>
        </div>
      </div>
    </section>
  )
}
