# Container Rental Co. — Design Brainstorm

## Three Approaches Considered

### 1. Industrial Brutalist
Raw concrete textures, stencil-cut type, heavy black borders, exposed grid lines. Probability: 0.04

### 2. Clean Professional (CHOSEN)
Crisp editorial layout, strong typographic hierarchy, steel-blue accent palette derived from the container itself, asymmetric two-column sections, confident whitespace. Probability: 0.08

### 3. Warm/Earthy Logistics
Kraft-paper tones, warm amber accents, hand-drawn dividers. Probability: 0.03

---

## Chosen Approach: Clean Professional

**Design Movement:** Editorial industrial — the visual language of precision engineering documentation meets modern B2B web design.

**Core Principles:**
1. Type does the heavy lifting — scale and weight create hierarchy, not color or decoration
2. Asymmetric layouts with deliberate tension — left-anchored headlines, right-side visuals
3. One confident accent color, used sparingly as a signal not a decoration
4. Every element earns its place — no gratuitous shadows, no decorative pills, no bento grids

**Color Philosophy:**
- Background: near-white warm white `#F8F7F4` — not pure white, avoids clinical feel
- Foreground: deep charcoal `#1C1C1E` — not pure black, warmer and more readable
- Accent: steel amber `#D97706` (amber-600) — derived from container lock hardware, warm industrial metal
- Secondary: slate `#475569` — for body copy and labels
- Surface: `#EFEFEC` — subtle off-white for section alternation

**Layout Paradigm:**
- Left-rail navigation on desktop, hamburger on mobile
- Hero: split-screen — left 55% text + form, right 45% container animation
- Sections alternate between full-bleed and contained widths
- Container inventory uses a horizontal scroll rail, not a grid
- No centered-stack layouts anywhere

**Signature Elements:**
1. Thin amber horizontal rule used as a section marker (not a full divider)
2. Large tabular-numerals for specs (container dimensions, weights)
3. Stencil-style container size labels (10FT / 20FT / 40FT) as section anchors

**Interaction Philosophy:**
- Scroll-triggered fade-up entrances (staggered, 60ms apart)
- Nav transitions to opaque white with subtle border on scroll
- Form fields animate their label up on focus
- Container size selector uses a sliding underline, not a pill/badge

**Animation:**
- Entrance: `opacity: 0 → 1` + `translateY(24px → 0)`, 400ms ease-out
- Stagger: 60ms between sibling elements
- Nav: 200ms ease-out on scroll opacity transition
- Hover on CTAs: `scale(1.02)` + amber underline slides in from left
- GIF: plays automatically, loops, sits in a clipped angled frame

**Typography System:**
- Display: `Barlow Condensed` 700 — industrial, tight, authoritative
- Body: `IBM Plex Sans` 400/500 — technical, readable, not generic
- Mono accent: `IBM Plex Mono` — for specs, dimensions, part numbers
- Scale: 72px hero / 48px h2 / 32px h3 / 16px body / 13px label

**Brand Essence:**
Steel-grade reliability for businesses that need space, delivered without friction. Dependable. Precise. No-nonsense.

**Brand Voice:**
Headlines are direct and declarative. CTAs are action-first. No filler.
- Example headline: "The 20-footer that ships Monday."
- Example CTA: "Get a quote in 60 seconds"

**Wordmark & Logo:**
A bold geometric container cross-section mark — a rectangle with a single vertical center line (representing the door seam), set in a square frame. No text in the mark.

**Signature Brand Color:** Amber `#D97706` — the color of a container lock handle, warm industrial metal.
