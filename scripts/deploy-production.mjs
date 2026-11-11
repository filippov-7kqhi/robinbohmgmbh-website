/**
 * Veröffentlichung auf https://robinbohmgmbh.shop
 *
 * Ablauf:
 *  1. Produktions-Build (npm run build) – bricht ab, solange Pflichtangaben fehlen
 *  2. Prüfung des Build-Ergebnisses (CNAME, keine offenen Angaben, keine Vorschau-Kennzeichnung)
 *  3. Push des Build-Ordners auf den Branch „main“ des Produktions-Repositorys,
 *     das die Custom Domain samt HTTPS-Zertifikat bereits hält (kein Domainwechsel,
 *     keine Neuausstellung des Zertifikats, keine Ausfallzeit)
 *  4. Warten auf GitHub Pages und Prüfung der Live-Domain
 *
 * Aufruf: npm run deploy:production
 * Token:  Umgebungsvariable GH_TOKEN oder angemeldete GitHub CLI (gh auth token)
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PRODUCTION_REPO = 'filippov-7kqhi/robinbohmgmbh.shop';
const DOMAIN = 'robinbohmgmbh.shop';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const step = (message) => console.log(`\n▶ ${message}`);
const fail = (message) => {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
};

function getToken() {
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN.trim();
  const candidates = ['gh', 'C:\\Program Files\\GitHub CLI\\gh.exe'];
  for (const bin of candidates) {
    try {
      return execFileSync(bin, ['auth', 'token'], { encoding: 'utf8' }).trim();
    } catch {
      /* nächsten Kandidaten versuchen */
    }
  }
  return fail('Kein GitHub-Token gefunden. GH_TOKEN setzen oder mit „gh auth login“ anmelden.');
}

async function listHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return listHtmlFiles(full);
      return entry.name.endsWith('.html') ? [full] : [];
    }),
  );
  return files.flat();
}

// 1. Build ---------------------------------------------------------------------
step('Produktions-Build inkl. Freigabeprüfung');
try {
  execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
} catch {
  fail('Build abgebrochen – siehe Liste der fehlenden Angaben oben.');
}

// 2. Prüfung -------------------------------------------------------------------
step('Prüfung des Build-Ergebnisses');
const cname = (await fs.readFile(path.join(dist, 'CNAME'), 'utf8').catch(() => '')).trim();
if (cname !== DOMAIN) fail(`dist/CNAME enthält „${cname}“ statt „${DOMAIN}“.`);
for (const file of await listHtmlFiles(dist)) {
  const html = await fs.readFile(file, 'utf8');
  if (html.includes('liegt noch nicht vor')) fail(`Offene Angabe in ${path.relative(dist, file)}.`);
  if (html.includes('Entwicklungsvorschau')) fail(`Vorschau-Kennzeichnung in ${path.relative(dist, file)}.`);
}
console.log(`  ✓ CNAME = ${cname}, keine offenen Angaben, keine Vorschau-Kennzeichnung`);

// 3. Push ----------------------------------------------------------------------
const token = getToken();
step(`Veröffentlichung nach ${PRODUCTION_REPO} (Branch main)`);
const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'robinbohmgmbh-deploy-'));
await fs.cp(dist, tmp, { recursive: true });
const git = (args) => execFileSync('git', args, { cwd: tmp, stdio: 'inherit', env: { ...process.env, GH_TOKEN: token } });
git(['init', '-q', '-b', 'main']);
git(['add', '-A']);
git([
  'commit',
  '-q',
  '-m',
  `Veröffentlichung ${new Date().toISOString().slice(0, 10)}

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`,
]);
git([
  '-c',
  'credential.helper=',
  '-c',
  'credential.helper=!f() { echo username=x-access-token; echo "password=$GH_TOKEN"; }; f',
  'push',
  '-q',
  '-f',
  `https://github.com/${PRODUCTION_REPO}.git`,
  'main',
]);
const deployedCommit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: tmp, encoding: 'utf8' }).trim();
await fs.rm(tmp, { recursive: true, force: true });
console.log(`  ✓ Commit ${deployedCommit.slice(0, 7)} gepusht`);

// 4. GitHub Pages + Live-Prüfung --------------------------------------------------
const api = (endpoint) =>
  fetch(`https://api.github.com/repos/${PRODUCTION_REPO}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  }).then((res) => res.json());
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

step('Warten auf GitHub Pages');
for (let attempt = 0; attempt < 40; attempt++) {
  const build = await api('/pages/builds/latest');
  if (build.commit === deployedCommit && build.status === 'built') break;
  if (build.commit === deployedCommit && build.status === 'errored') fail(`Pages-Build fehlgeschlagen: ${build.error?.message}`);
  await wait(6000);
}
const pages = await api('/pages');
console.log(`  ✓ Pages: ${pages.html_url} | Custom Domain: ${pages.cname} | HTTPS erzwungen: ${pages.https_enforced}`);

step(`Prüfung von https://${DOMAIN}`);
const routes = ['/', '/ueber-uns/', '/geschaeftsbereiche/', '/beteiligungen/', '/kontakt/', '/impressum/', '/datenschutz/'];
let live = false;
for (let attempt = 0; attempt < 30 && !live; attempt++) {
  const html = await fetch(`https://${DOMAIN}/?v=${Date.now()}`, { cache: 'no-store' }).then((res) => res.text());
  live = html.includes('data-route="/"') && !html.includes('Website im Aufbau');
  if (!live) await wait(10000);
}
if (!live) fail('Die Domain liefert noch nicht die neue Website aus (CDN-Cache). Bitte in einigen Minuten erneut prüfen.');
for (const route of routes) {
  const res = await fetch(`https://${DOMAIN}${route}`, { cache: 'no-store' });
  console.log(`  ${res.ok ? '✓' : '✖'} ${res.status} https://${DOMAIN}${route}`);
}
console.log(`\n✔ Die vollständige Website ist unter https://${DOMAIN} veröffentlicht.\n`);
