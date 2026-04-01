"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function ClosingCta() {
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
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8 px-6 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Phoenix is calling.
        </h2>
        <p className="text-primary-foreground/70">
          September 25–27, 2026. Three days. One city. Builders, creators, and
          investors in the same room.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-sm gap-3"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== "idle") setStatus("idle")
            }}
            className="h-11 flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-base text-primary-foreground placeholder:text-primary-foreground/50"
            aria-label="Email address"
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="h-11 font-heading px-6 text-sm font-semibold tracking-wide"
          >
            Get Early Access
          </Button>
        </form>
        {status === "success" && (
          <p className="text-sm text-primary-foreground/80">
            You&apos;re in. We&apos;ll be in touch as details come together.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-primary-foreground/80">
            That doesn&apos;t look right — double-check your email address.
          </p>
        )}
      </div>
    </section>
  )
}

export { ClosingCta }
