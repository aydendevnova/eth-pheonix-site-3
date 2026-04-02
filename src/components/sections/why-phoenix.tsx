import Image from "next/image"

const facts = [
  {
    title: "Crypto-friendly since 2017.",
    description:
      "Arizona recognized blockchain signatures and smart contracts in law before most states had formed a committee to discuss it.",
  },
  {
    title: "Home to the #1 Most Innovative University.",
    description:
      "ASU\u2019s Blockchain Research Lab is three miles from the venue \u2014 and the students who will build the next generation of Web3 are already here.",
  },
  {
    title: "Silicon Desert, not Silicon Valley.",
    description:
      "TSMC ($165B), Intel ($20B), and over 9,000 tech companies are headquartered in the Phoenix metro. The infrastructure is real.",
  },
  {
    title: "Sky Harbor connects to everywhere.",
    description:
      "158+ non-stop destinations, including direct flights from SF, NYC, Austin, and Miami \u2014 and a light rail from the terminal straight to downtown.",
  },
  {
    title: "30% cheaper than coastal cities.",
    description:
      "September is off-peak in Phoenix. Hotels are available, venues are bookable, and your event budget goes further than it would in New York or San Francisco.",
  },
]

const partners = [
  { name: "AI Film 3", logo: "/images/logo-aifilm3.webp" },
  { name: "BitAngels", logo: "/images/logo-bitangels.webp" },
  { name: "Stand With Crypto AZ", logo: "/images/logo-standwithcrypto.webp" },
  { name: "Devils DAO", logo: "/images/logo-devilsdao.webp" },
]

function WhyPhoenix() {
  return (
    <section
      id="why-phoenix"
      className="surface-light bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column offset layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Why Phoenix, Arizona?
            </p>
            <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-foreground lg:text-[64px] lg:leading-[1.05]">
              Why Phoenix?
            </h2>

            <div className="mt-12 space-y-8">
              {facts.map((fact, i) => (
                <div key={i} className="flex gap-6">
                  <span className="font-heading text-sm font-medium text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-heading text-base font-semibold text-foreground">
                      {fact.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {fact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Image
              src="/images/phoenix-skyline.webp"
              alt="Aerial view of Phoenix, Arizona downtown skyline at dusk"
              width={1536}
              height={2048}
              className="w-full rounded-xl"
            />
          </div>
        </div>

        {/* Partner logos — grayscale, restrained, below the fold */}
        <div className="mt-24 border-t border-border pt-12">
          <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
            Partners
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8 lg:gap-12">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={96}
                height={48}
                className="h-12 w-24 rounded-sm object-contain grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { WhyPhoenix }
