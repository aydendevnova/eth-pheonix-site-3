import Link from "next/link"
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-foreground"
        >
          ETH PHOENIX
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          <a
            href="#what-is"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#what-to-expect"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Expect
          </a>
          <a
            href="#why-phoenix"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Why Phoenix
          </a>
        </nav>

        <Button
          className="h-10 rounded-full px-5 font-heading text-xs uppercase tracking-wider"
          asChild
        >
          <a href="#get-early-access">Get Early Access</a>
        </Button>
      </div>
    </header>
  )
}

export { Header }
