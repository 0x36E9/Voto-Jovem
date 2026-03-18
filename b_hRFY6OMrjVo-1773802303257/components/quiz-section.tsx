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
    exp: "Ninguém pode saber em quem você votou! A Constituição garante o sigilo total. A urna eletrônica separa a identidade do eleitor do voto registrado, nem o TSE tem como descobrir."
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
    exp: "4 dígitos para Deputado Federal. A regra geral é: Presidente e Governador (2), Senador (3), Dep. Federal (4), Dep. Estadual e Vereador (5)."
  },
  {
    q: "O que acontece com quem não vota e não justifica a ausência?",
    opts: ["Vai preso", "Paga multa e fica com título cancelado", "Fica impossibilitado de tirar passaporte, entre outras restrições", "Nada, não há punição"],
    ans: 2,
    exp: "Diversas restrições! Quem não vota e não justifica pode ter dificuldade para emitir passaporte, renovar RG, participar de concursos públicos e abrir conta em bancos estatais. A justificativa pode ser feita online no TSE."
  },
  {
    q: "Qual é a principal função do TSE — Tribunal Superior Eleitoral?",
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
    <section id="quiz" className="py-24 px-[5%] bg-[#1a7a3c] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(245,194,0,0.15),transparent_60%)]" />

      <div ref={ref} className={`relative z-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <span className="inline-flex items-center gap-2 bg-[#f5c200]/20 text-[#f5c200] text-[0.72rem] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#f5c200] rounded-full" />
          Teste seus conhecimentos
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-none tracking-tight mb-4">
          Quiz <em className="text-[#f5c200] italic">eleitoral</em>
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-[680px]">
          Quanto você sabe sobre democracia e eleições? Teste seus conhecimentos e aprenda com as respostas!
        </p>
      </div>

      <div className={`bg-white/10 border-2 border-white/20 rounded-[28px] p-8 md:p-12 mt-12 max-w-[800px] relative z-10 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        {/* Progress Bar */}
        <div className="bg-white/15 rounded-full h-1.5 mb-8 overflow-hidden">
          <div 
            className="bg-[#f5c200] h-full rounded-full transition-all duration-500"
            style={{ width: showResult ? "100%" : `${progress}%` }}
          />
        </div>

        {showResult ? (
          /* Result */
          <div className="text-center py-8">
            <div className="font-[var(--font-heading)] text-8xl font-black text-[#f5c200] leading-none mb-2">
              {score}/{quizData.length}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{getResultMessage()}</h3>
            <p className="text-white/75 leading-relaxed max-w-[500px] mx-auto mb-8">
              Você acertou {score} de {quizData.length} perguntas. Compartilhe com seus amigos e incentive-os a aprender sobre democracia e participação política!
            </p>
            <button
              onClick={handleRestart}
              className="bg-[#f5c200] text-[#0d4f24] font-bold px-7 py-3 rounded-full transition-all hover:bg-[#ffe040] hover:-translate-y-0.5"
            >
              Tentar novamente
            </button>
          </div>
        ) : (
          /* Question */
          <>
            <div className="text-xs text-white/60 font-bold uppercase tracking-wider mb-3">
              Pergunta {current + 1} de {quizData.length}
            </div>
            <div className="font-[var(--font-heading)] text-2xl font-bold text-white leading-snug mb-6">
              {quizData[current].q}
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3 mb-6">
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
              <div className="bg-white/10 rounded-xl px-6 py-5 mb-6">
                <p className="text-white/90 leading-relaxed">
                  {selectedIdx === quizData[current].ans ? "✅ Correto! " : "❌ Incorreto. "}
                  <strong className="text-[#f5c200]">{quizData[current].exp}</strong>
                </p>
              </div>
            )}

            {/* Next Button */}
            {answered && (
              <button
                onClick={handleNext}
                className="bg-[#f5c200] text-[#0d4f24] font-bold px-7 py-3 rounded-full transition-all hover:bg-[#ffe040] hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                {current < quizData.length - 1 ? "Próxima pergunta →" : "Ver resultado →"}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  )
}
