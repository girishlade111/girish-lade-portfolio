import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outDir = "./audit-screenshots";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { width: 375, height: 812, name: "mobile_375" },
  { width: 768, height: 1024, name: "tablet_768" },
  { width: 1440, height: 900, name: "desktop_1440" },
];

const routes = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/services", name: "services" },
  { path: "/insights", name: "insights" },
  { path: "/work", name: "work" },
  { path: "/work/ladestack", name: "work_detail" },
  { path: "/contact", name: "contact" },
  { path: "/privacy", name: "privacy" },
  { path: "/terms", name: "terms" },
];

async function capture() {
  console.log("Capturing screenshots for visual responsive review...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const r of routes) {
      const url = `http://localhost:3005${r.path}`;
      await page.goto(url, { waitUntil: "networkidle" });
      
      // Scroll down and back to trigger viewport animations
      await page.evaluate(async () => {
        const distance = 400;
        const delay = 100;
        while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
          document.scrollingElement.scrollBy(0, distance);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        await new Promise((resolve) => setTimeout(resolve, 200));
        window.scrollTo(0, 0);
        await new Promise((resolve) => setTimeout(resolve, 200));
      });

      const filename = `${r.name}_${vp.name}.png`;
      const filePath = path.join(outDir, filename);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`Saved ${filename}`);
    }
  }

  await browser.close();
  console.log("Finished capturing all screenshots!");
}

capture();
