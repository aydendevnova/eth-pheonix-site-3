"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Hero() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error")
      return
    }
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="flex min-h-[100vh] flex-col justify-end pb-16 pt-24 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-heading mb-6 text-sm font-medium tracking-widest text-primary uppercase">
            September 25–27, 2026 &middot; Phoenix, AZ
          </p>

          {/* Statement headline — massive, left-aligned */}
          <h1 className="font-heading text-6xl leading-[0.95] font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            Build.
            <br />
            Screen.
            <br />
            Ship.
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            ETH Phoenix brings together Ethereum developers, AI filmmakers, and
            investors for three days in Phoenix, AZ.
          </p>

          {/* Email form */}
          <div id="hero-form" className="mt-10 max-w-md">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status !== "idle") setStatus("idle")
                }}
                className="h-11 flex-1 bg-card/50 font-body text-base"
                aria-label="Email address"
              />
              <Button
                type="submit"
                size="lg"
                className="h-11 font-heading px-6 text-sm font-semibold tracking-wide"
              >
                Get Early Access
              </Button>
            </form>
            {status === "success" && (
              <p className="mt-3 text-sm text-primary">
                You&apos;re in. We&apos;ll be in touch as details come together.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-destructive">
                That doesn&apos;t look right — double-check your email address.
              </p>
            )}
          </div>

          {/* Secondary CTA */}
          <div className="mt-6">
            <a
              href="mailto:sponsors@ethphoenix.com"
              className="font-heading text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Become a Sponsor &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
