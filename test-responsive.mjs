import { chromium } from "playwright";

const viewports = [
  { width: 320, height: 568, name: "320px (iPhone SE 1)" },
  { width: 360, height: 640, name: "360px (Galaxy S8)" },
  { width: 375, height: 667, name: "375px (iPhone SE 2/8)" },
  { width: 390, height: 844, name: "390px (iPhone 12/13/14)" },
  { width: 412, height: 915, name: "412px (Pixel 7)" },
  { width: 430, height: 932, name: "430px (iPhone 14/15 Pro Max)" },
  { width: 768, height: 1024, name: "768px (iPad Mini)" },
  { width: 820, height: 1180, name: "820px (iPad Air)" },
  { width: 1024, height: 768, name: "1024px (iPad Pro landscape)" },
  { width: 1280, height: 800, name: "1280px (Standard Desktop)" },
  { width: 1440, height: 900, name: "1440px (MacBook Pro)" },
  { width: 1920, height: 1080, name: "1920px (FHD Desktop)" },
];

const routes = [
  "/",
  "/about",
  "/work",
  "/work/ladestack",
  "/work/gb-coder",
  "/services",
  "/insights",
  "/insights/building-local-first-web-tools",
  "/contact",
  "/privacy",
  "/terms",
  "/_not-found",
];

async function runAudit() {
  console.log("Starting responsive audit across viewports and routes...\n");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let hasErrors = false;
  const issues = [];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const route of routes) {
      const url = `http://localhost:3005${route}`;
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
        
        // Measure horizontal overflow
        const overflowData = await page.evaluate(() => {
          const docWidth = document.documentElement.clientWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          const bodyWidth = document.body.scrollWidth;
          const windowWidth = window.innerWidth;
          
          // Find any elements exceeding docWidth
          const overflowingElements = [];
          const allElements = document.querySelectorAll("*");
          for (const el of allElements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth + 1) {
              overflowingElements.push({
                tag: el.tagName.toLowerCase(),
                id: el.id,
                className: typeof el.className === "string" ? el.className.slice(0, 80) : "",
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              });
            }
          }

          return {
            docWidth,
            scrollWidth,
            bodyWidth,
            windowWidth,
            hasOverflow: scrollWidth > docWidth + 1,
            overflowingElements: overflowingElements.slice(0, 5),
          };
        });

        if (overflowData.hasOverflow) {
          hasErrors = true;
          const msg = `[OVERFLOW] ${vp.name} on ${route}: docWidth=${overflowData.docWidth}, scrollWidth=${overflowData.scrollWidth}`;
          console.error(msg);
          console.error("  Top overflowing elements:", JSON.stringify(overflowData.overflowingElements));
          issues.push({ vp: vp.name, route, ...overflowData });
        }
      } catch (err) {
        console.error(`[ERROR] loading ${url} at ${vp.name}:`, err.message);
      }
    }
  }

  await browser.close();

  if (!hasErrors) {
    console.log("\n>>> ALL VIEWPORTS AND ROUTES PASSED WITH ZERO HORIZONTAL OVERFLOW! <<<");
  } else {
    console.log(`\nFound ${issues.length} overflow issues across the matrix.`);
  }
}

runAudit();
