"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Vote } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#democracia", label: "Democracia" },
  { href: "#urna", label: "Urna" },
  { href: "#candidatos", label: "Candidatos" },
  { href: "#titulo", label: "Título" },
  { href: "#mitos", label: "Mitos" },
  { href: "#links", label: "TSE" },
  { href: "#quiz", label: "Quiz" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d4f24]/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🗳️</span>
            <div>
              <span className="font-bold text-white text-lg">
                Voto Jovem
              </span>
              <span className="hidden sm:inline text-white/60 text-xs ml-2">
                Brasil Democrático
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/80 hover:text-[#f5c200] transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-[#f5c200] hover:bg-[#d9ab00] text-[#0d0d0d] font-bold rounded-full px-6">
              <Link href="https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor" target="_blank">
                Alistamento
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#f5c200] py-2 px-4 rounded-lg hover:bg-white/5 transition-all font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-[#f5c200] hover:bg-[#d9ab00] text-[#0d0d0d] font-bold rounded-full mt-2">
                <Link href="https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/atendimento-eleitor" target="_blank">
                  Alistamento
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
