import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '../..');

describe('Task 1: Design Tokens, Fonts, and GitHub Pages Configuration', () => {
  it('defines strict 90% white / 10% black tokens and accessibility guards in src/index.css', () => {
    const cssPath = path.join(root, 'src', 'index.css');
    expect(fs.existsSync(cssPath)).toBe(true);
    const css = fs.readFileSync(cssPath, 'utf-8');
    expect(css).toContain('--bg-canvas: #FFFFFF');
    expect(css).toContain('--ink-primary: #0A0A0A');
    expect(css).toContain('--border-hairline: #E4E4E7');
    expect(css).toContain('overflow-x: clip');
    expect(css).toContain(':focus-visible');
    expect(css).toContain('prefers-reduced-motion: reduce');
    expect(css).not.toMatch(/transition:\s*all/i);
  });

  it('configures vite.config.ts with GitHub Pages base /CurriculumDigitalAlejandro/', () => {
    const viteCfgPath = path.join(root, 'vite.config.ts');
    expect(fs.existsSync(viteCfgPath)).toBe(true);
    const cfg = fs.readFileSync(viteCfgPath, 'utf-8');
    expect(cfg).toContain("base: '/CurriculumDigitalAlejandro/'");
  });

  it('defines bilingual TypeScript types in src/types/portfolio.ts', () => {
    const typesPath = path.join(root, 'src', 'types', 'portfolio.ts');
    expect(fs.existsSync(typesPath)).toBe(true);
    const ts = fs.readFileSync(typesPath, 'utf-8');
    expect(ts).toContain('export interface LocalizedText');
    expect(ts).toContain('export interface PlayAppItem');
    expect(ts).toContain('export interface EcosystemPlatform');
    expect(ts).toContain('export interface FormalExperienceItem');
    expect(ts).toContain('export interface FreelanceServiceItem');
    expect(ts).toContain('export interface CertificateItem');
  });

  it('configures GitHub Actions deploy workflow for Pages and canonical OG URL in index.html', () => {
    const wfPath = path.join(root, '.github', 'workflows', 'deploy.yml');
    const htmlPath = path.join(root, 'index.html');
    expect(fs.existsSync(wfPath)).toBe(true);
    expect(fs.existsSync(htmlPath)).toBe(true);
    const html = fs.readFileSync(htmlPath, 'utf-8');
    expect(html).toContain('Schibsted Grotesk');
    expect(html).toContain('Hanken Grotesk');
    expect(html).toContain('JetBrains Mono');
    expect(html).toContain('https://axsangerencia-prog.github.io/CurriculumDigitalAlejandro/');
  });
});
