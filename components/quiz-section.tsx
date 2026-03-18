"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const quizData = [
  {
    q: "A partir de quantos anos é possível se alistar como eleitor no Brasil?",
    opts: ["14 anos", "16 anos", "18 anos", "21 anos"],
    ans: 1,
    exp: "16 anos! A Constituição de 1988 garantiu o voto facultativo para jovens entre 16 e 17 anos. Para maiores de 18 até 70 anos, o voto é obrigatório."
  },
  {
    q: "O voto no Brasil é secreto. O que isso significa na prática?",
    opts: ["O eleitor assina o voto", "Ninguém pode saber em quem você votou", "Só o TSE sabe seu voto", "Você escolhe se quer revelar"],
    ans: 1,
    exp: "Ninguém pode saber em quem você votou! A Constituição garante o sigilo total. A urna eletrônica separa a identidade do eleitor do voto registrado — nem o TSE tem como descobrir."
  },
  {
    q: "Qual lei impede candidatos condenados de se candidatarem?",
    opts: ["Lei da Transparência", "Lei da Ficha Limpa", "Código Eleitoral", "Lei das Eleições"],
    ans: 1,
    exp: "Lei da Ficha Limpa (LC 135/2010)! Nascida de iniciativa popular com mais de 1,6 milhão de assinaturas, impede candidaturas de pessoas condenadas em segunda instância por crimes como corrupção e tráfico."
  },
  {
    q: "Em que ano o Brasil adotou a urna eletrônica?",
    opts: ["1989", "1994", "1996", "2000"],
    ans: 2,
    exp: "1996! O Brasil foi pioneiro mundial no voto eletrônico, adotando a urna nas eleições municipais de 1996 e expandindo para todo o país nas gerais de 1998."
  },
  {
    q: "Quantos dígitos você digita para votar em Deputado Federal?",
    opts: ["2 dígitos", "3 dígitos", "4 dígitos", "5 dígitos"],
    ans: 2,
    exp: "4 dígitos para Deputado Federal. A regra geral: Presidente e Governador (2), Senador (3), Dep. Federal (4), Dep. Estadual e Vereador (5)."
  },
  {
    q: "O que acontece com quem não vota e não justifica a ausência?",
    opts: ["Vai preso", "Paga multa e fica com título cancelado", "Fica impossibilitado de tirar passaporte, entre outras restrições", "Nada, não há punição"],
    ans: 2,
    exp: "Diversas restrições! Quem não vota e não justifica pode ter dificuldade para emitir passaporte, renovar RG, participar de concursos públicos e abrir conta em bancos estatais. A justificativa pode ser feita online no TSE."
  },
  {
    q: "Qual a principal função do TSE — Tribunal Superior Eleitoral?",
    opts: ["Fiscalizar os impostos", "Organizar e garantir a lisura das eleições", "Defender os direitos humanos", "Controlar o orçamento público"],
    ans: 1,
    exp: "Organizar e garantir a lisura das eleições! O TSE é o órgão máximo da Justiça Eleitoral brasileira. Cuida do alistamento, registro de candidatos, organização do pleito e proclamação dos eleitos."
  },
  {
    q: "O que é um plebiscito?",
    opts: ["Votação interna de um partido", "Consulta popular sobre uma questão antes da decisão governamental", "Segundo turno de uma eleição", "Pesquisa eleitoral publicada pela imprensa"],
    ans: 1,
    exp: "Consulta popular prévia! No plebiscito, os cidadãos decidem sobre uma questão antes que o governo aja. Em 1993, o Brasil realizou um plebiscito sobre a forma de governo: monarquia ou república (venceu a república)."
  }
]

export function QuizSection() {
  const { ref, isInView } = useInView()
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (idx: number) => {
    if (answered) return
    setAnswered(true)
    setSelectedIdx(idx)
    if (idx === quizData[current].ans) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (current < quizData.length - 1) {
      setCurrent(current + 1)
      setAnswered(false)
      setSelectedIdx(null)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setScore(0)
    setAnswered(false)
    setSelectedIdx(null)
    setShowResult(false)
  }

  const getResultMessage = () => {
    if (score <= 3) return "Continue estudando! Reveja as seções acima."
    if (score <= 5) return "Bom trabalho! Você está no caminho certo."
    if (score <= 7) return "Muito bem! Você entende bastante de democracia."
    return "Parabéns! Você é um cidadão exemplar!"
  }

  const progress = ((current / quizData.length) * 100) + 10

  return (
    <section id="quiz" ref={ref} className="py-24 bg-[#0d4f24] text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,194,0,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0d4f24] bg-[#f5c200] rounded-full">
            Teste seus conhecimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Quiz eleitoral
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Quanto você sabe sobre democracia e eleições? Teste seus conhecimentos e aprenda com as respostas!
          </p>
        </div>

        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Progress Bar */}
          <div className="h-2 bg-white/10 rounded-full mb-8 overflow-hidden">
            <div className="h-full bg-[#f5c200] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          {showResult ? (
            /* Result */
            <div className="text-center py-8">
              <p className="text-6xl font-black text-[#f5c200] mb-4">
                {score}/{quizData.length}
              </p>
              <p className="text-2xl font-bold text-white mb-4">{getResultMessage()}</p>
              <p className="text-white/70 mb-8">
                Você acertou {score} de {quizData.length} perguntas. Compartilhe com seus amigos e incentive-os a aprender sobre democracia e participação política!
              </p>
              <button onClick={handleRestart} className="px-8 py-4 bg-[#f5c200] text-[#0d0d0d] font-bold rounded-full hover:bg-[#d9ab00] transition-all">
                Tentar novamente
              </button>
            </div>
          ) : (
            /* Question */
            <>
              <p className="text-white/60 text-sm mb-2">
                Pergunta {current + 1} de {quizData.length}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                {quizData[current].q}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {quizData[current].opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={answered}
                    className={`w-full text-left bg-white/10 border-2 border-white/20 rounded-xl px-6 py-4 text-white font-semibold transition-all ${
                      answered
                        ? i === quizData[current].ans
                          ? "bg-[#22a050]/30 border-[#22ff66] text-[#aaffbb]"
                          : i === selectedIdx
                          ? "bg-[#ff3232]/20 border-[#ff6666] text-[#ffaaaa]"
                          : ""
                        : "hover:bg-[#f5c200]/15 hover:border-[#f5c200] cursor-pointer"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {answered && (
                <div className="mt-6 p-4 bg-white/10 rounded-xl">
                  <p className="text-white leading-relaxed">
                    {selectedIdx === quizData[current].ans ? "✅ Correto! " : "❌ Incorreto. "}
                    {quizData[current].exp}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {answered && (
                <button onClick={handleNext} className="mt-6 w-full px-8 py-4 bg-[#f5c200] text-[#0d0d0d] font-bold rounded-full hover:bg-[#d9ab00] transition-all">
                  {current < quizData.length - 1 ? "Próxima pergunta →" : "Ver resultado →"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
