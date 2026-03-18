"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  { num: "1", title: "Acesse o sistema online do TSE", desc: "Entre no portal de autoatendimento do TSE — o alistamento é 100% gratuito e pode ser feito pelo celular ou computador. Nenhum intermediário é necessário.", link: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor" },
  { num: "2", title: "Preencha seus dados pessoais", desc: "CPF, nome completo, data de nascimento, endereço e dados dos pais. Você também informará sua zona e seção eleitoral preferencial." },
  { num: "3", title: "Envie sua foto e biometria", desc: "O sistema pedirá uma foto de rosto atualizada. Em alguns casos, a biometria (impressão digital) é coletada presencialmente no cartório eleitoral." },
  { num: "4", title: "Aguarde a aprovação", desc: "O prazo de análise é de até 30 dias. Você receberá confirmação por e-mail. Após aprovado, já consta no sistema como eleitor regular." },
  { num: "5", title: "Confirme seu local de votação", desc: "Com o título emitido, consulte sua seção e zona eleitoral no autoatendimento do TSE antes do dia da eleição.", link: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral" },
  { num: "6", title: "Transfira o domicílio se necessário", desc: "Mudou de cidade? Você pode transferir o domicílio eleitoral pelo mesmo portal. Precisa ser feito antes do fechamento do prazo eleitoral (geralmente maio do ano da eleição)." }
]

const documentos = [
  "CPF (obrigatório)",
  "RG ou documento oficial com foto",
  "Comprovante de residência recente",
  "Certidão de nascimento ou casamento",
  "Foto 3x4 atualizada (para o portal)"
]

const idades = [
  { age: "16-17", desc: "anos", tag: "Facultativo", tagColor: "bg-[#f5c200] text-[#0d4f24]" },
  { age: "18-70", desc: "anos", tag: "Obrigatório", tagColor: "bg-[#ff4444] text-white" },
  { age: "70+", desc: "anos", tag: "Facultativo", tagColor: "bg-[#f5c200] text-[#0d4f24]" },
  { age: "X", desc: "Não alfabetizados", tag: "Facultativo", tagColor: "bg-[#f5c200] text-[#0d4f24]" }
]

const penalidades = [
  { icon: "🚫", text: "Impossibilidade de obter passaporte ou carteira de identidade" },
  { icon: "🏛️", text: "Impedimento de posse em cargo público" },
  { icon: "🏦", text: "Restrição para empréstimos em bancos estatais" },
  { icon: "💰", text: "Multa de R$ 3,51 por turno não votado (valor atual)" }
]

export function TituloSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="titulo" ref={ref} className="py-24 bg-[#fafbf7]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#d6f0df] rounded-full">
            Documentação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4 font-serif">
            Título eleitoral: passo a passo
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Do alistamento à regularização — tudo que você precisa saber para garantir seu direito ao voto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Steps */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-[#e5e7e2] hover:border-[#22a050]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#0d4f24] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-[#0d0d0d] mb-1">{step.title}</h4>
                  <p className="text-sm text-[#555] mb-2">{step.desc}</p>
                  {step.link && (
                    <Link href={step.link} target="_blank" className="text-sm text-[#22a050] hover:underline font-medium">
                      Acessar portal TSE
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Sidebar */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Documentos */}
            <div className="bg-white rounded-xl border border-[#e5e7e2] p-6">
              <h4 className="font-bold text-[#0d0d0d] mb-4">
                Documentos necessários
              </h4>
              <ul className="space-y-2">
                {documentos.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#333]">
                    <span className="w-5 h-5 rounded-full bg-[#d6f0df] text-[#0d4f24] flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Idades */}
            <div className="bg-white rounded-xl border border-[#e5e7e2] p-6">
              <h4 className="font-bold text-[#0d0d0d] mb-4">
                Quem pode e deve votar
              </h4>
              <div className="space-y-3">
                {idades.map((idade, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#0d4f24]">{idade.age}</span>
                    <span className="text-xs text-[#555]">{idade.desc}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${idade.tagColor}`}>
                      {idade.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Penalidades */}
            <div className="bg-[#fff8f0] rounded-xl border border-[#ffd6a5] p-6">
              <h4 className="font-bold text-[#0d0d0d] mb-4">
                Penalidades por não votar
              </h4>
              <ul className="space-y-3">
                {penalidades.map((pen, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#333]">
                    <span className="text-lg">{pen.icon}</span>
                    <span>{pen.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
