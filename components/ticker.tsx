const tickerItems = [
  "Voto é poder",
  "Democracia precisa de você",
  "Alistamento online é gratuito",
  "A urna é segura e rápida",
  "16 anos já pode votar",
  "Voto facultativo para jovens",
  "Pesquise antes de votar",
  "Seu voto muda a educação",
  "Seu voto muda a saúde",
  "Brasil democrático desde 1988"
]

export function Ticker() {
  return (
    <div className="bg-[#f5c200] py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="mx-8 text-[#0d0d0d] font-bold text-sm">
            {item}
            <span className="ml-8 text-[#0d4f24]">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
