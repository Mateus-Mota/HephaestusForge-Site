import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/screenshots');
const APP_URL = process.env.APP_URL || 'http://localhost:5173';

fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  // Pré-configura o workspace demo para abrir limpo diretamente na Oficina de Estúdios
  await page.addInitScript(() => {
    window.localStorage.setItem('hf_workspace_path', 'templates/forge-pong');
    window.localStorage.setItem('hf_active_module', 'studios');
    window.localStorage.setItem('hf_apprentice_tour_done', 'true');
  });

  console.log(`Abrindo ${APP_URL} ...`);
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Fecha Menu Principal caso esteja sobreposto (clicando em Continuar ou Escape)
  const continueBtn = page.getByRole('button', { name: /continuar/i }).first();
  if (await continueBtn.isVisible().catch(() => false)) {
    await continueBtn.click().catch(() => {});
    await page.waitForTimeout(500);
  }

  // Fecha qualquer modal ou tour residual com Escape
  await page.keyboard.press('Escape').catch(() => {});
  await page.waitForTimeout(400);

  // Clica especificamente no botão Estúdios na barra lateral esquerda (role="navigation" / aside)
  const studiosNavBtn = page.locator('aside button:has-text("Estúdios"), nav button:has-text("Estúdios")').first();
  if (await studiosNavBtn.isVisible().catch(() => false)) {
    await studiosNavBtn.click().catch(() => {});
    await page.waitForTimeout(600);
  }

  // Garante que a Paleta de Comandos não esteja aberta
  const escBtn = page.locator('button:has-text("ESC")').first();
  if (await escBtn.isVisible().catch(() => false)) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  }

  const outPath = path.join(OUT_DIR, 'studios-workbench.png');
  await page.screenshot({ path: outPath, fullPage: false });
  console.log(`Screenshot salva em: ${outPath}`);

  await browser.close();
}

run().catch((err) => {
  console.error('Erro ao capturar screenshots:', err);
  process.exit(1);
});
