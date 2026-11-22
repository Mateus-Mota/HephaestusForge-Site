#!/usr/bin/env node
/**
 * Automates updating HephaestusForge-Site for a new desktop release.
 *
 * Usage:
 *   npm run release:bump -- 0.4.0
 *   npm run release:bump -- 0.4.0 --dry-run
 *   npm run release:bump -- 0.4.0 --app-dir "C:\path\to\HephaestusForge"
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const REPO_SLUG = 'Mateus-Mota/HephaestusForge-Site';

function parseArgs(argv) {
  const args = { version: null, appDir: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--dry-run') {
      args.dryRun = true;
    } else if (token === '--app-dir' && argv[i + 1]) {
      args.appDir = argv[++i];
    } else if (!token.startsWith('-') && !args.version) {
      args.version = token.replace(/^v/i, '');
    }
  }
  return args;
}

function findInstaller(appDir, filename, bundleSubdir) {
  const candidates = [
    path.join(appDir, filename),
    path.join(appDir, 'src-tauri', 'target', 'release', 'bundle', bundleSubdir, filename),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function inspectFile(filePath) {
  const buf = fs.readFileSync(filePath);
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  const mib = buf.length / (1024 * 1024);
  const sizeEn = `${mib.toFixed(2)} MiB`;
  const sizePt = `${mib.toFixed(2).replace('.', ',')} MiB`;
  return { sha256, bytes: buf.length, sizeEn, sizePt };
}

function formatMonthYear(date = new Date()) {
  const en = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
  const ptRaw = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(date);
  const pt = ptRaw.charAt(0).toUpperCase() + ptRaw.slice(1).replace(' de ', ' ');
  return { en, pt };
}

function replaceVersionInFile(relPath, oldVersion, newVersion, dryRun) {
  const fullPath = path.join(SITE_ROOT, relPath);
  if (!fs.existsSync(fullPath)) return false;
  const original = fs.readFileSync(fullPath, 'utf8');
  const updated = original.replaceAll(`v${oldVersion}`, `v${newVersion}`);
  if (updated === original) return false;
  if (!dryRun) fs.writeFileSync(fullPath, updated, 'utf8');
  return true;
}

function main() {
  const { version, appDir: appDirArg, dryRun } = parseArgs(process.argv.slice(2));

  if (!version || !/^\d+\.\d+\.\d+([-.][0-9A-Za-z.]+)?$/.test(version)) {
    console.error('Usage: npm run release:bump -- <semver> [--dry-run] [--app-dir <path>]');
    console.error('Example: npm run release:bump -- 0.4.0');
    process.exit(1);
  }

  const appDir = path.resolve(
    appDirArg || process.env.HEPHAESTUS_APP_DIR || path.join(SITE_ROOT, '..', 'HephaestusForge')
  );

  const nsisFilename = `HephaestusForge_${version}_x64-setup.exe`;
  const msiFilename = `HephaestusForge_${version}_x64_en-US.msi`;

  const nsisPath = findInstaller(appDir, nsisFilename, 'nsis');
  const msiPath = findInstaller(appDir, msiFilename, 'msi');

  if (!nsisPath || !msiPath) {
    console.error(`Could not find installers for v${version} inside: ${appDir}`);
    if (!nsisPath) console.error(`  Missing: ${nsisFilename}`);
    if (!msiPath) console.error(`  Missing: ${msiFilename}`);
    process.exit(1);
  }

  const nsis = inspectFile(nsisPath);
  const msi = inspectFile(msiPath);
  const { en: dateEn, pt: datePt } = formatMonthYear();

  const tag = `v${version}`;
  const baseDownloadUrl = `https://github.com/${REPO_SLUG}/releases/download/${tag}`;
  const nsisUrl = `${baseDownloadUrl}/${nsisFilename}`;
  const msiUrl = `${baseDownloadUrl}/${msiFilename}`;

  // Detect current version from src/data/release.ts
  const releaseTsPath = path.join(SITE_ROOT, 'src', 'data', 'release.ts');
  const currentReleaseTs = fs.readFileSync(releaseTsPath, 'utf8');
  const oldVersionMatch = currentReleaseTs.match(/versionNumber:\s*'([^']+)'/);
  const oldVersion = oldVersionMatch ? oldVersionMatch[1] : version;

  console.log(`\n=== HephaestusForge Release Bump: v${oldVersion} -> ${tag} ${dryRun ? '(DRY RUN)' : ''} ===`);
  console.log(`  NSIS: ${nsisFilename} (${nsis.sizeEn})`);
  console.log(`        SHA-256: ${nsis.sha256}`);
  console.log(`  MSI : ${msiFilename} (${msi.sizeEn})`);
  console.log(`        SHA-256: ${msi.sha256}\n`);

  const newReleaseTs = `export const RELEASE = {
  version: '${tag}',
  versionNumber: '${version}',
  dateEn: '${dateEn}',
  datePt: '${datePt}',
  repoUrl: 'https://github.com/${REPO_SLUG}',
  releasesUrl: 'https://github.com/${REPO_SLUG}/releases',
  issuesUrl: 'https://github.com/${REPO_SLUG}/issues/new/choose',
  nsis: {
    filename: '${nsisFilename}',
    sizeEn: '${nsis.sizeEn}',
    sizePt: '${nsis.sizePt}',
    url: '${nsisUrl}',
    sha256: '${nsis.sha256}',
  },
  msi: {
    filename: '${msiFilename}',
    sizeEn: '${msi.sizeEn}',
    sizePt: '${msi.sizePt}',
    url: '${msiUrl}',
    sha256: '${msi.sha256}',
  },
} as const;
`;

  const newVercelJson =
    JSON.stringify(
      {
        redirects: [
          {
            source: '/download',
            destination: nsisUrl,
            permanent: false,
          },
        ],
      },
      null,
      2
    ) + '\n';

  const pkgPath = path.join(SITE_ROOT, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.version = version;
  const newPkgJson = JSON.stringify(pkg, null, 2) + '\n';

  if (!dryRun) {
    fs.writeFileSync(releaseTsPath, newReleaseTs, 'utf8');
    fs.writeFileSync(path.join(SITE_ROOT, 'vercel.json'), newVercelJson, 'utf8');
    fs.writeFileSync(pkgPath, newPkgJson, 'utf8');
  }

  const touched = ['src/data/release.ts', 'vercel.json', 'package.json'];

  const textFiles = [
    'astro.config.mjs',
    'README.md',
    'scripts/generate-og.mjs',
    'src/content/docs/index.mdx',
    'src/content/docs/pt/index.mdx',
    'src/content/docs/downloads.mdx',
    'src/content/docs/pt/downloads.mdx',
    'src/content/docs/404.md',
  ];

  for (const rel of textFiles) {
    if (oldVersion !== version && replaceVersionInFile(rel, oldVersion, version, dryRun)) {
      touched.push(rel);
    }
  }

  console.log(`${dryRun ? 'Would update' : 'Updated'} files:`);
  for (const file of touched) console.log(`  - ${file}`);

  console.log('\nNext steps:');
  console.log('  1. Add release highlights to src/content/docs/changelog.md and src/content/docs/pt/changelog.md');
  console.log('  2. Run: npm run generate:og && npm run build');
  console.log('  3. Commit & push main to trigger Vercel deploy');
  console.log('  4. Publish the public GitHub Release:\n');
  console.log(
    `gh release create ${tag} "${nsisPath}" "${msiPath}" --repo ${REPO_SLUG} --title "HephaestusForge ${tag}" --notes "Official Windows x64 installers for HephaestusForge ${tag} (NSIS .exe and MSI).\\n\\n### SHA-256 Checksums\\n\\\`\\\`\\\`text\\n${nsis.sha256}  ${nsisFilename}\\n${msi.sha256}  ${msiFilename}\\n\\\`\\\`\\\`"`
  );
  console.log('');
}

main();
