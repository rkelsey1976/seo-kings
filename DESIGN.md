---
version: alpha
name: "SEO Kings"
description: "Fast website design + local SEO for trades in Bath & BANES. Dark, premium, no-fluff. Coral and teal on deep navy."
colors:
  coral: "#E8715A"
  coralLight: "#F0856E"
  coralDark: "#C95E48"
  teal: "#4A90A4"
  tealLight: "#5EA3B6"
  tealDark: "#3A7A8C"
  navy: "#0B1324"
  navyLighter: "#121C2C"
  cardBg: "#0E1628"
  textPrimary: "#F8FAFC"
  textMuted: "rgba(255,255,255,0.55)"
  textSubtle: "rgba(255,255,255,0.40)"
  border: "rgba(255,255,255,0.06)"
  borderHover: "rgba(232,113,90,0.25)"
  selection: "rgba(232,113,90,0.25)"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.03em"
    lineHeight: 1.1
  h1:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    letterSpacing: "-0.03em"
    lineHeight: 1.1
  h2:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
    lineHeight: 1.2
  h3:
    fontFamily: "Space Grotesq, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
    lineHeight: 1.3
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    color: "{colors.textMuted}"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
    textTransform: "uppercase"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "112px"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "9999px"
animation:
  cardLift: "0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  fadeInUp: "0.7s ease-out forwards"
  magneticPull: "0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275)"
  splitText: "0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
  imageZoom: "0.7s ease-out"
  grainDrift: "0.5s steps(10) infinite"
components:
  buttonPrimary:
    backgroundColor: "{colors.coral}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "12px 28px"
    fontWeight: 600
    hover: "{colors.coralLight}"
  buttonSecondary:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.textPrimary}"
    border: "1px solid rgba(255,255,255,0.12)"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
    fontWeight: 600
    hover: "rgba(255,255,255,0.12)"
  tag:
    textColor: "{colors.coral}"
    backgroundColor: "{colors.coral}15"
    border: "1px solid {colors.coral}25"
    rounded: "{rounded.md}"
    padding: "4px 10px"
    font: "{typography.mono}"
    fontSize: "0.6875rem"
    letterSpacing: "0.14em"
  card:
    backgroundColor: "{colors.cardBg}"
    rounded: "{rounded.xl}"
    border: "1px solid {colors.border}"
    hoverBorder: "1px solid {colors.borderHover}"
    shadow: "0 0 0 1px rgba(255,255,255,0.06)"
    hoverShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 8px 24px rgba(0,0,0,0.25)"
  cardImage:
    overlay: "linear-gradient(180deg, rgba(11,19,36,0.15) 0%, rgba(11,19,36,0.50) 40%, rgba(11,19,36,0.90) 75%, rgba(11,19,36,0.98) 100%)"
    featuredOverlay: "linear-gradient(180deg, rgba(11,19,36,0.20) 0%, rgba(11,19,36,0.55) 35%, rgba(11,19,36,0.88) 65%, rgba(11,19,36,0.98) 100%)"
    vignette: "inset 0 0 120px 40px rgba(11,19,36,0.6)"
    hoverZoom: "scale-105"
  nav:
    backgroundColor: "rgba(11,19,36,0.80)"
    backdropBlur: "16px"
    borderBottom: "1px solid rgba(255,255,255,0.06)"
    height: "64px"
    padding: "0 32px"
  pillCTA:
    backgroundColor: "{colors.coral}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "10px 24px"
    fontWeight: 600
    fontSize: "0.875rem"
    hover: "{colors.coralLight}"
  bento:
    gap: "16px"
    columns: "4"
    featuredHeight: "540px"
    standardHeight: "320px"
  grain:
    opacity: "0.04"
    blendMode: "multiply"
    zIndex: "9999"
    animated: "true"
---

# SEO Kings — Design System

## Overview

SEO Kings is a premium local website design + SEO agency for tradespeople in Bath & North East Somerset. The brand identity is **dark, confident, and no-fluff**. No clip-art. No gradients. No generic stock photos. Every pixel earns its place.

The aesthetic is inspired by the engineering-led design systems of **Stripe, Linear, and Vercel**—deep navy backgrounds, warm coral accents, and sharp typography that feels like it was built by someone who understands code.

## Colors

- **Navy (#0B1324):** The only background. Used everywhere. Zero light-mode support.
- **Coral (#E8715A):** Primary accent. CTAs, tags, stats, emphasis. Warmer and more human than generic red.
- **Teal (#4A90A4):** Secondary accent. Used for proof/results cards, GBP cards, and coverage. Cool, trustworthy.
- **Card Background (#0E1628):** Slightly lighter than navy. Used when you need a surface to sit on top of the main background.
- **Text Muted (rgba(255,255,255,0.55)):** Body copy. Never use pure white for paragraphs—it burns the eye on dark.
- **Text Subtle (rgba(255,255,255,0.40)):** Eyebrows, captions, microcopy.
- **Border (rgba(255,255,255,0.06)):** Hairline dividers. Invisible unless you're looking for them.

### Colour-by-component

| Component | Accent | Rationale |
|-----------|--------|-----------|
| Core service card (Website Design) | Coral | This is the money-maker. Warmth = urgency. |
| Results/Rankings card | Teal | Proof = trust. Cool, analytical. |
| GBP card | Teal | Google = blue brand. Teal extends that trust. |
| Local SEO card | Coral | Upsell = warmth. Matches core service. |
| Coverage/Areas card | Teal | Geography = trust and calm. |

## Typography

**Space Grotesk** for everything. It's slightly off-kilter, engineered, and reads with quiet confidence. Weight 600 for headings. Weight 400 for body. No italics, no serif pairing. The mono accent is **JetBrains Mono**—used only for tags, labels, and microcopy (12px uppercase with wide tracking).

### Scale

| Level | Font Size | Weight | Letter-spacing | Line-height |
|-------|-----------|--------|----------------|-------------|
| Display / Hero H1 | 3rem (48px) | 600 | -0.03em | 1.1 |
| H2 | 2.25rem (36px) | 600 | -0.02em | 1.2 |
| H3 | 1.5rem (24px) | 600 | -0.02em | 1.3 |
| Body | 1rem (16px) | 400 | normal | 1.65 |
| Tag/Mono | 0.6875rem (11px) | 500 | 0.14em | 1.0 |
| Eyebrow | 0.75rem (12px) | 500 | 0.12em | 1.0 |

## Spacing

The site breathes. We use generous section padding (112px vertical) and tight internal spacing (16px gaps in bento grids). Every section is separated by a 1px `rgba(255,255,255,0.06)` hairline. No heavy dividers, no shadow cards floating in voids.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tag padding, icon gaps |
| sm | 8px | Tight element gaps, stat labels |
| md | 16px | Card padding, grid gaps |
| lg | 24px | Section internal spacing |
| xl | 32px | Component breathing room |
| xxl | 48px | Between major blocks |
| section | 112px / 128px | Between page sections |

## Elevation & Depth

No drop shadows on cards on the main dark background—shadows disappear on dark. Instead, depth is communicated through:

1. **1px borders** (`rgba(255,255,255,0.06)`) that go to coral on hover.
2. **Vignettes** on photo cards—soft edges that fade to navy.
3. **Back-blur** on navigation only (`backdrop-blur-xl`). Cards do not blur behind.

Elevation hierarchy:
- Level 0: Page background (navy)
- Level 1: Cards (cardBg + 1px border)
- Level 2: Navigation (fixed + backdrop blur)
- Level 3: Modals / dropdowns (not currently used)

## Shapes

- **Cards:** `rounded-2xl` (16px). Consistent everywhere.
- **Buttons:** `rounded-full` for primary CTAs. `rounded-xl` for secondary/outline.
- **Tags:** `rounded-md` (6px). Small, sharp, utilitarian.
- **Inputs:** `rounded-xl` matching button secondary.

## Components

### Primary Button
Solid coral, white text, `rounded-full`, `px-7 py-3`. Hover: coral-light. Magnetic pull effect on desktop (via MagneticButton component). Used for the single most important action on any page.

### Secondary Button
`bg-white/8`, white text, `border border-white/12`, `rounded-xl`. Hover: `bg-white/12`. Used for "Call" actions that sit beside a primary CTA.

### Tag / Eyebrow
11px JetBrains Mono, uppercase, wide tracking (0.14em), coral or teal text on `accent/15` background with `accent/25` border. `rounded-md`. Used above every section heading to scan the page quickly.

### Service Card (Bento)
Photo background covered by a multi-layer dark gradient overlay. `rounded-2xl`. Content sits at `z-10` with tag at top, stat in middle, heading + body + "View details" link at bottom. Hover: image zooms 105%, bottom glow line appears, "View details" slides up. Wrapped in TiltCard for 3D perspective on hover.

### Navigation
Fixed full-width bar. `h-16`. `bg-navy/80 backdrop-blur-xl`. Left: SEOKings logo. Center: 5 text links (14px). Right: coral "Get Started" pill CTA. Mobile: full-width dropdown.

### CTA Banner
Centered section. `py-24`. Mesh gradient background (subtle teal + coral blobs). Two buttons side by side on desktop, stacked on mobile.

### FAQ Accordion
Left column: questions with `+` expand icons. Right column: testimonial pullquote with stars. Dark card background. Border-bottom separators only.

### Footer
Minimal. 75 lines max. Left: SEOKings logo + tagline + phone + WhatsApp. Right: Facebook, LinkedIn, Instagram icons. Bottom bar: copyright + Privacy + Terms links. No directory columns. No geo-silo links.

## Animation

- **Card lift:** translateY(-2px) + shadow expand. `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Image zoom:** `scale(1.05)`, `0.7s ease-out`, parent overflow hidden.
- **Magnetic buttons:** cursor pull with elastic snapback, `0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275)`
- **Split text entrance:** word-by-word stagger, `0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- **Grain overlay:** static or animated SVG noise, opacity 0.04, multiply blend.
- **Marquee:** linear infinite scroll, pause-on-hover.

All animations respect `prefers-reduced-motion`.

## Do's and Don'ts

### Do
- Use real photography with heavy dark overlays. No white-background stock shots.
- Keep text muted (55% white) for body copy. Only headings hit full white.
- Use Coral for CTAs and core service emphasis. Use Teal for proof/trust elements.
- Stick to Space Grotesk for everything. JetBrains Mono for tags only.
- Use `rounded-2xl` for all cards. `rounded-full` for primary CTAs.
- Keep footers minimal. 3 columns max. Brand + contact + social only.

### Don't
- Add gradient fades between sections. Flat edges or 1px hairlines only.
- Use curved/wavy section dividers. They cheapen the whole page.
- Put clip-art, icons, or illustrations on photo cards. Photo + overlay only.
- Use more than 2 accent colours on any single page.
- Make buttons smaller than 44px touch target.
- Add heavy drop shadows on dark cards. They disappear and look broken.
- Use generic stock photo smiley people. Keep it moody, real, and trades-focused.
