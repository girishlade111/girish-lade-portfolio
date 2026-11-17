import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const axeSource = fs.readFileSync(
  path.resolve("./node_modules/axe-core/axe.min.js"),
  "utf8"
);

const routes = [
  "/",
  "/about",
  "/services",
  "/work",
  "/work/ladestack",
  "/work/gb-coder",
  "/work/docx-tract",
  "/work/quick-resume",
  "/work/notemark",
  "/work/landcalc",
  "/work/imageforge",
  "/work/ladestack-drive",
  "/work/girish-lade-portfolio",
  "/insights",
  "/insights/building-local-first-web-tools",
  "/insights/browser-ides-without-heavy-setup",
  "/insights/modern-product-engineering-workflow",
  "/insights/designing-developer-interfaces",
  "/insights/responsive-systems-without-breakage",
  "/insights/privacy-architecture-for-web-utilities",
  "/contact",
  "/privacy",
  "/terms",
  "/_not-found"
];

const viewports = [
  { name: "Desktop (1440px)", width: 1440, height: 900 },
  { name: "Mobile (375px)", width: 375, height: 667 },
];

async function runAudit() {
  const browser = await chromium.launch({ headless: true });
  const results = {
    consoleErrors: [],
    consoleWarnings: [],
    brokenLinks: [],
    axeViolations: [],
    headingHierarchyIssues: [],
    targetSizeIssues: [],
    emptyInteractiveElements: [],
  };

  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen to console
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      results.consoleErrors.push({ text: msg.text(), location: msg.location() });
    } else if (msg.type() === "warning") {
      results.consoleWarnings.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on("pageerror", (err) => {
    results.consoleErrors.push({ text: err.message, stack: err.stack });
  });

  const discoveredLinks = new Set();

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const route of routes) {
      const url = `http://localhost:3005${route}`;
      try {
        const response = await page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
        if (!response || response.status() >= 400) {
          if (route !== "/_not-found") {
            results.brokenLinks.push({ url, status: response ? response.status() : "no-response" });
          }
        }

        // Collect all internal links
        const hrefs = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll("a[href]"));
          return links.map((a) => a.getAttribute("href")).filter(Boolean);
        });
        hrefs.forEach((h) => {
          if (h.startsWith("/")) discoveredLinks.add(h);
        });

        // Run Axe accessibility audit
        await page.evaluate(axeSource);
        const axeResults = await page.evaluate(async () => {
          // @ts-ignore
          return await window.axe.run(document, {
            runOnly: {
              type: "tag",
              values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
            },
          });
        });

        if (axeResults.violations.length > 0) {
          for (const v of axeResults.violations) {
            results.axeViolations.push({
              route,
              viewport: vp.name,
              id: v.id,
              impact: v.impact,
              description: v.description,
              help: v.help,
              helpUrl: v.helpUrl,
              nodes: v.nodes.map((n) => ({
                html: n.html.slice(0, 120),
                target: n.target,
                failureSummary: n.failureSummary,
              })),
            });
          }
        }

        // Check Heading Hierarchy
        const headingIssues = await page.evaluate(() => {
          const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
          const issues = [];
          const h1Count = document.querySelectorAll("h1").length;
          if (h1Count === 0) issues.push("Missing h1 heading");
          if (h1Count > 1) issues.push(`Multiple (${h1Count}) h1 headings found`);

          let lastLevel = 0;
          for (const h of headings) {
            const level = parseInt(h.tagName[1], 10);
            if (lastLevel > 0 && level > lastLevel + 1) {
              issues.push(`Skipped heading level from h${lastLevel} directly to h${level} (${h.textContent?.trim().slice(0, 30)})`);
            }
            lastLevel = level;
          }
          return issues;
        });

        if (headingIssues.length > 0) {
          results.headingHierarchyIssues.push({ route, issues: headingIssues });
        }

        // Check empty interactive elements
        const emptyInteractives = await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll("button, a"));
          const empty = [];
          for (const el of buttons) {
            const text = el.textContent?.trim();
            const ariaLabel = el.getAttribute("aria-label");
            const ariaLabelledby = el.getAttribute("aria-labelledby");
            const title = el.getAttribute("title");
            if (!text && !ariaLabel && !ariaLabelledby && !title) {
              empty.push({
                tag: el.tagName.toLowerCase(),
                html: el.outerHTML.slice(0, 100),
              });
            }
          }
          return empty;
        });

        if (emptyInteractives.length > 0) {
          results.emptyInteractiveElements.push({ route, elements: emptyInteractives });
        }

        // Check Touch Target size on Mobile
        if (vp.width <= 430) {
          const smallTargets = await page.evaluate(() => {
            const interactives = Array.from(document.querySelectorAll("button, a, input, select, textarea"));
            const small = [];
            for (const el of interactives) {
              const rect = el.getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0) {
                if (rect.width < 32 || rect.height < 32) {
                  small.push({
                    tag: el.tagName.toLowerCase(),
                    text: el.textContent?.trim().slice(0, 30),
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                    html: el.outerHTML.slice(0, 80),
                  });
                }
              }
            }
            return small.slice(0, 5);
          });
          if (smallTargets.length > 0) {
            results.targetSizeIssues.push({ route, smallTargets });
          }
        }

      } catch (e) {
        results.consoleErrors.push({ text: `Failed auditing ${url}: ${e.message}` });
      }
    }
  }

  // Test all discovered links
  for (const link of discoveredLinks) {
    if (link.startsWith("#")) continue;
    try {
      const resp = await page.goto(`http://localhost:3005${link}`, { timeout: 5000 });
      if (!resp || resp.status() >= 400) {
        results.brokenLinks.push({ link, status: resp ? resp.status() : "no-response" });
      }
    } catch (e) {
      results.brokenLinks.push({ link, error: e.message });
    }
  }

  await browser.close();

  fs.writeFileSync("./audit-results.json", JSON.stringify(results, null, 2));
  console.log("Audit completed. Results saved to audit-results.json");
}

runAudit();
