"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface EmailFormProps {
  className?: string
}

function EmailForm({ className = "" }: EmailFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "success" | "error-validation" | "error-server"
  >("idle")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error-validation")
      return
    }
    setStatus("success")
  }

  if (status === "success") {
    return (
      <p className={`text-sm font-medium text-primary ${className}`}>
        You&apos;re in. We&apos;ll be in touch as details come together.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== "idle") setStatus("idle")
          }}
          className="h-12 flex-1 rounded-lg px-4 text-base"
          aria-label="Email address"
        />
        <Button
          type="submit"
          size="lg"
          className="h-12 shrink-0 rounded-lg px-6 font-heading text-xs uppercase tracking-wider"
        >
          Get Early Access
        </Button>
      </div>
      {status === "error-validation" && (
        <p className="mt-2 text-sm text-destructive">
          That doesn&apos;t look right — double-check your email address.
        </p>
      )}
      {status === "error-server" && (
        <p className="mt-2 text-sm text-destructive">
          Something went wrong on our end. Try again in a moment.
        </p>
      )}
    </form>
  )
}

export { EmailForm }
