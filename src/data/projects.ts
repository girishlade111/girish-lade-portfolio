export interface UseCase {
  title: string;
  description: string;
}

export type ProjectStatus =
  | "Public / Documented Product"
  | "Experimental / Verification Pending"
  | "Concept / Exploration";

export interface Project {
  slug: string;
  name: string;
  category: string;
  role: string;
  summary: string;
  overview: string;
  status: ProjectStatus;
  website: string;
  repository?: string;
  technologies: string[];
  useCases: UseCase[];
  challenge: string;
  featured: boolean;
  visualTheme: {
    bg: string;
    accent: string;
    aspect: "landscape" | "tall" | "wide";
  };
}

export const projectsData: Project[] = [
  {
    slug: "ladestack",
    name: "LadeStack",
    category: "Brand Platform · Developer Ecosystem",
    role: "Founder, Product Direction, Design, Engineering",
    summary:
      "A developer-friendly home for browser-first utilities, product documentation, and practical software.",
    overview:
      "LadeStack is the central home of my independent developer-tool ecosystem. It brings together browser-first developer utilities, practical productivity applications, product documentation, and technical content with an emphasis on useful workflows and approachable software. Developed using Astro with an international content strategy, it combines discoverability with clear technical principles.",
    status: "Public / Documented Product",
    website: "https://ladestack.in/",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "SEO", "Responsive UI", "Static Rendering"],
    useCases: [
      {
        title: "Find the Right Tool for a Specific Task",
        description:
          "Browse a unified catalog of specialized utilities—code editing, PDF operations, image optimization, or resume building—without jumping across disconnected platforms.",
      },
      {
        title: "Learn How Browser-First Tools Work",
        description:
          "Explore architecture articles and practical documentation explaining client-side storage, local processing limitations, and privacy boundaries.",
      },
      {
        title: "Discover Open Work & Collaborate",
        description:
          "Review active projects, access corresponding open repositories, and communicate with the founder on potential tool improvements.",
      },
    ],
    challenge:
      "Balancing high-performance static rendering and multilingual content routing across 9 language locales while maintaining clean navigation and zero-friction access to individual apps.",
    featured: true,
    visualTheme: {
      bg: "#7E6E8D",
      accent: "#9D8BB0",
      aspect: "landscape",
    },
  },
  {
    slug: "gb-coder",
    name: "GB Coder",
    category: "Developer Tools · Browser IDE",
    role: "Founder and Product Creator",
    summary:
      "A Monaco-based browser IDE for static web prototyping and compatible Node.js/WebContainer workflows.",
    overview:
      "GB Coder is a browser-based development studio for writing, editing, previewing, and experimenting with web applications. It includes lightweight HTML/CSS/JavaScript workflows and a more advanced WebContainer-oriented environment for compatible Node.js development, lowering the barrier to coding without forcing account creation.",
    status: "Public / Documented Product",
    website: "https://code.ladestack.in/",
    repository: "https://github.com/girishlade111/GB-CODER-PUBLIC-ALPHA",
    technologies: [
      "Monaco Editor",
      "TypeScript",
      "WebContainers",
      "HTML5",
      "CSS3",
      "JavaScript",
      "IndexedDB",
      "ZIP Export",
    ],
    useCases: [
      {
        title: "Prototype Interfaces Without Local Setup",
        description:
          "Quickly build and preview HTML/CSS/JavaScript components in real-time without configuring local tooling or dev servers.",
      },
      {
        title: "Experiment With Framework Projects in the Browser",
        description:
          "Run Node.js-compatible package scripts and test modern web setups inside an isolated browser environment.",
      },
      {
        title: "Maintain & Export Portable Learning Projects",
        description:
          "Save working code safely in browser IndexedDB storage and export standard ZIP archives for offline editing or version control.",
      },
    ],
    challenge:
      "Managing browser memory limits, cross-origin isolation requirements for WebContainers, and reliable multi-file IndexedDB persistence across browser sessions.",
    featured: true,
    visualTheme: {
      bg: "#556F7A",
      accent: "#7697A0",
      aspect: "tall",
    },
  },
  {
    slug: "ls-pdf",
    name: "LS PDF",
    category: "Documents · Local-First PDF Suite",
    role: "Product Creator and Maintainer",
    summary:
      "A local-first toolkit for editing, organizing, converting, and processing PDF documents.",
    overview:
      "LS PDF is a browser-oriented PDF utility suite intended to make common document operations approachable while minimizing unnecessary server-side file handling. It provides tools for merging, splitting, compressing, reordering, and extracting pages using modern browser processing libraries.",
    status: "Public / Documented Product",
    website: "https://pdf.ladestack.in/",
    repository: "https://github.com/girishlade111/LS-PDF",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "PDF.js",
      "pdf-lib",
      "JSZip",
      "Web Workers",
      "IndexedDB",
    ],
    useCases: [
      {
        title: "Organize Everyday PDF Documents",
        description:
          "Combine multiple files, delete unneeded pages, rotate orientations, and re-order sections into clean document packages.",
      },
      {
        title: "Prepare Documents for Sharing & Archiving",
        description:
          "Reduce file sizes, extract high-resolution images, convert image collections into PDFs, and extract document text locally.",
      },
      {
        title: "Handle Sensitive Files Locally",
        description:
          "Perform all document parsing, splitting, and rendering on-device without streaming confidential user paperwork to unknown remote servers.",
      },
    ],
    challenge:
      "Executing heavy PDF manipulation and rendering pipelines inside Web Workers to prevent UI freezing while handling large multi-page scans.",
    featured: true,
    visualTheme: {
      bg: "#D9D8CE",
      accent: "#BCBAAF",
      aspect: "wide",
    },
  },
  {
    slug: "md2pdf",
    name: "MD2PDF",
    category: "Documentation · Markdown Publishing",
    role: "Creator and Product Owner",
    summary:
      "Turn Markdown and repository documentation into polished PDFs and organized document books.",
    overview:
      "MD2PDF is a developer-friendly Markdown publishing tool for transforming Markdown and compatible repository documentation into readable PDF documents and organized documentation books. Formerly known as ReadmePDF, it emphasizes GitHub-Flavored Markdown, mathematical typesetting, and structured chapter compilation.",
    status: "Public / Documented Product",
    website: "https://md2pdf.ladestack.in/",
    repository: "https://github.com/girishlade111/ReadmePDF",
    technologies: [
      "Astro",
      "TypeScript",
      "Markdown/GFM",
      "DOMPurify",
      "KaTeX",
      "Syntax Highlighting",
      "pdf-lib",
      "JSZip",
    ],
    useCases: [
      {
        title: "Convert Technical Notes & READMEs Into PDFs",
        description:
          "Render syntax-highlighted code blocks, tables, lists, and KaTeX math formulas into clean, printable deliverables.",
      },
      {
        title: "Assemble Multi-File Documentation Books",
        description:
          "Select repository documentation files, order chapters, auto-generate tables of contents, and export unified books.",
      },
      {
        title: "Create Consistent Academic & Technical Papers",
        description:
          "Draft technical specifications and academic notes with persistent local draft history and custom page break formatting.",
      },
    ],
    challenge:
      "Ensuring clean page-break formatting across complex code blocks and tables while faithfully rendering math formulas through KaTeX in print-media layouts.",
    featured: true,
    visualTheme: {
      bg: "#C4A47C",
      accent: "#E2C39B",
      aspect: "landscape",
    },
  },
  {
    slug: "bharat-land-converter",
    name: "Bharat Land Converter",
    category: "Engineering · Regional Unit Conversion",
    role: "Product Creator",
    summary:
      "Compare standard and regional Indian land-area units through a region-aware conversion interface.",
    overview:
      "Bharat Land Converter is a land-area conversion tool designed around both standard units and regional Indian land-measurement conventions. It handles standard units like square feet, square meters, acres, and hectares alongside regional measures like Guntha, Bigha, Biswa, Kattha, Kanal, Marla, and Ground.",
    status: "Public / Documented Product",
    website: "https://land.ladestack.in/",
    technologies: [
      "React",
      "TypeScript",
      "Client-Side Math",
      "Responsive UI",
      "Tailwind CSS",
    ],
    useCases: [
      {
        title: "Compare Regional & Standard Units",
        description:
          "Translate traditional regional terms into square feet, square meters, or hectares for clear property evaluation.",
      },
      {
        title: "Understand Cross-State Measurement Differences",
        description:
          "Explore regional differences where names like Bigha or Biswa represent different areas in different Indian states.",
      },
      {
        title: "Support Preliminary Planning & Field Calculations",
        description:
          "Provide farmers, civil engineers, and property buyers with a quick, dependable reference for preliminary area estimations.",
      },
    ],
    challenge:
      "Accurately documenting district and state-level conversion variations while maintaining a clear disclaimer that outputs serve preliminary reference rather than official legal surveys.",
    featured: true,
    visualTheme: {
      bg: "#4A5D4E",
      accent: "#6E8773",
      aspect: "landscape",
    },
  },
  {
    slug: "swift-resume",
    name: "Swift Resume",
    category: "Career Productivity · Resume Builder",
    role: "Product Creator",
    summary:
      "Create structured, recruiter-friendly resumes with live preview and PDF export.",
    overview:
      "Swift Resume is a browser-based resume builder created to simplify structured resume creation through responsive form editing, live preview, curated templates, local draft persistence, and PDF-oriented output. It helps job seekers and students present credentials cleanly without complex desktop formatting software.",
    status: "Public / Documented Product",
    website: "https://resume.ladestack.in/",
    repository: "https://github.com/girishlade111/swift-resume-builder",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PDF Generation", "Browser Persistence"],
    useCases: [
      {
        title: "Build a First Professional Resume",
        description:
          "Assemble education, projects, skills, and contact information into standard layouts without formatting headaches.",
      },
      {
        title: "Tailor Resumes for Specific Opportunities",
        description:
          "Quickly revise project descriptions, reorder skills, and inspect immediate visual impact via real-time preview.",
      },
      {
        title: "Export Clean Portable PDFs",
        description:
          "Generate standard A4 documents suitable for email delivery and job applications, keeping personal drafts in local storage.",
      },
    ],
    challenge:
      "Maintaining precise A4 pagination constraints and preventing line overflows while providing flexible input lengths for work histories and project summaries.",
    featured: false,
    visualTheme: {
      bg: "#8A9EA7",
      accent: "#AFC4CD",
      aspect: "landscape",
    },
  },
  {
    slug: "ls-image-compressor",
    name: "LS Image Compressor",
    category: "Media Utility · Web Performance",
    role: "Product Creator",
    summary:
      "Resize, optimize, and convert images through a privacy-conscious browser workflow.",
    overview:
      "LS Image Compressor is a browser-based image optimization tool focused on reducing file size, adjusting dimensions, and converting common image formats through an on-device workflow. It eliminates unnecessary cloud uploads while helping developers and creators optimize web media.",
    status: "Public / Documented Product",
    website: "https://img.ladestack.in/",
    repository: "https://github.com/girishlade111/Image-Compressor",
    technologies: [
      "HTML5 Canvas",
      "Web Workers",
      "JavaScript",
      "Browser Compression APIs",
      "PWA",
    ],
    useCases: [
      {
        title: "Optimize Website Images for Faster Page Loads",
        description:
          "Batch compress photographs and interface assets to WebP or optimized JPEG to improve Core Web Vitals.",
      },
      {
        title: "Prepare Images for Upload Restrictions",
        description:
          "Quickly downscale large camera photos to meet strict portal and email size limits without losing essential visual clarity.",
      },
      {
        title: "Convert & Process Photos On-Device",
        description:
          "Keep confidential images on your local machine rather than uploading personal files to third-party cloud converters.",
      },
    ],
    challenge:
      "Handling large multi-megapixel camera photos smoothly inside browser canvas memory without triggering mobile browser memory terminations.",
    featured: false,
    visualTheme: {
      bg: "#7D8C75",
      accent: "#A2B39A",
      aspect: "landscape",
    },
  },
  {
    slug: "gamehub",
    name: "GameHub",
    category: "Interactive Frontend · Browser Games",
    role: "Project Builder and Developer",
    summary:
      "Browse and play a repository-documented collection of browser games.",
    overview:
      "GameHub is an instant-play browser gaming project built with Next.js, React, and TypeScript. Its repository documents a catalog of 33 interactive mini-games organized across arcade, puzzle, action, and strategy categories, showcasing interactive canvas loops and responsive UI engineering.",
    status: "Public / Documented Product",
    website: "https://games-ladestack.vercel.app/",
    repository: "https://github.com/girishlade111/games-ladestack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Canvas",
      "Dynamic Imports",
    ],
    useCases: [
      {
        title: "Quick-Play Browser Entertainment",
        description:
          "Play classic titles such as 2048, Snake, and Tetris directly in the browser without account setup or installations.",
      },
      {
        title: "Pattern Recognition & Logic Practice",
        description:
          "Engage in quick puzzle, word, and memory exercises with instant feedback and clean responsive controls.",
      },
      {
        title: "Explore Frontend Game Loop Architectures",
        description:
          "Demonstrate dynamic code splitting, canvas rendering loops, and modular React state patterns across 33 distinct game modules.",
      },
    ],
    challenge:
      "Efficiently code-splitting 33 distinct game engines and asset bundles so the primary game portal loads with minimal initial JavaScript payload.",
    featured: false,
    visualTheme: {
      bg: "#6B5B7B",
      accent: "#8E7D9E",
      aspect: "landscape",
    },
  },
  {
    slug: "ladestack-drive",
    name: "LadeStack Drive",
    category: "File Management · Storage Explorations",
    role: "Project Exploration",
    summary:
      "A file-management exploration associated with browser-based storage and sharing workflows.",
    overview:
      "LadeStack Drive is a user-listed project within my broader exploration of digital file organization, storage, and sharing. Specific deployed capabilities, authentication models, and synchronization architectures are currently under active technical review and classified as experimental.",
    status: "Experimental / Verification Pending",
    website: "https://drive.ladestack.in/",
    technologies: ["Next.js", "TypeScript", "Storage APIs", "Authentication Concepts"],
    useCases: [
      {
        title: "Organize Project & Personal Files (Proposed)",
        description:
          "Explore structured file browsing and categorization patterns for working developer documents and exported assets.",
      },
      {
        title: "Access Files Across Workflows (Proposed)",
        description:
          "Investigate synchronization patterns that bridge browser-local caches with optional remote backup.",
      },
      {
        title: "Share Assets With Granular Links (Proposed)",
        description:
          "Test temporary scoped sharing links for project collaboration without heavy third-party attachments.",
      },
    ],
    challenge:
      "Verifying security boundaries, zero-knowledge encryption patterns, and storage quota economics before committing to a public production launch.",
    featured: false,
    visualTheme: {
      bg: "#5C6B73",
      accent: "#7C8D95",
      aspect: "landscape",
    },
  },
];
