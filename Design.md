# Fikrat.tech — Design System & Patterns

## Brand Identity

| Property | Value |
|----------|-------|
| **Name** | Fikrat Tech / Fikrat.tech |
| **Tagline** | You Imagine. We Build. — From Spark to Screen |
| **Positioning** | Digital product agency for entrepreneurs and visionaries |
| **Tone** | Aspirational, warm, partnership-focused — "dream-crafters" not just coders |
| **Domain** | https://fikrat.tech |

---

## Color System — Token-First

> **Rule:** All brand colors live exclusively in `src/app/globals.css`. Components consume CSS custom properties via Tailwind utilities or `var(--token)`. No hardcoded hex or generic `purple-*` / `pink-*` classes in active component files.

### Brand Color Tokens (`globals.css :root`)

| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| `--primary` | `#8C3EEE` | `bg-primary`, `text-primary`, `border-primary` | CTAs, brand accent |
| `--accent` | `#A855F7` | `bg-accent`, `text-accent` | Hover/active states, gradient end |
| `--primary-light` | `#DCC5F8` | `text-primary-light`, `border-primary-light` | Soft lavender — headings, borders |
| `--primary-dark` | `#6923C5` | `bg-primary-dark` | Deeper purple for gradient depth |
| `--secondary` | `#77638F` | `text-secondary` | Muted purple — nav links, body secondary |

### Background Tokens

| Token | Value | Tailwind / utility | Usage |
|-------|-------|--------------------|-------|
| `--background` | `#0F0F1A` | `bg-background`, `.bg-theme` | Page background |
| `--background-alt` | `#1A1A2E` | `bg-background-alt`, `.bg-theme-alt` | Alt surface |
| `--background-card` | `#16213E` | `bg-background-card`, `.bg-theme-card` | Card surfaces |
| `--background-nav-scrolled` | `rgba(15, 23, 42, 0.8)` | Inline `var()` on navbar | Scrolled navbar |

### Text Tokens (WCAG AA compliant)

| Token | Hex | Utility class | Usage |
|-------|-----|---------------|-------|
| `--text-primary` | `#E9D8FD` | `.text-theme-primary` | Primary text, headings |
| `--text-secondary` | `#C4B5FD` | `.text-theme-secondary` | Body secondary |
| `--text-muted` | `#9F7AEA` | `.text-theme-muted` | Tertiary / captions |
| `--text-tertiary` | `#9A9A9A` | `.text-theme-tertiary` | Subtle UI |
| `--text-inverse` | `#FFFFFF` | — | CTA button text |

### Border Tokens

| Token | Value | Utility | Usage |
|-------|-------|---------|-------|
| `--border-light` | `rgba(220, 197, 248, 0.1)` | `.border-theme` | Subtle dividers |
| `--border-medium` | `rgba(220, 197, 248, 0.2)` | `.border-theme-medium` | Medium borders |
| `--border-accent` | `rgba(140, 62, 238, 0.3)` | `.border-theme-accent` | Accent borders |

### Gradient Utilities

| Utility class | Maps to | Usage |
|---------------|---------|-------|
| `.bg-gradient-primary` | `var(--gradient-primary)` | CTA buttons, primary fills |
| `.bg-gradient-primary-reverse` | `var(--gradient-primary-reverse)` | Hover sweep on CTAs |
| `.text-gradient` | `var(--gradient-text)` (mauve→lavender) | Brand headings |
| `.text-gradient-accent` | `var(--gradient-primary)` | Highlighted keyword in headings |
| `.bg-section-alt` | `var(--gradient-section)` | Alternating section washes |
| `.bg-grid-pattern` | `var(--background-grid)` | Background grid overlay |
| `.shadow-accent` | `var(--shadow-accent)` | CTA glow boxes |

### Brand Exceptions (intentional non-token colors)

- **WhatsApp** — `var(--whatsapp)` (`#16a34a`) / `var(--whatsapp-hover)` (`#10b981`). Applied via `style={{ background: 'linear-gradient(135deg, var(--whatsapp), var(--whatsapp-hover))' }}`.
- **Instagram** — pink accent (`text-pink-400`, `bg-pink-500/15`) on contact card only.
- **Problem-statement "before" red** — `text-red-400/70` in `problemStatement.jsx` only.

---

## Typography

| Element | Font | Weight | Sizes (responsive) |
|---------|------|--------|---------------------|
| **Body** | Geist Sans | 400–500 | `text-base` → `text-xl` |
| **H1 (Hero)** | Geist Sans | Bold (700) | `text-3xl` → `text-8xl` |
| **H2 (Section)** | Geist Sans | Bold (700) | `text-3xl` → `text-6xl` |
| **H3 (Card)** | Geist Sans | Bold (700) | `text-xl` → `text-2xl` |
| **Badge** | Geist Sans | Medium (500) | `text-sm` |
| **Mono** | Geist Mono | — | Code/technical (available, rarely used) |

---

## Layout & Spacing

### Container

- **Max width:** `max-w-screen-2xl` (sections) or `max-w-5xl` (FAQ, narrow content)
- **Horizontal padding:** `px-4 sm:px-6 lg:px-8 xl:px-12`
- **Section vertical padding:** `py-24`
- **Section header margin:** `mb-20` (or `mb-16` for FAQ)

### Grid Patterns

| Layout | Breakpoints | Usage |
|--------|-------------|-------|
| 1 → 2 → 4 cols | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` | Services, How It Works |
| 1 → 2 → 3 cols | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` | Why Us, Contact |
| 2 → 4 cols | `grid-cols-2 lg:grid-cols-4` | Stats (About) |
| 1 → 3 cols | `md:grid-cols-3` | Values, Expertise |

### Navbar

- Fixed top, `z-50`, height `h-16 md:h-20`
- Scroll threshold: 50px → adds `bg-slate-900/50 backdrop-blur-md border-b`
- Smooth scroll offset: 80px

---

## Component Patterns

### 1. Section Badge (Pill)

Reused at the top of every section:

```
rounded-full
bg-primary/15
backdrop-blur-md
border border-primary-light/30
text-theme-primary text-sm font-medium
px-4 py-1.5
```

- Accent keyword uses `.text-gradient-accent`
- Icon + short label (e.g. "Every Idea Deserves to be Real")

### 2. Glass Card

Primary card style across Services, Why Us, How It Works, FAQ, Contact:

```
bg-primary/5
backdrop-blur-md
rounded-2xl (or rounded-3xl for service cards)
border border-primary-light/15
hover:border-primary-light/35
hover:bg-primary/10
transition-all duration-300
```

**Hover effects:**
- `y: -5` to `-12` lift (Framer Motion)
- Bottom gradient accent line: `.bg-gradient-primary` animates `width: 0 → 100%`
- Title color transitions to `white`

### 3. Primary CTA Button

```
px-8 py-4
rounded-lg
text-white font-semibold
shadow-xl
.bg-gradient-primary
```

**Hover animation (Framer Motion):**
- `scale: 1.05`
- `boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'`
- `.bg-gradient-primary-reverse` overlay slides in from right

### 4. Secondary CTA Button

```
rounded-lg
text-theme-secondary
border-2 border-primary-light/20
hover:bg-primary/10 hover:border-primary-light/40
backdrop-blur
```

### 5. Icon Container

```
relative w-12 h-12 (or w-16 h-16)
bg-primary/10
rounded-xl (or rounded-2xl)
border border-primary-light/25
+ gradient blur glow behind (opacity 20% → 40% on hover)
```

Icons from **Lucide React**. WhatsApp uses an inline SVG glyph (no Lucide substitute).

### 6. FAQ Accordion

- `Plus` / `Minus` toggle with 180° rotation
- `AnimatePresence` for height/opacity expand
- Gradient divider line on open: `from-primary/40 to-transparent`
- One item open at a time (`openIndex` state)

### 7. Background Decorations

Every section includes layered backgrounds:

1. **Grid pattern:** `.bg-grid-pattern` utility (maps to `var(--background-grid)` at `100px` size)
2. **Section wash:** `.bg-section-alt` for alternate-color sections
3. **Hero only:** Animated GIF (desktop) / static PNG (mobile) at 20% opacity

---

## Animation System

**Library:** Framer Motion v12

### Entry Animations (scroll-triggered)

```js
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
```

### Staggered Children

```js
containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1–0.2 } }
}
```

### Hover Micro-interactions

| Element | Effect |
|---------|--------|
| Cards | `y: -5 to -12`, `scale: 1.02–1.03` |
| Buttons | `scale: 1.05`, gradient slide, shadow glow |
| Nav links | `scale: 1.05`, underline width animation |
| Icons | `scale: 1.1`, subtle rotate |
| Social icons | `scale: 1.15`, `y: -5` |

### Hero-specific

- Page-load sequence with staggered delays (0.2s–1.2s)
- Animated underline on "We Build"
- Floating decorative elements (20–30s rotation loops)

---

## Page Structure (Multi-Page App)

```
/ (Home)
  ├── Hero
  ├── Social Proof
  ├── Problem Statement
  ├── Services Preview
  ├── Featured Work (Paradise Game DZ)
  ├── Packages Preview
  ├── Process (How It Works)
  ├── Why Fikrat
  └── Final CTA

/services — Full service breakdown (5 service detail sections)
/work — Work grid
/work/paradise-game-dz — Full case study
/packages — Pricing table + maintenance plans + FAQ
/about — Story, proof, vision, values
/contact — Contact options + FAQ
```

### Global Layout Components

```
layout.js
├── Navbar (fixed, z-50)
├── {children}
├── Footer
├── WhatsAppBtn (fixed bottom-left, green, always visible)
└── BtnToTop (fixed bottom-right, appears after 500px scroll)
```

### Navigation

| Link | Route |
|------|-------|
| Services | `/services` |
| Work | `/work` |
| Packages | `/packages` |
| About | `/about` |
| CTA Button | WhatsApp link (Book a Free Call) |

---

## Imagery & Assets

| Asset | Path | Usage |
|-------|------|-------|
| Logo | `/assets/Fikrat Tech (2).png` | Navbar |
| Favicon | `/assets/4.png` | Browser tab |
| Hero BG (desktop) | `/assets/images/fikrat_background_animated.gif` | Hero background |
| Hero BG (mobile) | `/assets/images/MobileVersion.png` | Hero background |
| Service icons | `/assets/images/*.png` | 3D-style illustrations per service |

Service images: `3d Module.png`, `Coding Idea.png`, `Online Profile.png`, `Web Design.png`

---

## Borders & Shadows

| Token | Value |
|-------|-------|
| `--border-light` | `rgba(220, 197, 248, 0.1)` |
| `--border-medium` | `rgba(220, 197, 248, 0.2)` |
| `--border-accent` | `rgba(140, 62, 238, 0.3)` |
| `--shadow-accent` | `0 20px 40px rgba(140, 62, 238, 0.3)` |

**Border radius scale:** `rounded-lg` (buttons) → `rounded-2xl` (cards) → `rounded-3xl` (service cards, CTA boxes) → `rounded-full` (badges, scroll-to-top)

---

## Theme Architecture

- **Default:** Dark theme (no toggle implemented in UI)
- **Single source of truth:** All brand colors live in `globals.css` `:root` — changing a variable updates the whole site.
- **Light mode override** available via `[data-theme="light"]` (not wired up in UI yet)
- **Tailwind v4** `@theme inline` maps every CSS var to a Tailwind color utility
- **Component rule:** Use token utilities only (`bg-primary/15`, `text-theme-primary`, `.text-gradient-accent`, etc.). No hardcoded hex values or generic `purple-*`/`pink-*` classes in active component files.

### Heading Pattern

Section titles follow a two-part structure:
1. Plain text in `.text-theme-primary`
2. Key word accented with `.text-gradient-accent`

Example: `What We` + `<span className="text-gradient-accent">Offer</span>`

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist Sans, Geist Mono (Google Fonts) |
| Utilities | `clsx`, `tailwind-merge` |

---

## Accessibility & Performance Standards

Referenced in content and FAQ:
- WCAG AA text contrast on purple palette
- Sub-3-second load times
- Core Web Vitals optimization
- `aria-label` on scroll-to-top button
- Semantic HTML (`section`, `blockquote`, `nav`)
- JSON-LD Organization schema in layout

---

## Voice & Copy Patterns

| Pattern | Examples |
|---------|----------|
| **Aspirational verbs** | imagine, build, craft, launch, empower |
| **Partnership language** | co-founder, journey, together, partnership |
| **Ownership emphasis** | you own everything, 100% client ownership |
| **Speed positioning** | startup speed, lightning fast, 1–2 weeks prototype |
| **Emotional hooks** | belief, dreams, sparks, vision |
| **CTA framing** | "Book Your Free Call", "30-min vision session" |

---

## File Organization

```
src/
├── app/
│   ├── layout.js      # Root layout, metadata, JSON-LD
│   ├── page.js          # Home page — section composition
│   └── globals.css      # Design tokens & utilities
├── components/
│   ├── layout/
│   │   ├── navbar.jsx   # Fixed nav + mobile menu
│   │   ├── container.jsx
│   │   └── btnToTop.jsx
│   └── sections/
│       ├── hero.jsx
│       ├── whatWeDo.jsx
│       ├── whyUs.jsx
│       ├── aboutUs.jsx
│       ├── howItWorks.jsx
│       ├── faq.jsx
│       └── ContactUs.jsx
└── lib/
    └── utils.js         # smoothScrollToSection helper
```

Each section is a self-contained client component (`'use client'`) with its own data arrays (services, features, steps, FAQs) co-located in the file.
