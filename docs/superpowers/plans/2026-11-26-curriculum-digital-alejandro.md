# Curriculum Digital & Executive Portfolio 2026 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (or subagent-driven-development) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify the complete 100% bilingual (ES/EN), zero-omission, 90% white / 10% black interactive portfolio web application for Ing. Julio Alejandro Carrasco Contreras, configured for GitHub Pages deployment at `https://axsangerencia-prog.github.io/CurriculumDigitalAlejandro/`.

**Architecture:** React 19 + TypeScript + Vite 6 + Tailwind CSS v4 + Framer Motion + Lucide React, organized with strict separation between typed bilingual data modules (`src/data/*`) and modular interactive presentation components (`src/components/*`). Static assets (sanitized CV PDF, portrait PNG, Open Graph image) live under `public/` and resolve via `import.meta.env.BASE_URL`.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lucide React, Vitest + Testing Library (unit & data completeness tests), Python PyMuPDF/Pillow (PDF sanitization & OG image generation), GitHub Actions Pages workflow.

**Spec:** `docs/superpowers/specs/2026-11-26-curriculum-digital-alejandro-design.md`

## Global Constraints
- Strict **90% white / 10% black** surface palette (`#FFFFFF` canvas, `#FAFAFA`/`#F4F4F5` surface/muted, `#0A0A0A` primary ink/actions, `#52525B`/`#71717A` secondary/tertiary ink, `#E4E4E7` hairline borders). No dark chrome, no neon, no decorative gradients, no emojis used as UI icons.
- Typography: `Schibsted Grotesk` (display), `Hanken Grotesk` (body/UI), `JetBrains Mono` (strictly for official codes like `CIP N.º 264611`, `MTPE`, dates, tabular metrics).
- Zero omissions: 4 Google Play Store apps (+ real screenshots), 13 MYSSA platforms (+ real previews), 13 formal employment periods across 12 companies (with current role **Supervisor SSOMA** at *Mantenimiento y Supervisión S.A.*), 35 freelance services, 103 table certificates (2,511 h) + all verified `CV Documentado v35.pdf` annex certificates (KREA GREEN, PYMIS, SIG Peruvian, 360° Ambiental, SGS #16, 2017, TOEFL ITP 443, IPCNA Folio 101415, MTPE M2974001-1/2, UNI 18.5, UNTELS 1st place Cycle III), 10 Credly + 17 Coursera Google AI / Power BI verification links, 12 software tools, audiovisual gear (DJI Mini 2, GoPro Hero 9 & 11), and 4 hobbies.
- Privacy: Zero DNI (`73892815`), Passport (`125505651`), Driver's License (`VHM – Q 73892815`), or district-level home address exposed in HTML, JSON data, or public downloadable PDF. `CV Documentado v35.pdf` is request-only via WhatsApp/email.
- Hosting: Vite `base: '/CurriculumDigitalAlejandro/'`, GitHub Pages workflow `.github/workflows/deploy.yml`, absolute OG metadata pointing to `https://axsangerencia-prog.github.io/CurriculumDigitalAlejandro/`.
- Bilingual ES/EN: 100% of entities and UI strings provide both `es` and `en` text via `LocalizedText`.
- Motion & A11y: GPU-composited (`transform`/`opacity`/`clip-path`) only; never `transition: all` or layout animations (`width`/`height`/`top`/`left`); `prefers-reduced-motion: reduce` respected; `:focus-visible` instant high-contrast ring; `overflow-x: clip` on `html, body`.

## Review Focus
1. **Image/External Asset Failure:** Play Store (`play-lh.googleusercontent.com`) or MYSSA (`ecosystem-sig.myssa.com.pe`) remote images blocked or slow — carousel/cards must render clean monochrome monogram fallbacks without broken `<img>` frames or layout collapse.
2. **Bilingual Completeness (`ES`/`EN`):** Switching language at runtime must update `document.documentElement.lang`, navigation, filters, modals, and every record without undefined strings or untranslated Spanish leakage in `EN` mode.
3. **Large Dataset Filtering & Reset:** Searching or filtering across 35 freelance services and 120+ certificates must handle diacritics/case-insensitively, display an informative empty state with one-click reset, and toggle cleanly between compact preview and full catalog.
4. **Accessible Lightbox & Modals:** Opening Play Store screenshot lightboxes or the Verified Evidence modal must trap/manage focus, close on `Escape` or backdrop click, lock background scroll cleanly, and restore focus without clipping on 375px mobile viewports.
5. **PII / Dead-Link Hygiene:** No civil ID (`73892815`, `125505651`, `VHM`) or 404 private repo URL (`biblioteca-alejandria`, `axsan-normas`, `axsan-pro`, `safe-fall-calculator`) may appear in generated bundles or the sanitized downloadable PDF.

---

### Task 1: Project Scaffolding, Styling Tokens, Build & Test Setup
**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vitest.config.ts`
- Create: `index.html`, `src/main.tsx`, `src/index.css`, `src/types/portfolio.ts`
- Create: `.github/workflows/deploy.yml`, `.gitignore`
- Test: `src/test/setup.ts`, `src/test/theme.test.ts`

**Interfaces:**
- Produces: `LocalizedText`, `AppItem`, `EcosystemPlatform`, `FormalExperience`, `FreelanceService`, `CredentialBadge`, `CertificateItem`, `Language` in `src/types/portfolio.ts`.

- [ ] **Step 1:** Initialize Vite React TypeScript config files, install `react`, `react-dom`, `framer-motion`, `lucide-react`, `@tailwindcss/vite`, `tailwindcss`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `@types/react`, `@types/react-dom`.
- [ ] **Step 2:** Create `src/types/portfolio.ts` defining all bilingual data interfaces (`LocalizedText`, `Language`, etc.) and `src/index.css` with strict 90% white / 10% black `:root` tokens, custom scrollbars, selection styling, `:focus-visible`, `overflow-x: clip`, and `prefers-reduced-motion` rules.
- [ ] **Step 3:** Configure `vite.config.ts` (`base: '/CurriculumDigitalAlejandro/'`), `index.html` (Schibsted Grotesk, Hanken Grotesk, JetBrains Mono + Open Graph metadata), and `.github/workflows/deploy.yml`.
- [ ] **Step 4:** Write failing test `src/test/setup.ts` + `src/test/theme.test.ts` asserting `:root` tokens exist and `vite.config` uses the GitHub Pages base path, run `npx vitest run src/test/theme.test.ts` (verify pass after creation).
- [ ] **Step 5:** Commit scaffolding (`git add ... && git commit`).

---

### Task 2: Asset Preparation & Sanitización del CV Ejecutivo PDF
**Files:**
- Create: `public/images/alejandro-portrait.png` (from `Alejandro Foto4.png`)
- Create: `public/images/og-preview.png` (clean 1200x630 editorial card generated via Pillow)
- Create: `public/docs/CV-Ejecutivo-Alejandro-Carrasco.pdf` (redacted cleanly from `CV (v2).pdf` via PyMuPDF)
- Test: `src/test/assets.test.ts`

- [ ] **Step 1:** Copy `Alejandro Foto4.png` to `public/images/alejandro-portrait.png`.
- [ ] **Step 2:** Write and run a Python script (in brain `scratch/`) to redact `Licencia`, `Pasaporte`, `VHM – Q 73892815`, `125505651`, and `Villa María del Triunfo, ` from `CV (v2).pdf` into `public/docs/CV-Ejecutivo-Alejandro-Carrasco.pdf`, and verify with PyMuPDF text extraction that zero forbidden PII strings remain while CIP `264611`, MTPE codes, email, phone, and all 12 pages remain intact.
- [ ] **Step 3:** Generate `public/images/og-preview.png` (1200x630 white/black architectural card with portrait & CIP credentials).
- [ ] **Step 4:** Write `src/test/assets.test.ts` verifying existence and non-empty sizes of the 3 static assets, run `npx vitest run src/test/assets.test.ts` to verify PASS.
- [ ] **Step 5:** Commit static assets and test.

---

### Task 3: Complete Bilingual Data Layer (`src/data/*`) — Zero Omissions
**Files:**
- Create: `src/data/i18n.ts`
- Create: `src/data/profile.ts`
- Create: `src/data/playApps.ts`
- Create: `src/data/ecosystemPlatforms.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/credentials.ts`
- Create: `src/hooks/useLanguage.ts`
- Test: `src/test/dataCompleteness.test.ts`

**Interfaces:**
- Produces: typed bilingual exports `UI_COPY`, `PROFILE`, `METRICS`, `COMPETENCIES`, `SOFTWARE_SKILLS`, `AUDIOVISUAL_GEAR`, `HOBBIES`, `PLAY_APPS`, `COMPLEMENTARY_PROJECTS`, `PUBLIC_REPOS`, `ECOSYSTEM_PLATFORMS`, `FORMAL_EXPERIENCE` (13 entries), `FREELANCE_SERVICES` (35 entries), `EDUCATION`, `OFFICIAL_ACCREDITATIONS`, `LANGUAGE_CERTS`, `CREDLY_CREDENTIALS`, `CERTIFICATES` (103 table + all verified v35 annex certificates), and `useLanguage()`.

- [ ] **Step 1:** Write failing completeness test `src/test/dataCompleteness.test.ts` verifying exact counts (4 Play apps with real screenshots, 13 MYSSA platforms, 13 formal experience entries with *Mantenimiento y Supervisión S.A.* = `Supervisor SSOMA`, 35 freelance services, >=120 certificates covering all 103 table entries + v35 extras, 10 Credly links, 12 software tools, 4 hobbies), full ES+EN translation non-emptiness, zero forbidden PII (`73892815`, `125505651`, `VHM`), and zero dead 404 repo links.
- [ ] **Step 2:** Run `npx vitest run src/test/dataCompleteness.test.ts` -> expect FAIL (modules do not exist yet).
- [ ] **Step 3:** Author `src/data/i18n.ts`, `profile.ts`, `playApps.ts`, `ecosystemPlatforms.ts`, `experience.ts`, `credentials.ts`, and `src/hooks/useLanguage.ts` with 100% verified ES & EN content and impeccable spelling.
- [ ] **Step 4:** Run `npx vitest run src/test/dataCompleteness.test.ts` -> expect PASS.
- [ ] **Step 5:** Commit data modules and tests.

---

### Task 4: Core Layout, Navigation, Hero & Dual-Engine Strategy
**Files:**
- Create: `src/components/ui/Reveal.tsx`
- Create: `src/components/ui/SafeImage.tsx` (handles graceful fallback if remote image fails)
- Create: `src/components/Navbar.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/DualEngineSection.tsx`
- Test: `src/test/heroAndNav.test.tsx`

- [ ] **Step 1:** Write failing component test `src/test/heroAndNav.test.tsx` verifying name, `CIP N.º 264611`, ES/EN toggle callback, sanitized CV download link using `BASE_URL`, and Dual Engine pillars.
- [ ] **Step 2:** Run `npx vitest run src/test/heroAndNav.test.tsx` -> expect FAIL.
- [ ] **Step 3:** Implement `Reveal.tsx`, `SafeImage.tsx`, `Navbar.tsx` (sticky clean white bar with mobile drawer and ES|EN switcher), `HeroSection.tsx` (90% white / 10% black editorial split with `alejandro-portrait.png` and verified tabular KPIs), and `DualEngineSection.tsx` (HSE Pillar vs Full-Stack/AI Pillar + 7 strategic competencies + `INTJ-Te` analytical profile).
- [ ] **Step 4:** Run `npx vitest run src/test/heroAndNav.test.tsx` -> expect PASS.
- [ ] **Step 5:** Commit components.

---

### Task 5: Google Play Store Carousel & 13-Platform MYSSA Showcase
**Files:**
- Create: `src/components/ui/LightboxModal.tsx`
- Create: `src/components/PlayStoreShowcase.tsx`
- Create: `src/components/EcosystemShowcase.tsx`
- Test: `src/test/showcases.test.tsx`

- [ ] **Step 1:** Write failing test `src/test/showcases.test.tsx` verifying switching among the 4 Play Store apps, advancing/retreating the screenshot carousel (`Next`/`Prev` + keyboard), opening/closing `LightboxModal` on `Escape`, filtering the 13 MYSSA platforms by category, and switching Carousel vs Full Grid view.
- [ ] **Step 2:** Run `npx vitest run src/test/showcases.test.tsx` -> expect FAIL.
- [ ] **Step 3:** Implement `LightboxModal.tsx` (accessible focus management, Escape close, keyboard prev/next), `PlayStoreShowcase.tsx` (interactive app switcher + real Play Store screenshots carousel + complementary projects + public GitHub repos), and `EcosystemShowcase.tsx` (category pills + interactive spotlight carousel & full 13-platform grid with real MYSSA screenshots).
- [ ] **Step 4:** Run `npx vitest run src/test/showcases.test.tsx` -> expect PASS.
- [ ] **Step 5:** Commit showcase components.

---

### Task 6: Complete Trajectory, Credentials Vault, Skills/Media & Contact Footer
**Files:**
- Create: `src/components/ExperienceExplorer.tsx`
- Create: `src/components/CredentialsVault.tsx`
- Create: `src/components/SkillsMediaSection.tsx`
- Create: `src/components/ContactFooter.tsx`
- Create: `src/App.tsx`
- Test: `src/test/explorersAndApp.test.tsx`

- [ ] **Step 1:** Write failing test `src/test/explorersAndApp.test.tsx` verifying 13 formal job periods rendered (starting with *Mantenimiento y Supervisión S.A.* — `Supervisor SSOMA`), switching to the 35 freelance services tab with accent-insensitive search & "Show all (35)" toggle + empty state reset, opening the Verified Evidence modal inside `CredentialsVault`, searching across 120+ certificates, language toggle across full `<App />`, and email copy button.
- [ ] **Step 2:** Run `npx vitest run src/test/explorersAndApp.test.tsx` -> expect FAIL.
- [ ] **Step 3:** Implement `ExperienceExplorer.tsx`, `CredentialsVault.tsx` (Education UNTELS/Tercio Superior 1st place, CIP/MTPE, IPCNA + TOEFL ITP, Credly/Coursera Google AI + Power BI cards, Verified Evidence modal, full searchable 120+ certificate explorer), `SkillsMediaSection.tsx` (12 software programs, DJI Mini 2 & GoPro Hero 9/11, 4 hobbies), `ContactFooter.tsx`, and wire everything into `src/App.tsx` & `src/main.tsx`.
- [ ] **Step 4:** Run full test suite (`npx vitest run`) -> expect all PASS.
- [ ] **Step 5:** Commit complete application.

---

### Task 7: Production Build, Headless Browser Verification & Fresh Code Review
**Files:**
- Modify (only if findings arise during browser/review verification): affected files

- [ ] **Step 1:** Run `npm run build` and verify zero TypeScript (`tsc -b`) or Vite bundle errors, confirming `dist/docs/CV-Ejecutivo-Alejandro-Carrasco.pdf` and `dist/images/*` exist.
- [ ] **Step 2:** Start `npm run preview` and run a real Chromium/Edge headless verification script (checking console errors, image load status, ES/EN switching, carousel clicks, lightbox modal, search filters, horizontal overflow check at `1280×800` and `375×812`, and capturing desktop/mobile screenshots into `.review/` for visual inspection with `read_file`).
- [ ] **Step 3:** Inspect rendered screenshots visually; fix any typography, spacing, contrast, or responsive overflow issues in one batch, then re-verify build and screenshots.
- [ ] **Step 4:** Dispatch fresh `self` code reviewer against the built app + spec + Review Focus; address any Critical/Important findings and verify all tests + build pass cleanly after final edit.
- [ ] **Step 5:** Clean up temporary `.review/` captures if unneeded in repo, run `git status` and `npx vitest run && npm run build`, and report final verification and GitHub push / Pages instructions cleanly to the user.
