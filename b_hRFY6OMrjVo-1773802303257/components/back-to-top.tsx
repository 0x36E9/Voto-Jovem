"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#f5c200] text-[#0d4f24] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
        show 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      } hover:bg-[#0d4f24] hover:text-[#f5c200] hover:-translate-y-1`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} strokeWidth={3} />
    </button>
  )
}
