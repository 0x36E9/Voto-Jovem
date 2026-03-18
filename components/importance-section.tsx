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
    truth: "A política afeta tudo: preço da comida, qualidade do ensino, transporte público, acesso à saúde. Não dá para ignorar!"
  },
]

export function ImportanceSection() {
  return (
    <section id="importancia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Entenda
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Por que seu voto importa?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Votar não é apenas um dever cívico, é uma ferramenta poderosa de transformação social. 
            Entenda os motivos para participar ativamente das eleições.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-lg ${reason.color} flex items-center justify-center flex-shrink-0`}>
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Myths Section */}
        <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <AlertTriangle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">
              Mitos sobre votar
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {myths.map((item, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    X
                  </span>
                  <p className="text-red-400 font-medium text-sm">
                    {item.myth}
                  </p>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed pl-9">
                  {item.truth}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
