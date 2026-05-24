const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const requiredChecks = [
  { label: "title", test: /<title>Current Time<\/title>/i },
  { label: "heading", test: /<h1[^>]*>Current Time<\/h1>/i },
  { label: "clock target", test: /id="time"/i },
  { label: "date target", test: /id="date"/i },
  { label: "pig container", test: /class="pig pig-corner"/i },
  { label: "pig head", test: /class="pig-head"/i },
  { label: "pig snout", test: /class="snout"/i },
];

const missing = requiredChecks.filter((entry) => !entry.test.test(html));

if (missing.length > 0) {
  console.error(
    `Missing required page elements: ${missing.map((entry) => entry.label).join(", ")}`
  );
  process.exit(1);
}

console.log("Static checks passed.");
