"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToForm = () => {
    const hero = document.getElementById("hero-form")
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" })
      const input = hero.querySelector("input")
      input?.focus()
    }
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-foreground">
          ETH Phoenix
        </Link>
        <Button
          size="sm"
          onClick={scrollToForm}
          className="font-heading text-xs font-semibold tracking-wide uppercase"
        >
          Get Early Access
        </Button>
      </div>
    </header>
  )
}

export { Header }
