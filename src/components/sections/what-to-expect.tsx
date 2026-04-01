import { cn } from "@/lib/utils"

interface ExpectBlockProps {
  number: string
  title: string
  description: string
  align: "left" | "right"
}

function ExpectBlock({ number, title, description, align }: ExpectBlockProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16",
        align === "right" && "lg:text-right"
      )}
    >
      <div
        className={cn(
          "space-y-3",
          align === "right" && "lg:order-2 lg:text-left"
        )}
      >
        <span className="font-heading text-sm font-medium text-primary">
          {number}
        </span>
        <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h3>
      </div>
      <div
        className={cn(
          "flex items-center",
          align === "right" && "lg:order-1 lg:justify-end"
        )}
      >
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

function WhatToExpect() {
  return (
    <section className="border-t border-border/40 bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-20 px-6 lg:space-y-28 lg:px-8">
        <p className="font-heading text-xs font-medium tracking-widest text-muted-foreground uppercase">
          What to expect
        </p>

        <ExpectBlock
          number="01"
          title="Build"
          description="Spend three days deep in a hands-on hackathon — coding against live sponsor bounties, getting mentorship from protocol engineers, and demoing finished work to the people who fund it."
          align="left"
        />

        <ExpectBlock
          number="02"
          title="Screen"
          description="AI Film 3 brings its festival to Phoenix: original films made with AI tools premiere on the big screen, alongside a creator-led make-a-thon where new work gets made in real time."
          align="right"
        />

        <ExpectBlock
          number="03"
          title="Connect"
          description="The BitAngels pitch competition puts early-stage founders in front of the angel network that backed Ethereum — structured deal flow, not awkward hallway networking."
          align="left"
        />
      </div>
    </section>
  )
}

export { WhatToExpect }
