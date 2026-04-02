# Design OS Validation Report

## Generation Context
- **Design System**: Ember (orange accent, JetBrains Mono headings, Geist body)
- **Style Reference**: Cinematic Alternating (adapted — composition and rhythm, Ember palette/fonts)
- **Page Type**: Landing page
- **Target**: ETH Phoenix — email capture landing page for a 3-day Ethereum/AI/Film festival
- **Generated**: 2026-04-01
- **Hero Variant**: Builder-First ("Build. Screen. Ship.")

## Anti-Slop Checklist

### Typography
- [x] Font families match design system YAML — JetBrains Mono (headings), Geist (body)
- [x] Hero headline >= 72px mobile (`text-7xl`) / 120px desktop (`text-[120px]`)
- [x] Section headings >= 48px mobile (`text-5xl`) / 64px desktop (`text-[64px]`) — Build/Screen/Connect, Why Phoenix, Get Early Access
- [x] No heading in the 24–44px dead zone
- [x] Section labels are 11px, uppercase, `tracking-[0.2em]` (eyebrow pattern throughout)
- [x] Line-height and letter-spacing are intentional — `leading-[0.85]` on hero, `leading-relaxed` on body, `leading-snug` on card headings

### Color
- [x] All colors reference CSS variables, not raw hex — `bg-background`, `text-primary`, `text-muted-foreground`, etc.
- [x] Accent color used sparingly — primary orange appears only in eyebrow labels, buttons, and form CTA
- [x] Color rules follow Ember system — orange accent, neutral grays, clean surface palette
- [x] Sections alternate between 2+ surface treatments — `bg-background` ↔ `bg-muted` ↔ `surface-light` ↔ `bg-card`
- [x] At least one section uses the opposite mode — WhyPhoenix uses `surface-light` (light on dark page)
- [x] No 3+ adjacent sections share the same background color

### Layout
- [x] No 2x2 equal grid of feature cards — persona cards use asymmetric 7+5 / 5+7 staggered grid
- [x] No 3-column equal card grid
- [x] Hero is not the centered-headline + subtitle + CTA pattern — full-bleed image with left-aligned overlay
- [x] No logo ticker immediately after the hero — partner logos appear in WhyPhoenix section (section 6)
- [x] Sections vary in alignment, width, and structure — 6+ distinct layout types
- [x] At least one section breaks the centered full-width pattern — hero is left-aligned, persona cards are staggered, WhyPhoenix is offset 7+5 columns
- [x] Composition follows cinematic alternating style — alternating image-text rows in WhatToExpect, hairline separators

### Imagery
- [x] Page contains: 1 hero image (full-bleed desert landscape), 1 full-bleed photo break (desert panorama), credibility logos (4 partner placeholders)
- [x] All images use PlaceholderImage with aspect ratio and intent
- [x] Hero image covers min-h-[90vh] (>400px); photo break section is min-h-[400px]
- [ ] N/A — No product screenshots (event page, not SaaS)
- [x] Decorative imagery matches style guide — atmospheric desert/landscape photography for Phoenix theme
- [x] Image sizing is container-first — all PlaceholderImages use explicit aspect ratios
- [x] Page has 8 image placeholders total (hero, 3 event photos, photo break, Phoenix skyline, 4 partner logos... well 4 small logos counted as 4)

### Copy
- [x] Every headline is product-specific — "Build. Screen. Ship." is unique to ETH Phoenix's three tracks
- [x] All body copy used verbatim from CONTENT.md
- [x] CTA labels from CONTENT.md — "Get Early Access", "Become a Sponsor"
- [x] Form copy from CONTENT.md — placeholder, success/error messages all verbatim
- [x] Footer copy from CONTENT.md — tagline, copyright, link labels, social links
- [ ] ⚠️ FLAG: "Why Phoenix?" section heading is derived, not from CONTENT.md — functional label, not marketing copy

### Uniformity
- [x] Border-radius varies — `rounded-full` on header CTA pill, `rounded-2xl` on persona cards, `rounded-xl` on images, `rounded-lg` on form inputs/buttons, `rounded-sm` on logo placeholders
- [x] Section padding varies — hero `py-32/py-40`, content sections `py-24/py-32`, footer `py-12/py-16`
- [x] Shadow values: no shadows used (cards separated by border + surface contrast instead — deliberate choice for dark-dominant page)

## Visual Verification Needed

The following items require browser-based visual verification that Claude Code cannot perform:

1. **Viewport test**: Load the page at 1440px, 1024px, 768px, and 375px widths. Verify no horizontal overflow, no text truncation, and layout shifts are intentional. Special attention to hero headline at 120px on narrow desktop viewports.
2. **Color contrast**: Verify that text on colored backgrounds meets WCAG AA. Especially check:
   - `text-muted-foreground` on `bg-muted` and `bg-card` surfaces
   - Text overlay on hero gradient (gradient opacity may need tuning)
   - Light section (`surface-light`) text contrast
   - Primary button text on primary background
3. **Typography rendering**: Verify JetBrains Mono loads correctly for headings and Geist for body. Check that the monospace heading style creates a distinctive technical feel.
4. **Spacing rhythm**: Scroll the full page. Verify the alternating dense (persona cards) / spacious (what-is statement) rhythm is perceptible.
5. **Interactive states**: Hover over nav links, CTA buttons, sponsor link, footer links. Verify transitions feel responsive.
6. **Email form**: Test validation states — empty submit, invalid email, valid email. Verify success/error messages render correctly.
7. **Surface alternation**: Verify the light section (WhyPhoenix) creates a clear contrast moment when scrolling through the dark-dominant page.

## Fixes Applied (Post-Audit)

| # | Severity | File | Issue | Resolution |
|---|----------|------|-------|------------|
| 1 | high | hero.tsx | Hero variant mismatch — Investor-First active, report validates Builder-First | Restored Builder-First variant ("Build. Screen. Ship.") as active |
| 2 | high | hero.tsx | `text-7xl` (72px monospace) overflows on 375px mobile for longer variant text | Added responsive scale: `text-6xl sm:text-7xl lg:text-[120px]` |
| 3 | medium | footer.tsx | Bottom links (Privacy / Partner / Speak) overflow without wrapping on mobile | Added `flex-wrap` + `gap-y-2` to prevent horizontal overflow |
| 4 | medium | header.tsx | CTA button `h-9` (36px) below 44px mobile touch target minimum | Increased to `h-10` (40px) |
| 5 | low | hero.tsx | "Become a Sponsor →" link has no touch padding on mobile | Added `py-2` for accessible tap area |
| 6 | low | footer.tsx | Social + legal links lack touch padding | Added `py-1` + `flex-wrap` to all footer link groups |

## Remaining Flagged Issues

| # | Severity | File | Line | Issue |
|---|----------|------|------|-------|
| 1 | low | src/components/sections/why-phoenix.tsx | 49 | "Why Phoenix?" heading is derived copy, not from CONTENT.md |
| 2 | low | src/components/sections/what-is.tsx | 10 | Statement text at text-xl/text-2xl — large body, not section heading scale — intentional editorial choice |
| 3 | low | src/components/sections/hero.tsx | — | Hero gradient overlay opacity may need visual tuning for real imagery |
| 4 | low | src/components/sections/header.tsx | — | No mobile menu — nav links hidden on mobile, only logo + CTA visible |

Severity levels:
- **high**: Anti-slop rule violation. Must fix before shipping.
- **medium**: Quality concern. Should fix.
- **low**: Suggestion for improvement. Optional.
