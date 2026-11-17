# Girish Balaso Lade — Personal Portfolio & Engineering Showcase

Production-ready, editorial personal developer and product designer portfolio website for **Girish Balaso Lade** (UI/UX Designer, Full-Stack Developer, Founder of LadeStack).

Reconstructed from an editorial design system with high typography discipline, monochrome contrast blocks, signature warm yellow accents, and fluid motion choreography. Built with Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, and Framer Motion 12.

---

## Table of Contents

- [Overview](#overview)
- [Design System & Aesthetics](#design-system--aesthetics)
- [Tech Stack](#tech-stack)
- [Project Architecture & Routes](#project-architecture--routes)
- [Featured Products & Systems](#featured-products--systems)
- [Responsive Engineering](#responsive-engineering)
- [Accessibility & Quality Standards](#accessibility--quality-standards)
- [Local Development & Setup](#local-development--setup)
- [Verification & Automated Audits](#verification--automated-audits)
- [Contributing](#contributing)
- [Author & Contact](#author--contact)
- [License](#license)

---

## Overview

This repository houses the personal portfolio for Girish Balaso Lade, an independent developer and product designer based in Pune, Maharashtra, India. The site highlights browser-first utilities, open-source developer tooling, and technical architectural monographs.

### Core Attributes
- **Visual System**: Crisp high-contrast editorial layouts with Playfair Display serif headings and Plus Jakarta Sans geometric grotesk typography.
- **Accents**: Warm amber accent (`#FFCE00`) for focal buttons, custom SVGs for tactile 3D spheres, and hand-drawn brush squiggle decorations.
- **Responsive Fluidity**: Mathematical `clamp()` expressions scaling headers and footer wordmarks across viewports from 320px to 1920px with zero horizontal layout shift.
- **Zero Template Advertising**: Cleaned of all third-party promotional badges, marketplace links, and template branding.
- **Factually Verified**: Strict adherence to verified credentials, engineering background in Mechanical Engineering, and ethical representation of experimental projects.

---

## Design System & Aesthetics

Tokens are configured in `src/app/globals.css` with Tailwind CSS v4 `@theme` bindings:

### Color Palette
- Canvas Background: `#FFFFFF` (pure white)
- Dark Section Background: `#000000` (monochrome black)
- Neutral Borders & Dividers: `#EAE8E2` (subtle cream-gray hairline)
- Accent Yellow: `#FFCE00` (warm amber action pill)
- Accent Dark Hover: `#E5BA00`
- Text Primary: `#000000`
- Text Muted: `#737373` (neutral gray)
- Inverse Text: `#FFFFFF`

### Typography
- Serif Display: `Playfair Display` (editorial serif headings)
- Sans Grotesk: `Plus Jakarta Sans` (interface typography, labels, body copy)
- Font Variables: `--font-serif` and `--font-sans`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.4.6 (App Router + Turbopack) |
| Runtime & Language | Node.js / React 19.3.0 / TypeScript 5 |
| Styling | Tailwind CSS 4.3.3 (`@tailwindcss/turbopack`) |
| Motion Engine | Framer Motion 14.14.0 |
| Icons | Lucide React 1.73.0 + Inline Accessible SVGs |
| Testing & QA | Playwright 1.65.1 + Axe-Core 4.10.4 |

---

## Project Architecture & Routes

```
src/
├── app/
│   ├── layout.tsx                     # Global shell with sticky header, fonts, and footer
│   ├── globals.css                    # Tailwind v4 theme, font variables, and utility resets
│   ├── page.tsx                       # Home page (Hero, Work preview, Services, Insights, CTA)
│   ├── about/page.tsx                 # About Me (biography, values, philosophy, approach)
│   ├── services/page.tsx              # Services (01 Design, 02 Development, 03 Product & AI)
│   ├── work/page.tsx                  # Work catalog (verified and experimental sections)
│   ├── work/[slug]/page.tsx           # Dynamic project detail pages (9 static targets)
│   ├── insights/page.tsx              # Technical essays and architectural monographs
│   ├── insights/[slug]/page.tsx       # Dynamic insight detail pages (6 static targets)
│   ├── contact/page.tsx               # Contact channels and verified social matrix
│   ├── privacy/page.tsx               # Privacy policy matching editorial layout
│   ├── terms/page.tsx                 # Terms of service matching editorial layout
│   └── not-found.tsx                  # Minimalist 404 page
├── components/
│   ├── home/                          # HomeHero, HomeWorkSection, HomeServicesSection, HomeInsightsSection, HeroMedia
│   ├── services/                      # ServiceCollage
│   ├── about/                         # AboutVisualStrip
│   ├── layout/                        # SiteHeader, SiteFooter
│   └── ui/                            # Button, TagChip, Marquee, StudioAccents, ArtworkCard, ProjectCard, CTASection
├── data/
│   ├── site.ts                        # Site metadata, navigation items, footer columns
│   ├── projects.ts                    # 9 project data models (use cases, stack, status, architecture)
│   ├── services.ts                    # Service offerings, capabilities, and tag chips
│   ├── insights.ts                    # 6 architectural monographs with takeaways and reading time
│   └── about.ts                       # Biography, journey milestones, core values, approach steps
└── lib/
    └── motion.ts                      # Framer Motion variants (fadeUp, heroReveal, stagger, editorialEase)
```

---

## Featured Products & Systems

### Group A: Documented & Public Products
1. **LadeStack**: Developer ecosystem and documentation portal for browser-native software.
2. **GB-Coder**: In-browser web IDE with Monaco editor, terminal emulator, and virtual file management.
3. **LS PDF**: Privacy-first browser PDF utility with 17+ offline tools powered by client-side Web Workers.
4. **MD2PDF**: Markdown documentation and book publishing engine with math typesetting and custom styling.
5. **Bharat Land Converter**: Regional agricultural land measurement converter supporting Guntha, Bigha, Acre, and Hectare.
6. **Swift Resume**: Client-side reactive resume builder with live Markdown preview and export.
7. **LS Image Compressor**: Local browser image compressor with canvas resampling and quality tuning.
8. **GameHub**: Lightweight HTML5 browser games portal.

### Group B: Experimental Tooling
9. **LadeStack Drive**: Experimental file orchestration and client-managed cloud storage interface.

---

## Responsive Engineering

The website is engineered mobile-first and tested against 12 key viewport breakpoints:
- Mobile Small: 320x568 (iPhone SE 1)
- Mobile Standard: 360x640, 375x667, 390x844
- Mobile Large: 412x915, 430x932 (iPhone 15 Pro Max)
- Tablets: 768x1024 (iPad Mini), 820x1180 (iPad Air)
- Tablet Landscape: 1024x768 (iPad Pro landscape)
- Laptops: 1280x800, 1440x900 (MacBook Pro)
- Desktop Monitors: 1920x1080 (FHD Desktop)

### Responsive Rules
- Zero Horizontal Overflow: `scrollWidth === clientWidth` across all routes.
- Fluid Typography: `clamp(3rem, 11vw, 9.5rem)` for hero headlines; `clamp(2.5rem, 13.8vw, 15rem)` for footer wordmark.
- Collapsible Navigation: Full-screen mobile drawer with animated presence, background scroll lock, and ESC key dismissal.

---

## Accessibility & Quality Standards

- **Semantic Hierarchy**: Structured landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Screen Reader Readiness**: SVGs marked with `aria-hidden="true"`; buttons and interactive links have explicit `aria-label` tags.
- **Keyboard Navigation**: Complete tab sequence with high-contrast visible focus rings (`focus-visible:ring-2 focus-visible:ring-black`).
- **Reduced Motion**: Full compliance with `prefers-reduced-motion: reduce`, disabling continuous ticker animations.
- **Zero Emoji Principle**: Clean typography and SVG icons without informal symbols.

---

## Local Development & Setup

### Prerequisites
- Node.js 18.18.0 or higher
- npm 9.0 or higher

### Installation
```bash
git clone https://github.com/girishlade111/girish-lade-portfolio.git
cd girish-lade-portfolio
npm install
```

### Development Server
```bash
npm run dev
```
Starts local server at `http://localhost:3000`.

### Production Build & Static Export
```bash
npm run build
```
Compiles TypeScript, runs Turbopack, and generates all 28 static HTML routes.

### Production Preview
```bash
npm run start
```
Serves the production build locally at `http://localhost:3000`.

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js Core Web Vitals and TypeScript rules.

---

## Verification & Automated Audits

The project includes custom automated Playwright and Axe test scripts:

1. **Responsive Multi-Viewport Audit**:
   ```bash
   node test-responsive.mjs
   ```
   Validates 144 combinations (12 viewports x 12 routes) for document horizontal overflow.

2. **Full Accessibility & Console Audit**:
   ```bash
   node scripts/full_audit.mjs
   ```
   Executes Axe-core evaluation, heading order checks, and console error monitors.

---

## Contributing

Contributions, bug reports, and pull requests are welcome. Please inspect the open GitHub issues before submitting changes:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes with descriptive Conventional Commits (`git commit -m "feat: enhance touch target sizes on mobile"`).
4. Run `npm run lint` and `npm run build` to verify clean compilation.
5. Push to the branch and open a Pull Request.

---

## Author & Contact

**Girish Balaso Lade**
- Role: UI/UX Designer, Full-Stack Developer, Product Builder
- Founder: LadeStack
- Location: Pune, Maharashtra, India
- Email: admin@ladestack.in
- Website: [https://ladestack.in/](https://ladestack.in/)
- GitHub: [https://github.com/girishlade111](https://github.com/girishlade111)
- LinkedIn: [https://www.linkedin.com/in/girish-lade/](https://www.linkedin.com/in/girish-lade/)

---

## License

This project is licensed under the MIT License.
