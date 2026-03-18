"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  { num: "1", title: "Acesse o sistema online do TSE", desc: "Entre no portal de autoatendimento do TSE — o alistamento e 100% gratuito e pode ser feito pelo celular ou computador. Nenhum intermediario e necessario.", link: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor" },
  { num: "2", title: "Preencha seus dados pessoais", desc: "CPF, nome completo, data de nascimento, endereco e dados dos pais. Voce tambem informara sua zona e secao eleitoral preferencial." },
  { num: "3", title: "Envie sua foto e biometria", desc: "O sistema pedira uma foto de rosto atualizada. Em alguns casos, a biometria (impressao digital) e coletada presencialmente no cartorio eleitoral." },
  { num: "4", title: "Aguarde a aprovacao", desc: "O prazo de analise e de ate 30 dias. Voce recebera confirmacao por e-mail. Apos aprovado, ja consta no sistema como eleitor regular." },
  { num: "5", title: "Confirme seu local de votacao", desc: "Com o titulo emitido, consulte sua secao e zona eleitoral no autoatendimento do TSE antes do dia da eleicao.", link: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral" },
  { num: "6", title: "Transfira o domicilio se necessario", desc: "Mudou de cidade? Voce pode transferir o domicilio eleitoral pelo mesmo portal. Precisa ser feito antes do fechamento do prazo eleitoral (geralmente maio do ano da eleicao)." }
]

const documentos = [
  "CPF (obrigatorio)",
  "RG ou documento oficial com foto",
  "Comprovante de residencia recente",
  "Certidao de nascimento ou casamento",
  "Foto 3x4 atualizada (para o portal)"
]

const idades = [
  { age: "16-17", desc: "anos", tag: "Facultativo", tagColor: "bg-[#f5c200] text-[#0d4f24]" },
  { age: "18-70", desc: "anos", tag: "Obrigatorio", tagColor: "bg-[#ff4444] text-white" },
  { age: "70+", desc: "anos", tag: "Facultativo", tagColor: "bg-[#f5c200] text-[#0d4f24]" },
  { age: "X", desc: "Nao-alfabetizados", tag: "Facultativo", tagColor: "bg-[#f5c200] text-[#0d4f24]" }
]

const penalidades = [
  { icon: "🚫", text: "Impossibilidade de obter passaporte ou carteira de identidade" },
  { icon: "🏛️", text: "Impedimento de posse em cargo publico" },
  { icon: "🏦", text: "Restricao para emprestimos em bancos estatais" },
  { icon: "💰", text: "Multa de R$ 3,51 por turno nao votado (valor atual)" }
]

export function TituloSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="titulo" className="py-24 px-[5%] bg-white">
      <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#d6f0df] text-[#0d4f24] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1a7a3c] rounded-full" />
          Documentacao
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0d4f24] leading-none tracking-tight mb-4">
          Titulo <em className="text-[#1a7a3c] italic">eleitoral:</em><br />passo a passo
        </h2>
        <p className="text-lg text-[#444440] leading-relaxed max-w-[680px]">
          Do alistamento a regularizacao — tudo que voce precisa saber para garantir seu direito ao voto.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start mt-12">
        {/* Left - Steps */}
        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`bg-[#f7f7f3] rounded-[18px] p-6 flex gap-5 items-start border-2 border-transparent transition-all hover:border-[#22a050] hover:bg-[#d6f0df] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a7a3c] text-white font-[var(--font-heading)] text-xl font-black flex items-center justify-center flex-shrink-0">
                {step.num}
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0d4f24] mb-1">{step.title}</h4>
                <p className="text-sm text-[#444440] leading-relaxed">{step.desc}</p>
                {step.link && (
                  <Link href={step.link} target="_blank" className="text-[#1a7a3c] font-bold underline text-sm mt-1 inline-block">
                    Acessar portal TSE
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right - Sidebar */}
        <div className="flex flex-col gap-5">
          {/* Documentos */}
          <div className={`bg-[#f7f7f3] rounded-[18px] p-7 border-2 border-[#e8e8e8] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#0d4f24] mb-4">
              Documentos necessarios
            </h3>
            <div className="flex flex-col gap-2.5">
              {documentos.map((doc, i) => (
                <div key={i} className="flex gap-3 items-center text-sm text-[#444440]">
                  <span className="w-5 h-5 rounded-full bg-[#d6f0df] text-[#1a7a3c] font-black text-[0.7rem] flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  {doc}
                </div>
              ))}
            </div>
          </div>

          {/* Idades */}
          <div className={`bg-gradient-to-br from-[#0d4f24] to-[#1a7a3c] rounded-[18px] p-7 text-white transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <h3 className="font-[var(--font-heading)] text-xl text-[#f5c200] mb-4">
              Quem pode e deve votar
            </h3>
            <div className="flex flex-col gap-3">
              {idades.map((idade, i) => (
                <div key={i} className="flex justify-between items-center bg-white/10 rounded-lg px-3.5 py-2.5">
                  <span className="font-[var(--font-heading)] text-2xl font-black text-[#f5c200]">{idade.age}</span>
                  <span className="text-sm text-white/80">{idade.desc}</span>
                  <span className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${idade.tagColor}`}>
                    {idade.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Penalidades */}
          <div className={`bg-[#f7f7f3] rounded-[18px] p-7 border-2 border-[#e8e8e8] transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#0d4f24] mb-4">
              Penalidades por nao votar
            </h3>
            <div className="flex flex-col">
              {penalidades.map((pen, i) => (
                <div key={i} className="flex gap-3 items-start py-2.5 border-b border-[#eee] last:border-b-0">
                  <span className="text-xl flex-shrink-0">{pen.icon}</span>
                  <p className="text-sm text-[#444440] leading-relaxed">{pen.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
