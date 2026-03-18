const tickerItems = [
  "Voto é poder",
  "Democracia precisa de você",
  "Alistamento online é gratuito",
  "A urna é segura e rápida",
  "16 anos: já pode votar",
  "Voto facultativo para jovens",
  "Pesquise antes de votar",
  "Seu voto muda a educação",
  "Seu voto muda a saúde",
  "Brasil democrático desde 1988"
]

export function Ticker() {
  return (
    <div 
      className="bg-[#f5c200] py-3 overflow-hidden border-y-[3px] border-[#c49a00]"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-[ticker_35s_linear_infinite]">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-sm font-bold text-[#0d4f24] px-8 uppercase tracking-wider"
          >
            {item}
            <span className="text-[#1a7a3c]/70">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
