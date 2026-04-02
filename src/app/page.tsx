import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhatIs } from "@/components/sections/what-is"
import { PersonaCards } from "@/components/sections/persona-cards"
import { WhatToExpect } from "@/components/sections/what-to-expect"
import { WhyPhoenix } from "@/components/sections/why-phoenix"
import { ClosingCta } from "@/components/sections/closing-cta"
import { Footer } from "@/components/sections/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* bg-background — dark */}
        <Hero />

        {/* bg-muted — slightly lighter dark */}
        <WhatIs />

        {/* bg-background — dark */}
        {/* <PersonaCards /> */}

        {/* bg-muted — slightly lighter dark */}
        <WhatToExpect />

        {/* Full-bleed photo break — min 400px */}
        <section className="relative min-h-[400px]">
          <Image
            src="/images/photo-break.webp"
            alt="Panoramic Arizona desert landscape at golden hour"
            fill
            className="object-cover"
          />
        </section>

        {/* surface-light — light contrast moment */}
        <WhyPhoenix />

        {/* bg-card — warm dark */}
        <ClosingCta />
      </main>

      {/* bg-background — dark */}
      <Footer />
    </>
  )
}
