"use client"

import { CheckCircle2, AlertTriangle, Scale, Heart, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Scale,
    title: "Decisões que afetam sua vida",
    description: "Os representantes eleitos decidem sobre educação, saúde, transporte, segurança e muitas outras áreas que impactam diretamente o seu dia a dia.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Heart,
    title: "Exercício de cidadania",
    description: "Votar é um direito conquistado através de muita luta. É a forma mais direta de participar das decisões do país e fazer sua voz ser ouvida.",
    color: "bg-secondary/50 text-secondary-foreground"
  },
  {
    icon: Lightbulb,
    title: "Construir o futuro",
    description: "Você está escolhendo quem vai tomar decisões pelos próximos 4 anos. Suas escolhas hoje moldam o Brasil de amanhã.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Shield,
    title: "Proteger a democracia",
    description: "A democracia só funciona quando o povo participa. Cada voto fortalece o sistema democrático e evita que poucos decidam por muitos.",
    color: "bg-secondary/50 text-secondary-foreground"
  },
]

const myths = [
  {
    myth: "\"Meu voto não faz diferença\"",
    truth: "Eleições já foram decididas por poucos votos! Em 2020, várias cidades tiveram empates técnicos resolvidos por menos de 100 votos."
  },
  {
    myth: "\"Todos os políticos são iguais\"",
    truth: "Existem diferenças importantes entre candidatos. Pesquise propostas, histórico e atuação de cada um antes de decidir."
  },
  {
    myth: "\"Política não me interessa\"",
    truth: "A política afeta tudo: preço da comida, qualidade do ensino, transporte público, acesso à saúde. Não dá pra ignorar!"
  },
]

export function ImportanceSection() {
  return (
    <section id="importancia" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Entenda
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Por que seu voto <span className="text-primary">importa</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votar não é apenas um dever cívico, é uma ferramenta poderosa de transformação social. 
            Entenda os motivos para participar ativamente das eleições.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors bg-card">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${reason.color}`}>
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Myths Section */}
        <div className="bg-card rounded-3xl border border-border p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-secondary-foreground" />
            <h3 
              className="text-2xl lg:text-3xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Mitos sobre votar
            </h3>
          </div>
          
          <div className="grid gap-6">
            {myths.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <span className="text-destructive font-bold">X</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">{item.myth}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item.truth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
