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
        background: radial-gradient(circle at 20% 15%, rgba(245, 158, 11, 0.22), transparent 52%),
                    radial-gradient(circle at 85% 80%, rgba(234, 88, 12, 0.14), transparent 50%),
                    #0c0f14;
        color: #f8fafc;
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
        color: #f8fafc;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 15px;
        font-weight: 700;
        background: rgba(245, 158, 11, 0.16);
        border: 1px solid rgba(245, 158, 11, 0.45);
        color: #fde68a;
      }
      h1 {
        font-size: 44px;
        line-height: 1.1;
        letter-spacing: -0.03em;
        font-weight: 800;
        color: #ffffff;
      }
      h1 span {
        color: #f59e0b;
        white-space: nowrap;
      }
      p {
        font-size: 20px;
        line-height: 1.45;
        color: #cbd5e1;
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
        background: #13171d;
        border: 1px solid #26303d;
        color: #e2e8f0;
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
        border: 1px solid rgba(245, 158, 11, 0.35);
        background: #13171d;
        box-shadow: 0 30px 65px rgba(0, 0, 0, 0.65);
        transform: perspective(1200px) rotateY(-5deg);
      }
      .window-bar {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 10px 14px;
        background: #0c0f14;
        border-bottom: 1px solid #232b36;
      }
      .dot { width: 9px; height: 9px; border-radius: 999px; background: #475569; }
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
          <rect width="64" height="64" rx="14" fill="#13171D"/>
          <rect x="2" y="2" width="60" height="60" rx="12" stroke="#F59E0B" stroke-opacity="0.5" stroke-width="2"/>
          <path d="M32 10C35.8 16.5 41 20.8 41 27.2C41 32.3 37 36 32 36C27 36 23 32.3 23 27.2C23 23.4 25.1 20.2 27.6 17.5C27.4 20.2 28.6 21.8 30.2 22.5C29.4 18.2 30.1 13.8 32 10Z" fill="#F59E0B"/>
          <path d="M16 39H48L44.5 45.5C43.9 46.6 42.7 47.3 41.4 47.3H22.6C21.3 47.3 20.1 46.6 19.5 45.5L16 39Z" fill="#F59E0B"/>
          <rect x="21" y="49.5" width="22" height="4.5" rx="2.25" fill="#FDE68A"/>
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
