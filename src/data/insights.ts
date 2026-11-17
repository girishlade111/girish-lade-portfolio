export interface InsightTopic {
  slug: string;
  title: string;
  category: string;
  graphic: "vase-flowers" | "coral-branch" | "abstract-loop" | "single-bloom" | "botanical-foliage" | "geometric-organic";
  summary: string;
  status: "Exploration Note" | "Technical Monograph" | "Architecture Study";
  keyTakeaways: string[];
  content: string[];
}

export const insightsData: InsightTopic[] = [
  {
    slug: "building-local-first-web-tools",
    title: "BUILDING LOCAL-FIRST WEB TOOLS",
    category: "Architecture",
    graphic: "vase-flowers",
    summary:
      "Why browser-native execution, client-side Web Workers, and IndexedDB offer a dependable alternative to mandatory cloud storage for utility apps.",
    status: "Architecture Study",
    keyTakeaways: [
      "Local-first execution eliminates backend latency and expensive server document handling.",
      "IndexedDB quotas and persistence policies vary by browser; graceful export and backup mechanisms are mandatory.",
      "Offloading file transforms to Web Workers prevents UI thread blocking during heavy tasks.",
    ],
    content: [
      "Modern browsers have evolved from simple document viewers into sophisticated application runtimes. With APIs such as IndexedDB, Web Workers, Canvas, and WebAssembly, many tasks that once required dedicated backend servers can now execute entirely within browser memory.",
      "When building utility apps like PDF manipulation, image resizing, or markdown compilation, client-side processing fundamentally alters the trust relationship with the user. The user does not need to upload private contracts, financial receipts, or personal photos to an external server.",
      "However, local-first architectures demand discipline around state persistence. Browsers may evict site storage under storage pressure, making standard export paths (such as clean ZIP or direct file downloads) essential to ensure user ownership of their data.",
    ],
  },
  {
    slug: "browser-ides-without-heavy-setup",
    title: "BROWSER IDEs WITHOUT HEAVY SETUP",
    category: "Developer Tools",
    graphic: "coral-branch",
    summary:
      "Engineering lightweight development studios using Monaco Editor and WebContainers to minimize setup friction for learners and tinkerers.",
    status: "Exploration Note",
    keyTakeaways: [
      "Monaco Editor provides immediate developer familiarity with autocomplete, diagnostics, and syntax highlighting.",
      "WebContainers bring Node.js runtimes into the browser, enabling realistic dev server experiments.",
      "Browser sandbox security headers (COOP/COEP) must be configured carefully to permit multi-threaded WebAssembly execution.",
    ],
    content: [
      "Getting started with a modern web framework frequently requires installing Node, configuring git, resolving package manager issues, and debugging environment variables. For a beginner or a developer testing a quick concept, this setup barrier introduces needless friction.",
      "By combining Monaco Editor with isolated iframe previews and WebContainer environments, we can provide instant prototyping workspaces that run immediately upon opening a URL.",
      "The engineering challenge centers on resource isolation, gracefully degrading features when browser headers like Cross-Origin-Opener-Policy are absent, and enabling seamless project export for developers who want to transition to desktop editors.",
    ],
  },
  {
    slug: "designing-privacy-conscious-utilities",
    title: "DESIGNING PRIVACY-CONSCIOUS UTILITIES",
    category: "Product Design",
    graphic: "abstract-loop",
    summary:
      "Designing interfaces where privacy is an architectural default rather than a legal disclosure afterthought.",
    status: "Architecture Study",
    keyTakeaways: [
      "Privacy claims must be backed by architectural evidence, not marketing slogans.",
      "Account-free workflows respect user time and minimize attack surface area.",
      "Transparent network activity tabs show users exactly what calls (if any) leave their device.",
    ],
    content: [
      "Too many everyday utilities demand email registration, push notifications, and credit cards for tasks as mundane as merging two PDF pages or resizing an image. Often, the hidden cost is the harvesting of document metadata and user analytics.",
      "Designing privacy-conscious software begins with data minimization: if a feature does not genuinely require a remote database, do not create one. Keep the processing on-device, store settings in localStorage or IndexedDB, and avoid intrusive trackers.",
      "Architectural honesty means never promising 'absolute encryption' without cryptographic audit; instead, clearly explain what runs locally and what external services (if any) are invoked.",
    ],
  },
  {
    slug: "ai-assistance-without-losing-user-control",
    title: "AI ASSISTANCE WITHOUT LOSING USER CONTROL",
    category: "AI Engineering",
    graphic: "single-bloom",
    summary:
      "Implementing Bring-Your-Own-Key (BYOK) patterns and multi-model interfaces that keep users in full control of their credentials and code.",
    status: "Exploration Note",
    keyTakeaways: [
      "BYOK patterns prevent vendor lock-in and keep API spend transparent directly with providers.",
      "AI outputs must be structured, reviewable diffs rather than silent automatic overwrites.",
      "Fallback strategies across OpenAI, Anthropic, and Gemini ensure resilience during provider downtime.",
    ],
    content: [
      "AI coding assistants and generative tools provide remarkable acceleration, but they often lock developers into opaque subscription tiers and proprietary model routing. If a developer already maintains API access to leading models, they should be able to bring their own key.",
      "A developer-centric AI tool should act as an assistant rather than an autonomous black box. Code changes should be presented as clear visual diffs, with interactive confirmation before files are modified.",
      "Balancing client-side API calls with secure key management requires cautious client memory handling, ensuring keys never leak to telemetry or server logs.",
    ],
  },
  {
    slug: "multilingual-product-sites-with-astro",
    title: "MULTILINGUAL PRODUCT SITES WITH ASTRO",
    category: "Web Development",
    graphic: "botanical-foliage",
    summary:
      "Structuring high-performance, statically generated international sites with semantic hreflang routes and zero client-side bloat.",
    status: "Technical Monograph",
    keyTakeaways: [
      "Static site generation yields sub-100ms response times globally without database roundtrips.",
      "Hreflang canonical tagging must be bidirectional and strictly validated to prevent SEO dilution.",
      "Component-level translation keys keep international content maintainable without sprawling code duplication.",
    ],
    content: [
      "Reaching a global audience requires more than automated machine translation; it demands an architectural foundation that delivers localized content with zero performance penalty. Astro's content collections and static islands offer an ideal framework for this.",
      "By generating static HTML for each language locale at build time, the platform delivers near-instant page loads while preserving full semantic markup for search engines.",
      "Careful attention must be given to character encoding, localized date/number formatting, bidirectional language implications, and clean fallback routing when content updates are in progress.",
    ],
  },
  {
    slug: "choosing-what-belongs-in-the-browser",
    title: "CHOOSING WHAT BELONGS IN THE BROWSER",
    category: "Architecture",
    graphic: "geometric-organic",
    summary:
      "A framework for evaluating whether an operation should execute client-side or on dedicated infrastructure.",
    status: "Architecture Study",
    keyTakeaways: [
      "Heavy compute tasks require evaluating device capabilities against server cost curves.",
      "Data sovereignty and regulatory compliance favor on-device processing where feasible.",
      "Hybrid architectures combine client-side UI and preprocessing with lightweight serverless functions.",
    ],
    content: [
      "The boundary between client and server has become fluid. Modern personal devices frequently possess more compute capacity than a shared serverless function, yet they are constrained by battery life, thermal limits, and browser memory quotas.",
      "Deciding where code should run requires analyzing three vectors: data privacy (does the user want this data to leave their machine?), compute cost (who pays for the CPU cycles?), and responsiveness (does network transmission take longer than local calculation?).",
      "For document operations, image processing, and code editing, client-first is increasingly the superior engineering decision.",
    ],
  },
];
