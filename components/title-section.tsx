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
    <section id="titulo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Primeiro Passo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Tire seu título de eleitor
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            O título de eleitor é seu passaporte para a cidadania. 
            Veja como tirar o seu de forma rápida e gratuita.
          </p>
        </div>

        {/* Who can get */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Quem pode tirar?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <span className="text-2xl font-bold text-green-700">16-17 anos</span>
                <p className="text-green-600 text-sm mt-1">
                  Voto facultativo. Você pode votar se quiser!
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <span className="text-2xl font-bold text-primary">18-70 anos</span>
                <p className="text-primary/80 text-sm mt-1">
                  Voto obrigatório. Você precisa votar ou justificar.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="text-2xl font-bold text-blue-700">70+ anos</span>
                <p className="text-blue-600 text-sm mt-1">
                  Voto facultativo. Você escolhe se quer votar.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents needed */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Documentos necessários</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-700">{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Methods */}
        <h3 className="text-xl font-semibold text-zinc-900 mb-4 text-center">
          Como tirar?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className={`border-0 shadow-sm ${method.highlight ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                {method.highlight && (
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded mb-2 w-fit">
                    Recomendado
                  </span>
                )}
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant={method.highlight ? "default" : "outline"} className="w-full">
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.linkText}
                    <ArrowRight className="h-4 w-4 ml-2" />
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
