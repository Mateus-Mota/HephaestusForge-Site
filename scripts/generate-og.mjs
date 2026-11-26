import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SCREENSHOT_PATH = path.join(ROOT, 'public', 'screenshots', 'studios-workbench.png');
const OUT_PATH = path.join(ROOT, 'public', 'og-image.png');

const screenshotDataUri = fs.existsSync(SCREENSHOT_PATH)
  ? `data:image/png;base64,${fs.readFileSync(SCREENSHOT_PATH).toString('base64')}`
  : '';

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: 1200px;
        height: 630px;
        background: radial-gradient(circle at 20% 15%, rgba(255, 122, 26, 0.22), transparent 52%),
                    radial-gradient(circle at 85% 80%, rgba(224, 69, 15, 0.16), transparent 50%),
                    #0f0d0c;
        color: #efe5d8;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 56px 60px;
        gap: 44px;
        overflow: hidden;
      }
      .left {
        width: 520px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .brand-name {
        font-size: 26px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: #efe5d8;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 15px;
        font-weight: 700;
        background: rgba(255, 122, 26, 0.16);
        border: 1px solid rgba(255, 122, 26, 0.5);
        color: #ffb25c;
      }
      h1 {
        font-size: 44px;
        line-height: 1.1;
        letter-spacing: -0.03em;
        font-weight: 800;
        color: #efe5d8;
      }
      h1 span {
        color: #ff7a1a;
        white-space: nowrap;
      }
      p {
        font-size: 20px;
        line-height: 1.45;
        color: #c9b9a6;
      }
      .pills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 4px;
      }
      .pill {
        padding: 7px 13px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        background: #201a15;
        border: 1px solid #33291f;
        color: #efe5d8;
      }
      .right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .window {
        width: 560px;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(255, 122, 26, 0.4);
        background: #17130f;
        box-shadow: 0 30px 65px rgba(0, 0, 0, 0.7);
        transform: perspective(1200px) rotateY(-5deg);
      }
      .window-bar {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 10px 14px;
        background: #120f0d;
        border-bottom: 1px solid #33291f;
      }
      .dot { width: 9px; height: 9px; border-radius: 999px; background: #4a3c2e; }
      .window img {
        display: block;
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <div class="left">
      <div class="brand">
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <defs>
            <radialGradient id="ogHeat" cx="50%" cy="85%" r="75%"><stop offset="0" stop-color="#FFF1D0"/><stop offset="0.35" stop-color="#FFB25C"/><stop offset="0.7" stop-color="#FF7A1A"/><stop offset="1" stop-color="#C2560C"/></radialGradient>
            <linearGradient id="ogFlame" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB25C"/><stop offset="1" stop-color="#FF7A1A"/></linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="#0F0D0C"/>
          <path d="M10 27h34c5 0 10 3 10 7H40l-3 6h4v8H23v-8h4l-3-6h-8c-4 0-7-3-6-7z" fill="url(#ogHeat)"/>
          <path d="M31 8c3 5 8 7.5 8 13a6.5 6.5 0 0 1-13 0c0-4 3.5-6.5 5-13z" fill="url(#ogFlame)"/>
          <path d="M31.5 13.5c1.5 3 4 4.5 4 7.5a3.5 3.5 0 0 1-7 0c0-2.2 2-3.8 3-7.5z" fill="#FFF1D0"/>
        </svg>
        <span class="brand-name">HephaestusForge</span>
      </div>
      <div class="badge">v0.3.0 • Windows x64 • Tauri v2 + Rust</div>
      <h1>File-over-App Workbench for <span>Godot 4</span></h1>
      <p>Live GDD, Kanban, Knowledge Graph, 37 built-in studios, and one-click Play (F5) — zero lock-in.</p>
      <div class="pills">
        <span class="pill">37 Studios</span>
        <span class="pill">~10 MiB Native</span>
        <span class="pill">Kenney CC0 Ready</span>
        <span class="pill">EN & PT-BR Wiki</span>
      </div>
    </div>
    <div class="right">
      <div class="window">
        <div class="window-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        </div>
        ${screenshotDataUri ? `<img src="${screenshotDataUri}" alt="Studios Workbench" />` : ''}
      </div>
    </div>
  </body>
</html>`;

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html, { waitUntil: 'load' });
  await page.screenshot({ path: OUT_PATH, type: 'png' });
  await browser.close();
  console.log(`OG image generated at ${OUT_PATH}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
