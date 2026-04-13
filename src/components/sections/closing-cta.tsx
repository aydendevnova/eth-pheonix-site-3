import { KitForm } from "@/components/shared/kit-form"

function ClosingCta() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
        <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          September 25–27, 2026
        </p>
        <h2 className="mt-6 font-heading text-5xl font-bold text-foreground lg:text-[64px] lg:leading-[1.05]">
          Get Early Access
        </h2>
        <div className="mx-auto mt-10 max-w-md">
          <KitForm />
        </div>
      </div>
    </section>
  )
}

export { ClosingCta }
