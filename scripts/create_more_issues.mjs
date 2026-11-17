import { execSync } from "child_process";
import fs from "fs";

const moreIssues = [
  {
    title: 'External links using target="_blank" lack screen reader announcement (WCAG 2.4.4 / 3.2.5)',
    category: "WCAG 2.1 AA Accessibility",
    labels: ["accessibility", "wcag-aa"],
    body: `### Description
External links that open in a new browsing context (\`target="_blank"\`) do not notify users of assistive technologies that they will be taken away from the current page.

### Affected Files
- \`src/app/contact/page.tsx\`
- \`src/app/work/[slug]/page.tsx\`
- \`src/components/layout/SiteFooter.tsx\`

### Problem Details
WCAG 3.2.5 (Change on Request) and WCAG 2.4.4 (Link Purpose) advise warning users when a link opens a new tab or window. Without accessible notice, screen reader users can become disoriented when the browser back button fails to return to the original reading location.

### Recommended Fix for Contributors
1. Add an accessible visually hidden notification inside external links:
   \`\`\`tsx
   <span className="sr-only">(opens in a new tab)</span>
   \`\`\`
2. Or supply an explicit \`aria-label\` (e.g. \`aria-label="GitHub profile (opens in a new tab)"\`).
3. Verify with screen reader testing or Axe-core that no link context changes occur unannounced.`
  },
  {
    title: "Framer Motion variants bypass user prefers-reduced-motion OS preference (WCAG 2.3.3)",
    category: "Accessibility & Motion",
    labels: ["accessibility", "performance"],
    body: `### Description
While CSS marquees respect reduced-motion via CSS media queries, Framer Motion JavaScript variants continue animating coordinate transforms when reduced-motion is requested.

### Affected Files
- \`src/lib/motion.ts\`
- Animated home and about page sections

### Problem Details
WCAG 2.3.3 (Animation from Interactions) requires that motion triggered by loading or scrolling can be disabled by users with vestibular disorders.
Currently, \`src/lib/motion.ts\` defines static variants with \`y: 16\` and \`opacity: 0\` transitions that execute unconditionally.

### Recommended Fix for Contributors
1. In components using Framer Motion, consume \`useReducedMotion()\` from \`framer-motion\`.
2. Update \`motion.ts\` variants to provide zero-offset fallbacks when reduced motion is active (\`y: 0\`, \`duration: 0.01\`).`
  },
  {
    title: "Missing canonical URL and theme-color viewport metadata in root layout",
    category: "SEO & Mobile Optimization",
    labels: ["seo", "mobile-ux", "enhancement"],
    body: `### Description
Root layout metadata in \`src/app/layout.tsx\` lacks canonical URL specification and mobile browser chrome tinting.

### Affected Files
- \`src/app/layout.tsx\`

### Problem Details
1. Search engines require a canonical URL (\`alternates.canonical\`) to consolidate ranking signals and avoid duplicate content indexing across different domains or protocols.
2. Mobile Safari and Android Chrome use the \`theme-color\` meta tag to color the browser address bar header matching the page aesthetic.

### Recommended Fix for Contributors
1. In \`src/app/layout.tsx\`, add \`metadataBase: new URL("https://ladestack.in")\`.
2. Add \`alternates: { canonical: "/" }\` to root metadata.
3. Export \`viewport: Viewport = { themeColor: "#FFFFFF" }\` using Next.js 16 Viewport API.`
  },
  {
    title: "ProjectCard missing visual 'Experimental' badge for unverified projects",
    category: "UI Polish & Truth in Advertising",
    labels: ["enhancement"],
    body: `### Description
The portfolio data accurately classifies projects like LadeStack Drive as 'Experimental / Verification Pending', but the card UI on index pages does not display a visual status pill.

### Affected Files
- \`src/components/ui/ProjectCard.tsx\`
- \`src/components/home/HomeWorkSection.tsx\`

### Problem Details
To comply with factual integrity guidelines and user transparency, experimental or unverified exploratory software should be immediately recognizable as experimental before clicking into the case study.

### Recommended Fix for Contributors
1. In \`ProjectCard.tsx\`, inspect \`project.status\`.
2. If status is \`"Experimental / Verification Pending"\`, render a distinct badge pill:
   \`\`\`tsx
   <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-amber-400/40 bg-amber-50 text-amber-900">
     Experimental
   </span>
   \`\`\`
3. Verify visual alignment against desktop and mobile card layouts.`
  },
  {
    title: "Contact page lacks one-click 'Copy Email' clipboard utility",
    category: "UX & Usability",
    labels: ["enhancement"],
    body: `### Description
The Contact page only offers a \`mailto:\` link and system mail client button, which fails silently for users who do not have an active desktop email client installed.

### Affected Files
- \`src/app/contact/page.tsx\`

### Problem Details
Many users manage email via web interfaces (Gmail, Outlook Web) without a configured default OS mail client. Clicking a \`mailto:\` link often triggers an unwanted mail setup wizard or does nothing.

### Recommended Fix for Contributors
1. Add a 'Copy Email Address' button alongside 'Open Mail Client'.
2. Use \`navigator.clipboard.writeText("admin@ladestack.in")\`.
3. Provide reactive feedback on click (e.g. changing button label to 'Copied!' for 2 seconds with an \`aria-live="polite"\` notification).`
  },
  {
    title: "Mobile menu drawer lacks focus trapping and focus restore on close",
    category: "WCAG 2.1 AA Accessibility",
    labels: ["accessibility", "wcag-aa", "mobile-ux"],
    body: `### Description
When the mobile navigation drawer opens, keyboard focus is not trapped inside the drawer and does not restore to the trigger button when dismissed.

### Affected Files
- \`src/components/layout/SiteHeader.tsx\`

### Problem Details
WCAG 2.4.3 (Focus Order) requires modal dialogs and slide-over menus to contain keyboard focus while open.
Currently in \`SiteHeader.tsx\`, a keyboard user tabbing through the mobile drawer can tab right out of the drawer and into hidden page links behind the overlay. When closing with Escape, focus drops to the document body instead of returning to the hamburger menu button.

### Recommended Fix for Contributors
1. Add focus trapping logic to the mobile drawer (or wrap with an accessible dialog primitive).
2. When the drawer mounts, focus the first navigation link.
3. When the drawer unmounts, return focus to the hamburger button ref.`
  }
];

function createMoreIssues() {
  console.log(`Creating ${moreIssues.length} additional GitHub issues in girishlade111/girish-lade-portfolio...\n`);

  for (let i = 0; i < moreIssues.length; i++) {
    const item = moreIssues[i];
    console.log(`[${i + 1}/${moreIssues.length}] Creating issue: "${item.title}"...`);
    
    const labelsArg = item.labels.map(l => `--label "${l}"`).join(" ");
    
    fs.writeFileSync("./temp_more_body.txt", item.body);

    const cmd = `gh issue create --title "${item.title.replace(/"/g, '\\"')}" --body-file "./temp_more_body.txt" ${labelsArg}`;

    try {
      const output = execSync(cmd, { encoding: "utf8" });
      console.log(`  Created: ${output.trim()}`);
    } catch (err) {
      console.error(`  Failed creating issue: ${err.message}`);
    }
    
    if (fs.existsSync("./temp_more_body.txt")) {
      fs.unlinkSync("./temp_more_body.txt");
    }
  }

  console.log("\nAll additional issues processed.");
}

createMoreIssues();
