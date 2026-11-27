import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '../..');

describe('Task 2: Public Static Assets & Sanitized Executive CV', () => {
  it('includes portrait image public/images/alejandro-portrait.png optimized below 600 KB', () => {
    const p = path.join(root, 'public', 'images', 'alejandro-portrait.png');
    expect(fs.existsSync(p)).toBe(true);
    const size = fs.statSync(p).size;
    expect(size).toBeGreaterThan(50_000);
    expect(size).toBeLessThan(600_000);
  });

  it('includes Open Graph preview card public/images/og-preview.png', () => {
    const p = path.join(root, 'public', 'images', 'og-preview.png');
    expect(fs.existsSync(p)).toBe(true);
    expect(fs.statSync(p).size).toBeGreaterThan(10_000);
  });

  it('includes sanitized CV PDF public/docs/CV-Ejecutivo-Alejandro-Carrasco.pdf', () => {
    const p = path.join(root, 'public', 'docs', 'CV-Ejecutivo-Alejandro-Carrasco.pdf');
    expect(fs.existsSync(p)).toBe(true);
    const size = fs.statSync(p).size;
    expect(size).toBeGreaterThan(50_000);
    expect(size).toBeLessThan(2_000_000);
  });
});
