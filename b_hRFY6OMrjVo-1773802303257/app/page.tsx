import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { DemocraciaSection } from "@/components/democracia-section"
import { TiposSection } from "@/components/tipos-section"
import { UrnaSection } from "@/components/urna-section"
import { CandidatosSection } from "@/components/candidatos-section"
import { CalendarioSection } from "@/components/calendario-section"
import { ImpactoSection } from "@/components/impacto-section"
import { TituloSection } from "@/components/titulo-section"
import { LinksTseSection } from "@/components/links-tse-section"
import { MitosSection } from "@/components/mitos-section"
import { QuizSection } from "@/components/quiz-section"
import { GlossarioSection } from "@/components/glossario-section"
import { DepoimentosSection } from "@/components/depoimentos-section"
import { CtaFinalSection } from "@/components/cta-final-section"
import { FooterSection } from "@/components/footer-section"
import { BackToTop } from "@/components/back-to-top"

export default function VotoJovemPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Ticker />
      <DemocraciaSection />
      <TiposSection />
      <UrnaSection />
      <CandidatosSection />
      <CalendarioSection />
      <ImpactoSection />
      <TituloSection />
      <LinksTseSection />
      <MitosSection />
      <QuizSection />
      <GlossarioSection />
      <DepoimentosSection />
      <CtaFinalSection />
      <FooterSection />
      <BackToTop />
    </main>
  )
}
