import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhatIs } from "@/components/sections/what-is"
import { PersonaCards } from "@/components/sections/persona-cards"
import { WhatToExpect } from "@/components/sections/what-to-expect"
import { WhyPhoenix } from "@/components/sections/why-phoenix"
import { ClosingCta } from "@/components/sections/closing-cta"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIs />
        <PersonaCards />
        <WhatToExpect />
        <WhyPhoenix />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}
