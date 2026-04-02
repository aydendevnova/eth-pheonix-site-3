import Image from "next/image"
import { EmailForm } from "@/components/shared/email-form"

/*
 * ============================================================
 * HERO A/B VARIANTS — swap the active variant below.
 * Only one should be uncommented at a time.
 * ============================================================
 */

/* --- VARIANT: BUILDER-FIRST (active) ---
const heroContent = {
  headline: (
    <>
      Build.
      <br />
      Screen.
      <br />
      Ship.
    </>
  ),
  subheadline:
    "ETH Phoenix brings together Ethereum developers, AI filmmakers, and investors for three days in Phoenix, AZ — September 25–27, 2026.",
}
*/

const heroContent = {
  headline: (
    <>
      Where Ethereum builders, AI creators, and filmmakers converge.
    </>
  ),
  subheadline:
    "Three days in Phoenix. One hackathon, one film festival, one pitch competition. September 25–27, 2026.",
}


/* --- VARIANT: INVESTOR-FIRST ---
const heroContent = {
  headline: (
    <>
      The convergence you&apos;ve been looking for.
    </>
  ),
  subheadline:
    "Blockchain builders, AI film creators, and early-stage founders — together in Phoenix for three days. September 25–27, 2026.",
}
*/


function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Atmospheric desert landscape with dramatic sunset lighting over Phoenix, Arizona mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      {/* Content — left-aligned, not centered */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
            September 25–27, 2026 · Phoenix, Arizona
          </p>

          <h1 className="mt-8 font-heading text-4xl font-bold leading-[0.85] tracking-tight text-foreground sm:text-5xl lg:text-6xl ">
            {heroContent.headline}
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-10 max-w-md" id="get-early-access">
            <EmailForm />
          </div>

          <a
            href="#sponsor"
            className="mt-4 inline-block py-2 text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
