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
              Ship faster with real feedback and real upside.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Pain point: conference panels rarely help you ship. ETH Phoenix gives
              you sponsor bounties, code-level workshops, and direct demo sessions
              with mentors and funders so your project leaves prototype mode.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-5 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Creators
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              Turn AI-native work into audience and opportunity.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Pain point: creators struggle to get seen and funded. Screen with AI
              Film 3, join the create-a-thon, and connect with platforms and teams
              focused on distribution, rights, and creator monetization.
            </p>
          </div>

          {/* Row 2: 5 + 7 (reversed asymmetry) */}
          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-5 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Investors
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              See stronger founders with less sourcing noise.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Pain point: most event intros are unqualified. BitAngels-powered
              screening, structured pitch sessions, and curated networking reduce
              random outreach and increase high-signal founder conversations.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:col-span-7 lg:p-10">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Newcomers
            </p>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-card-foreground lg:text-xl">
              Learn the space without feeling behind.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Pain point: crypto events often feel exclusionary and over-jargoned.
              Our Start Here track, mentorship pairing, and plain-language sessions
              give you confidence, context, and a practical first path to contribute.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PersonaCards }
