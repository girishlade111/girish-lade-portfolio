import fs from "fs";

const results = JSON.parse(fs.readFileSync("./audit-results.json", "utf8"));

console.log("=== AUDIT SUMMARY ===");
console.log(`Console Errors: ${results.consoleErrors.length}`);
console.log(`Console Warnings: ${results.consoleWarnings.length}`);
console.log(`Broken Links: ${results.brokenLinks.length}`);
console.log(`Axe Violations: ${results.axeViolations.length}`);
console.log(`Heading Hierarchy Issues: ${results.headingHierarchyIssues.length}`);
console.log(`Touch Target Issues: ${results.targetSizeIssues.length}`);
console.log(`Empty Interactive Elements: ${results.emptyInteractiveElements.length}`);

if (results.brokenLinks.length > 0) {
  console.log("\n--- BROKEN LINKS ---");
  results.brokenLinks.forEach((b) => console.log(JSON.stringify(b)));
}

if (results.headingHierarchyIssues.length > 0) {
  console.log("\n--- HEADING ISSUES ---");
  results.headingHierarchyIssues.forEach((h) => console.log(`${h.route}: ${h.issues.join(", ")}`));
}

if (results.axeViolations.length > 0) {
  console.log("\n--- AXE VIOLATIONS (Unique IDs) ---");
  const uniqueViolations = {};
  results.axeViolations.forEach((v) => {
    if (!uniqueViolations[v.id]) {
      uniqueViolations[v.id] = {
        id: v.id,
        impact: v.impact,
        description: v.description,
        routes: new Set(),
        nodes: v.nodes.slice(0, 3),
      };
    }
    uniqueViolations[v.id].routes.add(v.route);
  });

  Object.values(uniqueViolations).forEach((u) => {
    console.log(`\n[${u.impact?.toUpperCase()}] ID: ${u.id}`);
    console.log(`Description: ${u.description}`);
    console.log(`Affected Routes: ${Array.from(u.routes).join(", ")}`);
    console.log(`Sample Nodes:`, u.nodes.map(n => n.html));
  });
}

if (results.targetSizeIssues.length > 0) {
  console.log("\n--- TARGET SIZE ISSUES ---");
  results.targetSizeIssues.slice(0, 5).forEach((t) => {
    console.log(`${t.route}:`, t.smallTargets);
  });
}
