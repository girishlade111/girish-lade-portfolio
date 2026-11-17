export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const siteConfig = {
  name: "Girish Lade",
  fullName: "Girish Balaso Lade",
  title: "Girish Lade — UI/UX Designer, Full-Stack Developer & LadeStack Founder",
  description:
    "Explore the portfolio of Girish Balaso Lade, a UI/UX designer and full-stack developer creating privacy-conscious developer tools, web apps, and LadeStack products.",
  location: "Pune, Maharashtra, India",
  email: "admin@ladestack.in",
  headline: "UI/UX Designer · Full-Stack Developer · Founder of LadeStack",
  secondaryHeadline: "Engineer by training. Builder by choice.",
  heroEyebrow: "GIRISH LADE / DEVELOPER & PRODUCT DESIGNER",
  heroPositioning: "Building useful software with thoughtful design.",
  heroBio:
    "I'm Girish, a UI/UX designer and full-stack developer building LadeStack — a growing collection of accessible, privacy-conscious developer tools and practical web apps.",
  url: "https://ladestack.in",
  socials: {
    github: "https://github.com/girishlade111",
    linkedin: "https://www.linkedin.com/in/girish-lade/",
    instagram: "https://www.instagram.com/girish_lade_/",
    codepen: "https://codepen.io/Girish-Lade-the-looper",
    brand: "https://ladestack.in/",
  },
  navItems: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ] as NavItem[],
  cta: {
    label: "Let's Talk",
    href: "/contact",
  },
  footerColumns: [
    {
      title: "BROWSE",
      links: [
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
        { label: "Services", href: "/services" },
        { label: "Insights", href: "/insights" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "CONNECT",
      links: [
        { label: "GitHub", href: "https://github.com/girishlade111", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/girish-lade/", external: true },
        { label: "Instagram", href: "https://www.instagram.com/girish_lade_/", external: true },
        { label: "CodePen", href: "https://codepen.io/Girish-Lade-the-looper", external: true },
        { label: "Email", href: "mailto:admin@ladestack.in", external: true },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        { label: "LadeStack", href: "https://ladestack.in/", external: true },
        { label: "GB Coder", href: "https://code.ladestack.in/", external: true },
        { label: "LS PDF", href: "https://pdf.ladestack.in/", external: true },
        { label: "MD2PDF", href: "https://md2pdf.ladestack.in/", external: true },
        { label: "More Projects", href: "/work" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "© 2026 Girish Lade", href: "#" },
      ],
    },
  ] as FooterColumn[],
  technologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Astro",
    "Node.js",
    "Framer Motion",
    "Monaco Editor",
    "WebContainers",
    "IndexedDB",
    "Vite",
    "Tailwind CSS",
    "GitHub",
  ],
};
