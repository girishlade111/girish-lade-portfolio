export interface AboutFocusArea {
  id: string;
  title: string;
  category: string;
  description: string;
  accent: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export const aboutData = {
  heroTitle: "ABOUT ME",
  heroSubtitle:
    "I'm an engineer by education and a software product builder by choice. My background in Mechanical Engineering shaped how I approach problems: identify constraints, understand the system, simplify the process, and iterate until the result becomes dependable.",
  missionLabel: "MISSION",
  missionHeading: "An Engineering Foundation · A Builder's Curiosity",
  missionParagraphs: [
    "My formal education is rooted in Mechanical Engineering, completing my Diploma in Mechanical Engineering at Fabtech Technical Campus in 2021, followed by Mechanical Engineering studies at SVERI's College of Engineering, Pandharpur. That rigorous foundation introduced me to systems thinking, tolerances, trade-offs, and the discipline of solving physical problems within real-world constraints.",
    "Over time, that same problem-solving mindset led me into software engineering, interface design, and product architecture. Rather than treating design and code as separate domains, I connect them: an elegant interface must be backed by dependable engineering, and powerful backend logic deserves intuitive, accessible presentation. Today, through LadeStack, I design and build browser-first tools, developer environments, and privacy-conscious utilities that help builders build without unnecessary friction.",
  ],
  focusAreas: [
    {
      id: "ui-ux",
      title: "UI/UX DESIGN",
      category: "Design Architecture",
      description:
        "Human-centered interface systems, design tokens, interaction flows, responsive structures, and rigorous accessibility standards.",
      accent: "#7E6E8D",
    },
    {
      id: "frontend",
      title: "FRONTEND ENGINEERING",
      category: "Web Engineering",
      description:
        "Production-grade frontend development with React, Next.js, Astro, strict TypeScript, and performance-first CSS.",
      accent: "#556F7A",
    },
    {
      id: "fullstack",
      title: "FULL-STACK DEVELOPMENT",
      category: "Application Engineering",
      description:
        "Connecting scalable interfaces with Node.js runtimes, REST APIs, database schemas, and structured deployment pipelines.",
      accent: "#C4A47C",
    },
    {
      id: "dev-tools",
      title: "DEVELOPER TOOLING",
      category: "Software Tooling",
      description:
        "Building in-browser code studios with Monaco Editor, WebContainer runtimes, and low-friction prototyping environments.",
      accent: "#4A5D4E",
    },
    {
      id: "local-first",
      title: "LOCAL-FIRST WEB APPS",
      category: "Privacy & Architecture",
      description:
        "Architecting client-side document processing, Web Worker pipelines, and IndexedDB persistence that keeps user data on-device.",
      accent: "#8A9EA7",
    },
    {
      id: "ai-workflows",
      title: "AI-ASSISTED WORKFLOWS",
      category: "AI & Automation",
      description:
        "Integrating multi-model LLM APIs with Bring-Your-Own-Key architectures, prompt systems, and structured verification.",
      accent: "#7D8C75",
    },
  ] as AboutFocusArea[],
  coreValues: [
    {
      number: "01",
      title: "UTILITY BEFORE HYPE",
      description:
        "A product should solve a real problem and make its value obvious through use. I prioritize functioning tools over promotional rhetoric.",
    },
    {
      number: "02",
      title: "PRIVACY BY ARCHITECTURE",
      description:
        "Prefer local execution, data minimization, and transparent handling where the problem allows it. User files stay on user devices whenever technically practical.",
    },
    {
      number: "03",
      title: "CLARITY OVER COMPLEXITY",
      description:
        "Complex functionality should still be understandable through clear visual hierarchy, predictable behavior, and accessible controls.",
    },
    {
      number: "04",
      title: "TECHNICAL HONESTY",
      description:
        "Distinguish proposals from shipped features, state constraints openly, and avoid unsupported claims or inflated marketing figures.",
    },
    {
      number: "05",
      title: "ACCESSIBLE BY DEFAULT",
      description:
        "Build important workflows for students, beginners, creators, and independent developers—not only enterprise organizations with large budgets.",
    },
    {
      number: "06",
      title: "ITERATE AND LEARN",
      description:
        "Treat testing, documentation, bugs, and community feedback as natural, essential parts of crafting dependable software.",
    },
  ] as ValueItem[],
  howIBuild: [
    {
      number: "01",
      title: "DEFINE",
      description:
        "Identify the user, the concrete task, existing friction, architectural constraints, and verifiable success criteria.",
    },
    {
      number: "02",
      title: "DESIGN",
      description:
        "Create clear information architecture, interaction flows, responsive component states, and WCAG-compliant visual hierarchy.",
    },
    {
      number: "03",
      title: "BUILD",
      description:
        "Implement the smallest dependable core using technology best suited to the workflow—prioritizing type safety, clean APIs, and local runtimes.",
    },
    {
      number: "04",
      title: "REFINE",
      description:
        "Audit real browser behavior, performance budgets, accessibility gates, privacy boundaries, and deployment details before iterating.",
    },
  ] as ApproachStep[],
};
