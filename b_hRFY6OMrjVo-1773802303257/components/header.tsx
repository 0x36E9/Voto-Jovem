"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Vote } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#democracia", label: "Democracia" },
  { href: "#urna", label: "Urna" },
  { href: "#candidatos", label: "Candidatos" },
  { href: "#titulo", label: "Titulo" },
  { href: "#mitos", label: "Mitos" },
  { href: "#links", label: "TSE" },
  { href: "#quiz", label: "Quiz" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d4f24]/97 backdrop-blur-md border-b-2 border-[#f5c200]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🗳️</span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#f5c200]" style={{ fontFamily: 'var(--font-heading)' }}>
                Voto Jovem
              </span>
              <span className="text-[0.6rem] text-white/60 font-medium tracking-widest uppercase leading-none">
                Brasil Democratico
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-[#f5c200] hover:bg-[#f5c200]/10 transition-colors font-semibold text-[0.82rem] uppercase tracking-wide px-3 py-1.5 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-[#f5c200] hover:bg-white text-[#0d4f24] font-bold text-[0.82rem] uppercase tracking-wide px-5 py-2 rounded-full ml-2"
            >
              <a href="https://www.tse.jus.br/comunicacao/noticias/2022/Marco/rapido-facil-e-sem-burocracia-3-passos-para-tirar-o-titulo-pela-internet" target="_blank" rel="noopener noreferrer">
                Alistamento
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#f5c200]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/85 hover:text-[#f5c200] transition-colors font-semibold py-2 uppercase text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-[#f5c200] hover:bg-white text-[#0d4f24] font-bold uppercase tracking-wide rounded-full w-fit mt-2"
              >
                <a href="https://www.tse.jus.br/comunicacao/noticias/2022/Marco/rapido-facil-e-sem-burocracia-3-passos-para-tirar-o-titulo-pela-internet" target="_blank" rel="noopener noreferrer">
                  Alistamento
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
