# Design OS Validation Report

## Generation Context
- **Design System**: Ember
- **Page Type**: landing-page (event email capture)
- **Target**: ETH Phoenix — V1 landing page with email capture form
- **Generated**: 2026-04-01
- **Hero Variant**: BUILDER-FIRST ("Build. Screen. Ship.")
- **Mode**: Dark mode by default

## Anti-Slop Checklist

### Typography
- [x] No banned font families used outside design system spec — JetBrains Mono (heading/mono) + Geist (body) only
- [x] Heading hierarchy is aggressive — h1 is 60px→128px (text-6xl→text-9xl), body is 18-20px. 6-7x ratio.
- [x] Font pairing follows design system — monospace heading + sans-serif body per Ember YAML
- [x] Line-height and letter-spacing set intentionally — leading-[0.95] on h1, tracking-tight on headings, leading-relaxed on body, tracking-widest on eyebrows

### Color
- [x] All color values reference CSS variables from the design system, not raw hex
- [x] No purple-to-blue or indigo gradients
- [x] No gradient text on headings
- [x] No aurora/mesh hero backgrounds
- [x] Color is used sparingly — primary orange on: eyebrow, inline partner names, numbered markers, CTA band bg, buttons

### Layout
- [x] No three-equal-column card grid — bento uses 1×2col + 1×2row + 2×standard
- [x] Hero is not centered-headline-subtitle-CTA pattern — left-aligned statement at viewport bottom
- [x] No logo ticker immediately after hero — WhatIs statement section follows
- [x] Sections vary in alignment, width, and internal structure — 5 distinct layouts
- [x] At least one section breaks the full-width centered pattern — Hero (left-aligned), WhyPhoenix (asymmetric 2/5 + 3/5), WhatToExpect (alternating alignment)

### Imagery
- [x] No glassmorphism cards
- [x] No abstract 3D blobs
- [x] No floating geometric decoration
- [x] No icon-in-circle feature illustrations
- [N/A] PlaceholderImage usage — page is text-driven (event landing, no product UI to screenshot). PlaceholderImage component is scaffolded for future use.

### Copy
- [x] No generic/interchangeable headlines — all copy from CONTENT.md, specific to ETH Phoenix
- [x] Every headline is product-specific — "Build. Screen. Ship." names the three tracks; persona headlines name specific activities
- [x] No placeholder text — all copy sourced from CONTENT.md

### Uniformity
- [x] Border-radius varies between component types — cards rounded-xl, buttons rounded-lg (shadcn default), inputs rounded (shadcn default)
- [x] Section padding varies — Hero (full vh), WhatIs (py-28/36), PersonaCards (py-20/28), WhatToExpect (py-24/32), WhyPhoenix (py-24/32), ClosingCTA (py-20/24)
- [ ] ~~ FLAG: WhatToExpect and WhyPhoenix share identical padding (py-24 lg:py-32)
- [x] Shadow values vary — cards use border + tonal contrast (no shadow), CTA band uses solid bg, header uses backdrop-blur
- [x] Not every section uses the same internal layout — Statement, Bento, Zigzag, Asymmetric Split, CTA Band

## Visual Verification Needed

1. **Viewport test**: Load at 1440px, 1024px, 768px, and 375px. Verify:
   - Hero headline stacks correctly and doesn't overflow on mobile
   - Bento grid collapses to single column on mobile
   - WhatToExpect zigzag stacks vertically on mobile
   - WhyPhoenix 2/5+3/5 stacks on mobile
   - Email forms are usable at all widths (44px+ touch targets)
2. **Color contrast**: Verify WCAG AA on:
   - Primary-foreground text on primary background (CTA band section)
   - Muted-foreground text on dark background
   - Primary (orange) eyebrow text on dark background
   - Input placeholder text contrast in both form placements
3. **Typography rendering**: Verify JetBrains Mono loaded for all headings and Geist for body. Check visual distinction is clear.
4. **Spacing rhythm**: Scroll full page. Verify alternating dense/spacious rhythm is perceptible:
   - Hero (spacious, full vh) → WhatIs (spacious statement) → PersonaCards (dense bento) → WhatToExpect (structured, bg change) → WhyPhoenix (text-dense) → CTA (compact colored band)
5. **Interactive states**: Hover buttons, links, and the header CTA. Verify hover states exist. Test header backdrop-blur on scroll.
6. **Dark mode identity**: Verify page reads as Ember (orange on near-black, monospace headings). Should feel technical and bold, not corporate or playful.

## Flagged Issues Summary

| # | Severity | File | Line | Issue |
|---|----------|------|------|-------|
| 1 | low | sections/what-to-expect.tsx | 47 | Padding py-24/py-32 matches why-phoenix.tsx — consider varying one |
| 2 | low | sections/closing-cta.tsx | 25 | "Phoenix is calling." is original copy not from CONTENT.md — verify with stakeholder |
| 3 | info | — | — | No images on page — correct for text-driven event landing, but consider adding event/venue photography later |

Severity levels:
- **high**: Anti-slop rule violation. Must fix before shipping.
- **medium**: Quality concern. Should fix.
- **low**: Suggestion for improvement. Optional.
- **info**: Not an issue, just a note.
