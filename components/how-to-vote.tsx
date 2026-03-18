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
    answer: "Sim! Se você não puder votar no dia da eleição (viagem, doença, etc.), pode justificar pelo app e-Título ou no site do TSE em até 60 dias após cada turno."
  },
  {
    question: "O que é o e-Título?",
    answer: "É o aplicativo oficial da Justiça Eleitoral. Com ele você pode: consultar sua situação eleitoral, ver local de votação, justificar ausência e usar como documento no dia da eleição (se tiver biometria cadastrada)."
  },
  {
    question: "Como funciona a urna eletrônica?",
    answer: "A urna é simples de usar: você digita o número do candidato, confere a foto e nome na tela e aperta CONFIRMA. Se errar, aperte CORRIGE. Para votar em branco, aperte BRANCO e depois CONFIRMA."
  },
  {
    question: "Preciso levar o título de eleitor no dia?",
    answer: "Não é obrigatório, mas facilita. Você pode usar qualquer documento oficial com foto (RG, CNH, passaporte, carteira de trabalho digital). Se tiver biometria cadastrada, pode usar o e-Título como documento."
  },
]

export function HowToVote() {
  return (
    <section id="como-votar" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Tutorial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Como votar?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Siga o passo a passo completo para exercer seu direito de voto. 
            É mais simples do que você imagina!
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Number & Icon */}
                  <div className="bg-primary/5 p-6 md:p-8 flex flex-row md:flex-col items-center justify-center gap-4 md:min-w-[140px]">
                    <span className="text-4xl md:text-5xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-zinc-600">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="border-0 shadow-sm bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <Clock className="h-5 w-5" />
                Horário de Votação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-900 mb-2">
                Das 8h às 17h
              </p>
              <p className="text-amber-800 text-sm">
                Horário de Brasília. Chegue com antecedência para evitar filas!
                O horário das 7h às 10h costuma ter menos movimento.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <AlertCircle className="h-5 w-5" />
                Documentos Aceitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-blue-800 text-sm space-y-1">
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
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
            Perguntas Frequentes
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-zinc-900 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600">
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
