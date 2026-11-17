export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "design",
    number: "01",
    title: "DESIGN",
    subtitle: "UI/UX · Visual Systems · Interaction Design",
    description:
      "I turn product ideas into clear, human-centered interfaces through hierarchy, interaction design, responsive layouts, and reusable visual systems. Every screen is engineered from design tokens and accessibility standards that survive real production environments.",
    tags: [
      "UI/UX Design",
      "Interaction Design",
      "Responsive Design",
      "Design Systems",
      "Information Architecture",
      "Accessibility",
    ],
    capabilities: [
      {
        name: "Interface Architecture",
        description:
          "Systematic wireframing, layout hierarchy, and user-flow mapping to remove cognitive friction from complex apps.",
      },
      {
        name: "Design Token Systems",
        description:
          "Single-source-of-truth color, typography, elevation, and spacing tokens linking Figma directly to code.",
      },
      {
        name: "Accessible Interaction",
        description:
          "Eight states per interactive element (default, hover, focus, active, disabled, loading, error, selected) compliant with WCAG guidelines.",
      },
    ],
    palette: {
      primary: "#7E6E8D",
      secondary: "#5C6B73",
      accent: "#4A5D4E",
    },
  },
  {
    id: "development",
    number: "02",
    title: "DEVELOPMENT",
    subtitle: "Frontend Architecture · Full-Stack Integration",
    description:
      "I build modern web interfaces and practical applications using React, Next.js, Astro, TypeScript, browser APIs, and full-stack integrations where they are useful. I focus on clean code, predictable state, strong type safety, and fast loading performance.",
    tags: [
      "React",
      "Next.js",
      "Astro",
      "TypeScript",
      "Frontend Engineering",
      "Full-Stack Integration",
      "Browser APIs",
    ],
    capabilities: [
      {
        name: "Modern Frontend Stacks",
        description:
          "Production engineering using Next.js App Router, Astro static islands, React, and strict TypeScript.",
      },
      {
        name: "Browser Runtime & Storage",
        description:
          "Exploiting client-side power with Web Workers, IndexedDB persistence, Monaco Editor, and WebContainers.",
      },
      {
        name: "Micro-Interaction & Motion",
        description:
          "Purposeful motion design using Framer Motion with hardware acceleration, layout animations, and respect for reduced motion.",
      },
    ],
    palette: {
      primary: "#D4D2C9",
      secondary: "#6B7B6E",
      accent: "#B86B53",
    },
  },
  {
    id: "product-ai",
    number: "03",
    title: "PRODUCT & AI",
    subtitle: "Developer Tooling · Local-First Architecture · AI Integrations",
    description:
      "I explore developer tooling, browser-native products, AI-assisted workflows, technical SEO, and product architectures that keep useful functionality understandable and maintainable. I build tools where users retain control of their data and models.",
    tags: [
      "Developer Tools",
      "AI Integrations",
      "BYOK Concepts",
      "Local-First",
      "Technical SEO",
      "Product Prototyping",
      "Automation",
    ],
    capabilities: [
      {
        name: "Browser-First Developer Tools",
        description:
          "Building utilities that operate locally without forced sign-up, cloud lock-in, or unnecessary server uploads.",
      },
      {
        name: "BYOK & Multi-Model Integrations",
        description:
          "Architecting transparent AI workflows that connect directly to user-supplied API keys across OpenAI, Anthropic, and Gemini.",
      },
      {
        name: "Technical SEO & Discoverability",
        description:
          "Structuring crawlable semantic HTML, multilingual hreflang routes, OpenGraph metadata, and high Lighthouse benchmarks.",
      },
    ],
    palette: {
      primary: "#D9B48F",
      secondary: "#4D6353",
      accent: "#C27856",
    },
  },
];
