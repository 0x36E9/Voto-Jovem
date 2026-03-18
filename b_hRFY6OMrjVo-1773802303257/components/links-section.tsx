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
    <section id="links" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/60 rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Recursos
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Links <span className="text-primary">úteis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="h-full border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <link.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <span className="inline-block px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground mb-2">
                    {link.category}
                  </span>
                  
                  <h3 
                    className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {link.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary rounded-3xl p-8 lg:p-12 text-center">
          <h3 
            className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground rounded-full font-semibold hover:bg-card/90 transition-colors"
          >
            Tirar Título Agora
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
