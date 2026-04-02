function PersonaCards() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="sr-only">Who ETH Phoenix is for</h2>

        {/* Asymmetric staggered grid — NOT a 2x2 or equal grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Row 1: 7 + 5 */}
          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-7 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Builders
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              Ship projects, win bounties, get funded.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Compete in a hands-on hackathon with sponsor bounties, workshops on
              L2s, AI agents, and smart contracts, and a direct line to investors
              looking for their next bet.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-5 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Creators
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              Screen your work. Join the create-a-thon.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Submit your AI film to the AI Film 3 festival, get it in front of a
              real audience, and spend three days making new work alongside artists
              and toolmakers at the frontier.
            </p>
          </div>

          {/* Row 2: 5 + 7 (reversed asymmetry) */}
          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-5 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Investors
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              BitAngels pitches. Curated deal flow.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Access a structured pitch competition vetted by the BitAngels
              network — the same angel group that backed Ethereum and ShapeShift
              early — plus a VIP investor track built for serious deal-making.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-7 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Newcomers
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              No jargon. No gatekeeping. Start here.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              ETH Phoenix has a dedicated newcomer track with mentorship pairing,
              plain-English workshops, and a free entry tier — so you can show up
              curious and leave with real context.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PersonaCards }
