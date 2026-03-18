"use client"

import { FileText, MapPin, Vote, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Tire seu título de eleitor",
    description: "A partir dos 16 anos você pode tirar seu título de eleitor. É gratuito e pode ser feito online!",
    details: [
      "Acesse o site do TSE ou baixe o app e-Título",
      "Preencha o formulário com seus dados pessoais",
      "Envie foto de documento com foto (RG ou CNH)",
      "Envie comprovante de residência",
      "Aguarde a análise (geralmente leva alguns dias)",
    ]
  },
  {
    number: "02",
    icon: MapPin,
    title: "Descubra sua seção eleitoral",
    description: "Antes do dia da eleição, consulte onde você vai votar. Assim você evita surpresas!",
    details: [
      "Acesse o site do TSE ou app e-Título",
      "Busque por 'Local de Votação'",
      "Informe seus dados ou use seu título",
      "Anote o endereço, seção e zona eleitoral",
      "Planeje como chegar no dia da eleição",
    ]
  },
  {
    number: "03",
    icon: Vote,
    title: "Vote no dia da eleição",
    description: "No dia, leve documento com foto e compareça à sua seção. O processo é rápido e seguro.",
    details: [
      "Leve documento oficial com foto",
      "Chegue no horário (das 8h às 17h)",
      "Apresente documento na mesa de votação",
      "Digite os números dos candidatos na urna",
      "Confirme cada voto e finalize",
    ]
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Pronto! Você exerceu sua cidadania",
    description: "Seu voto foi registrado com segurança. Agora é acompanhar o resultado e cobrar seus representantes!",
    details: [
      "Acompanhe a apuração em tempo real no site do TSE",
      "Guarde o comprovante de votação",
      "Depois das eleições, acompanhe o trabalho dos eleitos",
      "Cobre seus representantes",
      "Participe de audiências públicas",
    ]
  },
]

const faqItems = [
  {
    question: "Quem pode votar no Brasil?",
    answer: "O voto é obrigatório para brasileiros entre 18 e 70 anos. É facultativo (opcional) para jovens de 16 e 17 anos, pessoas acima de 70 anos e analfabetos."
  },
  {
    question: "O que acontece se eu não votar?",
    answer: "Se você não votar, não justificar e nem pagar a multa, pode ter problemas como: não tirar passaporte, não assumir cargo público, não se matricular em universidade pública, entre outros. A multa é de aproximadamente R$ 3,51 por turno."
  },
  {
    question: "Posso justificar minha ausência?",
    answer: "Sim! Se você não puder votar no dia da eleição (viagem, doença, etc), pode justificar pelo app e-Título ou no site do TSE em até 60 dias após cada turno."
  },
  {
    question: "O que é o e-Título?",
    answer: "É o aplicativo oficial da Justiça Eleitoral. Com ele você pode: consultar sua situação eleitoral, ver local de votação, justificar ausência, e usar como documento no dia da eleição (se tiver biometria cadastrada)."
  },
  {
    question: "Como funciona a urna eletrônica?",
    answer: "A urna é simples de usar: você digita o número do candidato, confere a foto e nome na tela, e aperta CONFIRMA. Se errar, aperte CORRIGE. Para votar em branco, aperte BRANCO e depois CONFIRMA."
  },
  {
    question: "Preciso levar o título de eleitor no dia?",
    answer: "Não é obrigatório, mas facilita. Você pode usar qualquer documento oficial com foto (RG, CNH, passaporte, carteira de trabalho digital). Se tiver biometria cadastrada, pode usar o e-Título como documento."
  },
]

export function HowToVote() {
  return (
    <section id="como-votar" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/60 rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Tutorial
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Como <span className="text-primary">votar</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siga o passo a passo completo para exercer seu direito de voto. 
            É mais simples do que você imagina!
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 lg:gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="border-border overflow-hidden bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Number & Icon */}
                  <div className="lg:w-48 bg-primary/5 p-6 lg:p-8 flex lg:flex-col items-center lg:items-start gap-4">
                    <span 
                      className="text-4xl lg:text-5xl font-bold text-primary/30"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <h3 
                      className="text-xl lg:text-2xl font-bold text-foreground mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Card className="border-border bg-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                <Clock className="w-6 h-6 text-primary" />
                Horário de Votação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Das 8h às 17h
              </p>
              <p className="text-muted-foreground">
                Horário de Brasília. Chegue com antecedência para evitar filas!
                O horário das 7h às 10h costuma ter menos movimento.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                <AlertCircle className="w-6 h-6 text-secondary-foreground" />
                Documentos Aceitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-muted-foreground">
                <li>• RG (Carteira de Identidade)</li>
                <li>• CNH (Carteira Nacional de Habilitação)</li>
                <li>• Passaporte</li>
                <li>• Carteira de Trabalho Digital</li>
                <li>• e-Título (com biometria)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="bg-card rounded-3xl border border-border p-8 lg:p-12">
          <h3 
            className="text-2xl lg:text-3xl font-bold text-foreground mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Perguntas Frequentes
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
