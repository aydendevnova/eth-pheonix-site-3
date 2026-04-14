import Image from "next/image"

function WhatToExpect() {
  return (
    <section id="what-to-expect" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          What to Expect
        </p>

        {/* Alternating image-text rows with hairline separators */}
        <div className="mt-20">
          {/* Build: image left, text right */}
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Image
                src="/images/event-build.webp"
                alt="Developers collaborating at a hackathon workspace"
                width={1920}
                height={1080}
                className="w-full rounded-xl"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
                01
              </p>
              <h3 className="mt-4 font-heading text-5xl font-bold text-foreground lg:text-[64px] lg:leading-[1.05]">
                Build
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Feature: workshop-heavy hackathon with live bounties, protocol
                mentorship, and structured demo reviews. Benefit: builders leave
                with shipped progress, clearer technical direction, and direct
                exposure to partners who can fund or integrate their work.
              </p>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Screen: text left, image right */}
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
                02
              </p>
              <h3 className="mt-4 font-heading text-5xl font-bold text-foreground lg:text-[64px] lg:leading-[1.05]">
                Screen
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Feature: AI Film 3 screenings, creator critiques, and live
                create-a-thon production blocks. Benefit: filmmakers and artists
                gain visibility, actionable feedback, and direct access to teams
                building new distribution and monetization rails.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Image
                src="/images/event-screen.webp"
                alt="AI film screening in a theater with audience watching"
                width={1920}
                height={1080}
                className="w-full rounded-xl"
              />
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Connect: image left, text right */}
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Image
                src="/images/event-connect.webp"
                alt="Startup pitch competition on stage with investors in audience"
                width={1920}
                height={1080}
                className="w-full rounded-xl"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
                03
              </p>
              <h3 className="mt-4 font-heading text-5xl font-bold text-foreground lg:text-[64px] lg:leading-[1.05]">
                Connect
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Feature: BitAngels-vetted pitch flow and curated matchmaking across
                founders, investors, and strategic operators. Benefit: less random
                networking, more trust, and more conversations that convert into
                partnerships, pilots, and investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { WhatToExpect }
