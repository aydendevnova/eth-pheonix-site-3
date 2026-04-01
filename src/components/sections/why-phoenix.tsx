function WhyPhoenix() {
  const partners = [
    {
      name: "AI Film 3",
      description:
        "The leading AI film festival bringing original AI-made work to real audiences — and co-producing ETH Phoenix's film festival track.",
    },
    {
      name: "BitAngels",
      description:
        "The world's first digital currency angel group, founded in 2013, with early bets on Ethereum, ShapeShift, and Storj — running the pitch competition.",
    },
    {
      name: "Stand With Crypto Arizona",
      description:
        "Arizona's grassroots crypto advocacy coalition connecting builders and voters across the state.",
    },
    {
      name: "Devils DAO",
      description:
        "ASU's student-led blockchain organization, plugged into the next generation of Ethereum builders coming out of the Valley.",
    },
  ]

  const facts = [
    {
      label: "Crypto-friendly since 2017.",
      detail:
        "Arizona recognized blockchain signatures and smart contracts in law before most states had formed a committee to discuss it.",
    },
    {
      label: "Home to the #1 Most Innovative University.",
      detail:
        "ASU's Blockchain Research Lab is three miles from the venue — and the students who will build the next generation of Web3 are already here.",
    },
    {
      label: "Silicon Desert, not Silicon Valley.",
      detail:
        "TSMC ($165B), Intel ($20B), and over 9,000 tech companies are headquartered in the Phoenix metro.",
    },
    {
      label: "Sky Harbor connects to everywhere.",
      detail:
        "158+ non-stop destinations, including direct flights from SF, NYC, Austin, and Miami.",
    },
    {
      label: "30% cheaper than coastal cities.",
      detail:
        "September is off-peak in Phoenix. Hotels are available, venues are bookable, and your event budget goes further.",
    },
  ]

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Partners — left, 2 of 5 cols */}
          <div className="lg:col-span-2">
            <p className="font-heading mb-8 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Partners
            </p>
            <div className="space-y-6">
              {partners.map((partner) => (
                <div key={partner.name}>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Phoenix — right, 3 of 5 cols */}
          <div className="lg:col-span-3">
            <p className="font-heading mb-8 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Why Phoenix
            </p>
            <ol className="space-y-8">
              {facts.map((fact, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-heading mt-0.5 text-sm font-medium text-primary/70 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-heading text-base font-semibold text-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {fact.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export { WhyPhoenix }
