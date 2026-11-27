import { describe, it, expect } from 'vitest';
import { UI_COPY } from '../data/i18n';
import {
  PROFILE,
  METRICS,
  COMPETENCIES,
  SOFTWARE_SKILLS,
  AUDIOVISUAL_GEAR,
  HOBBIES,
} from '../data/profile';
import {
  PLAY_APPS,
  COMPLEMENTARY_PROJECTS,
  PUBLIC_REPOS,
} from '../data/playApps';
import { ECOSYSTEM_PLATFORMS } from '../data/ecosystemPlatforms';
import {
  FORMAL_EXPERIENCE,
  FREELANCE_SERVICES,
} from '../data/experience';
import {
  EDUCATION,
  OFFICIAL_ACCREDITATIONS,
  LANGUAGE_CERTS,
  CREDLY_CREDENTIALS,
  CERTIFICATES,
} from '../data/credentials';

const FORBIDDEN_PII = ['73892815', '125505651', 'VHM', 'Villa María del Triunfo'];
const DEAD_404_REPOS = [
  'github.com/axsangerencia-prog/biblioteca-alejandria',
  'github.com/axsangerencia-prog/axsan-normas',
  'github.com/axsangerencia-prog/axsan-pro',
  'github.com/axsangerencia-prog/safe-fall-calculator',
];

function checkLocalized(val: { es: string; en: string }, label: string) {
  expect(val.es.trim().length, `${label}.es should be non-empty`).toBeGreaterThan(0);
  expect(val.en.trim().length, `${label}.en should be non-empty`).toBeGreaterThan(0);
}

describe('Task 3: 100% Bilingual Data Completeness & Hygiene', () => {
  it('contains zero forbidden civil PII and zero dead 404 repo links in serialized data', () => {
    const serialized = JSON.stringify({
      UI_COPY,
      PROFILE,
      METRICS,
      COMPETENCIES,
      SOFTWARE_SKILLS,
      AUDIOVISUAL_GEAR,
      HOBBIES,
      PLAY_APPS,
      COMPLEMENTARY_PROJECTS,
      PUBLIC_REPOS,
      ECOSYSTEM_PLATFORMS,
      FORMAL_EXPERIENCE,
      FREELANCE_SERVICES,
      EDUCATION,
      OFFICIAL_ACCREDITATIONS,
      LANGUAGE_CERTS,
      CREDLY_CREDENTIALS,
      CERTIFICATES,
    });
    for (const pii of FORBIDDEN_PII) {
      expect(serialized).not.toContain(pii);
    }
    for (const deadUrl of DEAD_404_REPOS) {
      expect(serialized).not.toContain(deadUrl);
    }
  });

  it('includes all profile essentials, 7 competencies, 12 software tools, audiovisual gear, and 4 hobbies', () => {
    expect(PROFILE.cip.es).toContain('264611');
    expect(PROFILE.cip.en).toContain('264611');
    expect(PROFILE.email).toBe('ing.alejandro.carrasco@gmail.com');
    expect(COMPETENCIES).toHaveLength(7);
    expect(SOFTWARE_SKILLS).toHaveLength(12);
    expect(AUDIOVISUAL_GEAR.length).toBeGreaterThanOrEqual(2);
    expect(HOBBIES).toHaveLength(4);
    COMPETENCIES.forEach((c, idx) => checkLocalized(c.title, `competency[${idx}]`));
    SOFTWARE_SKILLS.forEach((s, idx) => {
      checkLocalized(s.level, `software[${idx}].level`);
    });
    HOBBIES.forEach((h, idx) => checkLocalized(h.text, `hobby[${idx}]`));
  });

  it('includes all 4 Google Play apps with real screenshot URLs and public GitHub repos', () => {
    expect(PLAY_APPS).toHaveLength(4);
    for (const app of PLAY_APPS) {
      expect(app.playStoreUrl).toMatch(/^https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.axsan\./);
      expect(app.screenshots.length).toBeGreaterThanOrEqual(4);
      checkLocalized(app.subtitle, `${app.id}.subtitle`);
      checkLocalized(app.description, `${app.id}.description`);
      expect(app.features.length).toBeGreaterThanOrEqual(3);
      app.features.forEach((f, i) => checkLocalized(f, `${app.id}.feature[${i}]`));
    }
    expect(COMPLEMENTARY_PROJECTS.length).toBeGreaterThanOrEqual(2);
    expect(PUBLIC_REPOS.length).toBeGreaterThanOrEqual(3);
  });

  it('includes all 13 MYSSA ecosystem platforms with full bilingual text and live links', () => {
    expect(ECOSYSTEM_PLATFORMS).toHaveLength(13);
    ECOSYSTEM_PLATFORMS.forEach((p, idx) => {
      expect(p.order).toBe(idx + 1);
      expect(p.url).toMatch(/^https:\/\/.*\.myssa\.com\.pe/);
      expect(p.imageUrl).toMatch(/^https:\/\/ecosystem-sig\.myssa\.com\.pe\/img\/platforms\//);
      checkLocalized(p.title, `platform[${p.id}].title`);
      checkLocalized(p.tagline, `platform[${p.id}].tagline`);
      checkLocalized(p.description, `platform[${p.id}].description`);
      checkLocalized(p.operationalBenefit, `platform[${p.id}].benefit`);
      expect(p.highlights.length).toBeGreaterThanOrEqual(4);
    });
  });

  it('includes all 13 formal experience entries and all 35 freelance services in both ES and EN', () => {
    expect(FORMAL_EXPERIENCE).toHaveLength(13);
    expect(FORMAL_EXPERIENCE[0].company).toContain('Mantenimiento y Supervisión S.A.');
    expect(FORMAL_EXPERIENCE[0].role.es).toBe('Supervisor SSOMA');
    expect(FORMAL_EXPERIENCE[0].role.en.toLowerCase()).toContain('ssoma');
    FORMAL_EXPERIENCE.forEach((exp, idx) => {
      checkLocalized(exp.role, `formal[${idx}].role`);
      checkLocalized(exp.summary, `formal[${idx}].summary`);
    });

    expect(FREELANCE_SERVICES).toHaveLength(35);
    FREELANCE_SERVICES.forEach((srv, idx) => {
      expect(srv.number).toBe(idx + 1);
      checkLocalized(srv.service, `freelance[${idx}].service`);
    });
  });

  it('includes UNTELS, CIP, MTPE, IPCNA + TOEFL, 10+ Credly links, and >=120 bilingual certificates', () => {
    expect(EDUCATION.university).toContain('UNTELS');
    expect(EDUCATION.highlights.some((h) => h.es.includes('Tercio Superior'))).toBe(true);
    expect(OFFICIAL_ACCREDITATIONS.length).toBeGreaterThanOrEqual(4);
    expect(LANGUAGE_CERTS.length).toBeGreaterThanOrEqual(2);
    expect(CREDLY_CREDENTIALS.length).toBeGreaterThanOrEqual(10);
    expect(CERTIFICATES.length).toBeGreaterThanOrEqual(120);
    CERTIFICATES.forEach((cert, idx) => {
      checkLocalized(cert.title, `cert[${idx}].title`);
      checkLocalized(cert.categoryLabel, `cert[${idx}].categoryLabel`);
    });
  });
});
