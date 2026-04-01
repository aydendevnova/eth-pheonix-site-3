import { cn } from "@/lib/utils"

interface PersonaCardProps {
  headline: string
  subtext: string
  className?: string
  accent?: boolean
}

function PersonaCard({ headline, subtext, className, accent }: PersonaCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/60 bg-card p-8 transition-colors",
        accent && "border-primary/30 bg-primary/5",
        className
      )}
    >
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {headline}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {subtext}
      </p>
    </div>
  )
}

function PersonaCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-heading mb-10 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Who it&apos;s for
        </p>

        {/* Bento grid — asymmetric, NOT four equal cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Builders — spans 2 cols, the primary audience */}
          <PersonaCard
            headline="Ship projects, win bounties, get funded."
            subtext="Compete in a hands-on hackathon with sponsor bounties, workshops on L2s, AI agents, and smart contracts, and a direct line to investors looking for their next bet."
            className="md:col-span-2"
            accent
          />

          {/* Creators — tall card, spans 2 rows */}
          <PersonaCard
            headline="Screen your work. Join the create-a-thon."
            subtext="Submit your AI film to the AI Film 3 festival, get it in front of a real audience, and spend three days making new work alongside artists and toolmakers at the frontier."
            className="md:row-span-2 flex flex-col justify-between"
          />

          {/* Investors */}
          <PersonaCard
            headline="BitAngels pitches. Curated deal flow."
            subtext="Access a structured pitch competition vetted by the BitAngels network — the same angel group that backed Ethereum and ShapeShift early — plus a VIP investor track built for serious deal-making."
          />

          {/* Newcomers */}
          <PersonaCard
            headline="No jargon. No gatekeeping. Start here."
            subtext="ETH Phoenix has a dedicated newcomer track with mentorship pairing, plain-English workshops, and a free entry tier — so you can show up curious and leave with real context."
          />
        </div>
      </div>
    </section>
  )
}

export { PersonaCards }
