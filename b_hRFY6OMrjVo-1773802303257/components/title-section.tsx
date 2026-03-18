"use client"

import { Smartphone, Globe, Building2, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const documents = [
  "Documento de identificação com foto (RG ou CNH)",
  "Comprovante de residência recente",
  "Comprovante de quitação do serviço militar (homens entre 18 e 45 anos)",
]

const methods = [
  {
    icon: Smartphone,
    title: "Pelo App e-Título",
    description: "A forma mais prática! Baixe o app oficial, crie sua conta e siga as instruções.",
    link: "https://play.google.com/store/apps/details?id=br.jus.tse.eleitoral.etitulo",
    linkText: "Baixar App",
    highlight: true
  },
  {
    icon: Globe,
    title: "Pelo Site do TSE",
    description: "Acesse o Título Net e preencha o formulário online com seus documentos digitalizados.",
    link: "https://www.tse.jus.br/eleitor/titulo-eleitoral/emissao-de-titulo-de-eleitor",
    linkText: "Acessar Site"
  },
  {
    icon: Building2,
    title: "Presencialmente",
    description: "Vá ao cartório eleitoral mais próximo com seus documentos originais.",
    link: "https://www.tse.jus.br/eleitor/cartorio-eleitoral",
    linkText: "Encontrar Cartório"
  },
]

export function TitleSection() {
  return (
    <section id="titulo" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Primeiro Passo
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Tire seu <span className="text-primary">título de eleitor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O título de eleitor é seu passaporte para a cidadania. 
            Veja como tirar o seu de forma rápida e gratuita.
          </p>
        </div>

        {/* Who can get */}
        <div className="bg-card rounded-3xl border border-border p-8 lg:p-12 mb-12">
          <h3 
            className="text-2xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Quem pode tirar?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary/5 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                16-17 anos
              </div>
              <p className="text-muted-foreground">
                Voto <strong className="text-foreground">facultativo</strong>. Você pode votar se quiser!
              </p>
            </div>
            <div className="p-6 bg-secondary/30 rounded-2xl">
              <div className="text-3xl font-bold text-secondary-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                18-70 anos
              </div>
              <p className="text-muted-foreground">
                Voto <strong className="text-foreground">obrigatório</strong>. Você precisa votar ou justificar.
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                70+ anos
              </div>
              <p className="text-muted-foreground">
                Voto <strong className="text-foreground">facultativo</strong>. Você escolhe se quer votar.
              </p>
            </div>
          </div>
        </div>

        {/* Documents needed */}
        <div className="mb-12">
          <h3 
            className="text-2xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Documentos necessários
          </h3>
          
          <div className="grid gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methods */}
        <h3 
          className="text-2xl font-bold text-foreground mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Como tirar?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className={`border-border transition-all hover:shadow-lg ${
                method.highlight ? 'ring-2 ring-primary bg-primary/5' : 'bg-card'
              }`}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  method.highlight ? 'bg-primary' : 'bg-muted'
                }`}>
                  <method.icon className={`w-7 h-7 ${
                    method.highlight ? 'text-primary-foreground' : 'text-foreground'
                  }`} />
                </div>
                {method.highlight && (
                  <span className="inline-block px-2 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground w-fit mb-2">
                    Recomendado
                  </span>
                )}
                <CardTitle className="text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {method.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  className={method.highlight 
                    ? "w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "w-full"
                  }
                  variant={method.highlight ? "default" : "outline"}
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.linkText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
