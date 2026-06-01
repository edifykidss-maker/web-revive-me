#!/usr/bin/env node
// Post-build: snapshot the published site's SSR HTML into dist/client/index.html
// so `dist/client/` is a fully usable static site (index.html + assets) that
// can be hosted on any static host (Netlify, GitHub Pages, S3, nginx, etc.).
//
// Usage: bun run scripts/prerender-static.mjs [URL]
// Default URL: https://web-revive-me.lovable.app/
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const SITE_URL = process.argv[2] || process.env.STATIC_SITE_URL || "https://web-revive-me.lovable.app/";
const OUT_DIR = resolve(process.cwd(), "dist/client");

if (!existsSync(OUT_DIR)) {
  await mkdir(OUT_DIR, { recursive: true });
}

console.log(`[prerender] fetching ${SITE_URL}`);
const res = await fetch(SITE_URL, {
  headers: { "User-Agent": "Mozilla/5.0 (prerender-static)" },
});
if (!res.ok) {
  console.error(`[prerender] HTTP ${res.status} — cannot snapshot. Make sure the site is published.`);
  process.exit(1);
}
const html = await res.text();
if (html.length < 500) {
  console.error(`[prerender] response too small (${html.length} bytes) — aborting`);
  process.exit(1);
}

await writeFile(`${OUT_DIR}/index.html`, html, "utf8");
await writeFile(`${OUT_DIR}/404.html`, html, "utf8"); // SPA fallback
console.log(`[prerender] wrote ${OUT_DIR}/index.html (${html.length} bytes) and 404.html`);
console.log(`[prerender] dist/client/ is now a complete static site.`);
