import { execSync } from "child_process";
import fs from "fs";

const issues = [
  {
    title: "Multiple <h1> headings present across site header, footer, and page content (WCAG 1.3.1)",
    category: "Semantic HTML & Document Outline",
    labels: ["accessibility", "wcag-aa", "heading-order"],
    body: `### Description
During automated accessibility auditing using Axe-core, multiple <h1> elements were identified on every page of the application.

### Affected Files
- src/components/layout/SiteHeader.tsx
- src/components/layout/SiteFooter.tsx
- Page template headers across src/app/

### Problem Details
- WCAG 1.3.1 (Info and Relationships) and HTML5 best practices dictate that each web page should contain exactly one top-level <h1> denoting the primary topic of the page.
- In SiteHeader.tsx, the brand name was wrapped in heading elements, and in SiteFooter.tsx, the large wordmark also rendered heading elements.

### Recommended Fix for Contributors
1. Update SiteHeader.tsx so the brand logo uses <span className="font-extrabold text-base sm:text-lg ..."> instead of an <h1>.
2. Update SiteFooter.tsx so the giant fluid GIRISH LADE wordmark renders as a stylized <div className="font-editorial ..."> or <p> with aria-hidden="true" or semantic text.
3. Verify with node scripts/full_audit.mjs that exactly 1 <h1> is detected per route.`
  },
  {
    title: "Skipped heading levels in Services, Work, and Insights pages (Axe heading-order)",
    category: "Semantic HTML & Document Outline",
    labels: ["accessibility", "heading-order"],
    body: `### Description
The automated Axe-core audit flagged 36 instances of heading level skips across the application.

### Affected Routes
- /services (src/app/services/page.tsx)
- /work/[slug] (src/app/work/[slug]/page.tsx)
- /insights/[slug] (src/app/insights/[slug]/page.tsx)

### Problem Details
Screen readers and assistive devices use heading sequences (h1 -> h2 -> h3 -> h4) to build an outline of the page.
In src/app/services/page.tsx, section titles jump directly from h2 (e.g. DESIGN, DEVELOPMENT) to h4 (e.g. Interface Architecture, Modern Frontend Stacks), skipping h3.

### Recommended Fix for Contributors
1. Replace <h4> with <h3> in capability cards in src/app/services/page.tsx.
2. Replace <h3>ROLE</h3> with semantic labels or ensure it follows an <h2> parent in src/app/work/[slug]/page.tsx.
3. Retain existing Tailwind CSS visual classes (text-xs font-extrabold uppercase) so the visual styling remains intact while accessibility tree hierarchy is restored.`
  },
  {
    title: "Low color contrast on secondary metadata tags and category labels (WCAG 1.4.3)",
    category: "WCAG 2.1 AA Accessibility",
    labels: ["accessibility", "wcag-aa"],
    body: `### Description
Automated color contrast analysis via Axe-core identified 46 elements failing WCAG 2.1 Level AA minimum contrast ratio (4.5:1 for normal body text).

### Affected Files
- src/components/ui/TagChip.tsx
- src/components/home/HomeWorkSection.tsx
- src/components/home/HomeInsightsSection.tsx

### Problem Details
Elements rendered with text-neutral-400 (#a3a3a3) or text-neutral-500 (#737373) against white backgrounds (#ffffff) yield contrast ratios between 2.8:1 and 3.9:1, which is below the required 4.5:1 threshold for non-decorative textual metadata.

### Recommended Fix for Contributors
1. In TagChip.tsx, change text color from text-neutral-500 to text-neutral-700 (#404040, contrast ratio ~7.0:1) for the light variant.
2. In project and insight card subtitles, ensure category text uses text-neutral-700 or text-neutral-800.
3. Re-run node scripts/full_audit.mjs to verify 0 color-contrast violations.`
  },
  {
    title: "Horizontal scrolling visual strip container missing keyboard focusability (WCAG 2.1.1)",
    category: "WCAG 2.1 AA Accessibility",
    labels: ["accessibility", "wcag-aa"],
    body: `### Description
The horizontal visual photo strip on the About page is not accessible to keyboard-only users who cannot use gestures or mouse wheels to scroll.

### Affected Files
- src/components/about/AboutVisualStrip.tsx

### Problem Details
Axe-core rule scrollable-region-focusable failed on /about. Scrollable overflow containers (overflow-x-auto) must be keyboard-focusable so users can scroll horizontally using arrow keys.

### Recommended Fix for Contributors
1. Add tabIndex={0} to the outer scroll container element in src/components/about/AboutVisualStrip.tsx.
2. Add accessibility attributes:
   - role="region"
   - aria-label="Visual showcase photo gallery"
3. Add a subtle focus visible outline: focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none.`
  },
  {
    title: "Touch targets under 32px on mobile viewports in footer and project detail back links (WCAG 2.5.8)",
    category: "Mobile UX & Touch Targets",
    labels: ["mobile-ux", "accessibility"],
    body: `### Description
Playwright mobile audit on 375px viewports flagged 24 interactive targets with dimensions below 32px height.

### Affected Files
- src/components/layout/SiteFooter.tsx
- src/app/work/[slug]/page.tsx
- src/app/insights/[slug]/page.tsx

### Problem Details
WCAG 2.5.8 (Target Size - Minimum) requires interactive targets to have at least a 24x24px clickable area, and Apple/Google guidelines recommend 44x44px.
Text-only links in footer navigation columns and back-links (e.g. Back to Work) currently measure ~16px height, making them difficult to tap accurately on touch devices.

### Recommended Fix for Contributors
1. Add vertical tap area padding on mobile: e.g. py-2 or min-h-[40px] flex items-center to all footer links in SiteFooter.tsx.
2. Ensure back-to-index buttons in detail pages wrap the clickable area in a touch-friendly wrapper (p-2 -m-2).`
  },
  {
    title: "Missing dynamic OpenGraph and Twitter card metadata on detail routes",
    category: "SEO & Metadata",
    labels: ["seo", "enhancement"],
    body: `### Description
Individual project pages (/work/[slug]) and insight articles (/insights/[slug]) lack route-specific social preview metadata.

### Affected Files
- src/app/work/[slug]/page.tsx
- src/app/insights/[slug]/page.tsx

### Problem Details
When sharing specific project links on LinkedIn, X/Twitter, or messaging platforms, the previews fall back to the generic site-wide title instead of highlighting the specific product's name, description, and preview visual.

### Recommended Fix for Contributors
1. Export generateMetadata({ params }) function in src/app/work/[slug]/page.tsx returning:
   - title: [project.name] — Girish Lade
   - description: project.summary
   - openGraph: title, description, url, type 'article'
2. Implement identical pattern in src/app/insights/[slug]/page.tsx using insight.title and insight.summary.`
  },
  {
    title: "Missing automated XML sitemap.ts and robots.ts for search indexing",
    category: "SEO & Metadata",
    labels: ["seo", "enhancement"],
    body: `### Description
The project currently does not supply standard Next.js sitemap.ts and robots.ts generation files.

### Problem Details
Search engine crawlers (Googlebot, Bingbot) cannot automatically discover and index all 28 static routes without an XML sitemap.

### Recommended Fix for Contributors
1. Create src/app/sitemap.ts importing projectsData and insightsData to construct MetadataRoute.Sitemap spanning:
   - Core static routes: /, /about, /services, /work, /insights, /contact, /privacy, /terms
   - 9 project slugs: /work/[slug]
   - 6 insight slugs: /insights/[slug]
2. Create src/app/robots.ts allowing crawling across all routes and pointing to https://ladestack.in/sitemap.xml.`
  },
  {
    title: "Marquee horizontal animation lacks hardware accelerated GPU transform layer",
    category: "Performance & Animation",
    labels: ["performance"],
    body: `### Description
Continuous CSS keyframe animation in Marquee.tsx animates transform: translateX() without explicit GPU compositing hints.

### Affected Files
- src/components/ui/Marquee.tsx

### Problem Details
On lower-power mobile devices or high-refresh displays, unhinted continuous transforms can trigger frequent layout/compositing re-evaluations and increase CPU battery consumption.

### Recommended Fix for Contributors
1. Add will-change-transform class to the moving marquee tracks in src/components/ui/Marquee.tsx.
2. Ensure transforms use 3D compositing (transform: translate3d(0, 0, 0)) for smooth 60/120fps scrolling.`
  },
  {
    title: "Refactor mobile menu state management in SiteHeader for React 19 compliance",
    category: "React 19 Engine & Linting",
    labels: ["react19", "bug"],
    body: `### Description
Calling setState synchronously within a useEffect hook when pathname changes triggers cascading render warnings in React 19.

### Affected Files
- src/components/layout/SiteHeader.tsx

### Problem Details
ESLint rule react-hooks/set-state-in-effect flags useEffect(() => { setMobileMenuOpen(false); }, [pathname]); because setting state directly in an effect causes unnecessary re-renders.

### Recommended Fix for Contributors
1. Close the mobile menu directly on navigation link click handlers (onClick={() => setMobileMenuOpen(false)}).
2. If tracking external route changes, store prevPathname and synchronize state during the render cycle rather than in an asynchronous effect.
3. Verify with npm run lint that 0 errors are produced.`
  }
];

function createAllIssues() {
  console.log(`Creating ${issues.length} individual GitHub issues in girishlade111/girish-lade-portfolio...\n`);

  for (let i = 0; i < issues.length; i++) {
    const item = issues[i];
    console.log(`[${i + 1}/${issues.length}] Creating issue: "${item.title}"...`);
    
    const labelsArg = item.labels.map(l => `--label "${l}"`).join(" ");
    
    fs.writeFileSync("./temp_body.txt", item.body);

    const cmd = `gh issue create --title "${item.title.replace(/"/g, '\\"')}" --body-file "./temp_body.txt" ${labelsArg}`;

    try {
      const output = execSync(cmd, { encoding: "utf8" });
      console.log(`  Created: ${output.trim()}`);
    } catch (err) {
      console.error(`  Failed creating issue: ${err.message}`);
    }
    
    if (fs.existsSync("./temp_body.txt")) {
      fs.unlinkSync("./temp_body.txt");
    }
  }

  console.log("\nAll issues processed.");
}

createAllIssues();
