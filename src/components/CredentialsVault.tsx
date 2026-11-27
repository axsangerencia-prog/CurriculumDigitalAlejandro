import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  FileCheck,
  GraduationCap,
  Languages,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  CERTIFICATES,
  CREDLY_CREDENTIALS,
  EDUCATION,
  LANGUAGE_CERTS,
  OFFICIAL_ACCREDITATIONS,
} from '../data/credentials';
import { UI_COPY } from '../data/i18n';
import type { CertificateCategoryId, Language, LocalizedText } from '../types/portfolio';
import { Reveal } from './ui/Reveal';

interface CredentialsVaultProps {
  lang: Language;
}

function normalizeSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

const CERT_CATEGORIES: { id: CertificateCategoryId; label: LocalizedText }[] = [
  { id: 'all', label: { es: 'Todos', en: 'All' } },
  { id: 'ai-data', label: { es: 'IA y Power BI', en: 'AI & Power BI' } },
  { id: 'diplomas-iso', label: { es: 'Diplomados e ISO', en: 'Diplomas & ISO' } },
  { id: 'high-risk-field', label: { es: 'Alto Riesgo', en: 'High Risk' } },
  { id: 'regulatory-health', label: { es: 'Normativa y Salud', en: 'Law & Health' } },
  { id: 'office-gis-env', label: { es: 'GIS, Ambiental y Excel', en: 'GIS, Env & Excel' } },
];

export function CredentialsVault({ lang }: CredentialsVaultProps) {
  const [certQuery, setCertQuery] = useState('');
  const [certCategory, setCertCategory] = useState<CertificateCategoryId>('all');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [evidenceOpen, setEvidenceOpen] = useState(false);

  const closeModalRef = useRef<HTMLButtonElement | null>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!evidenceOpen) return;
    prevFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      closeModalRef.current?.focus();
    }, 10);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setEvidenceOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      prevFocusRef.current?.focus();
    };
  }, [evidenceOpen]);

  const filteredCerts = useMemo(() => {
    const q = normalizeSearch(certQuery);
    return CERTIFICATES.filter((c) => {
      if (certCategory !== 'all' && c.category !== certCategory) return false;
      if (!q) return true;
      const haystack = normalizeSearch(
        `${c.title.es} ${c.title.en} ${c.institution} ${c.verificationCode ?? ''} ${c.yearOrNote ?? ''}`,
      );
      return haystack.includes(q);
    });
  }, [certQuery, certCategory]);

  const visibleCerts =
    showAllCerts || certQuery.trim() !== '' || certCategory !== 'all'
      ? filteredCerts
      : filteredCerts.slice(0, 15);

  return (
    <section id="credenciales" className="bg-[#FAFAFA] border-b border-[#E4E4E7] py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[72ch] space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
                {UI_COPY.credentialsHeading[lang]}
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                {UI_COPY.credentialsSubtitle[lang]}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setEvidenceOpen(true)}
              className="h-11 px-5 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-xs font-semibold inline-flex items-center gap-2 shrink-0 self-start transition-colors duration-150 cursor-pointer"
            >
              <FileCheck className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              <span>{UI_COPY.openEvidenceViewer[lang]}</span>
            </button>
          </div>
        </Reveal>

        {/* Block A: University Education & Official Accreditations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* UNTELS + Languages */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E4E4E7] p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="font-display font-bold text-xl text-[#0A0A0A]">
                  {EDUCATION.university}
                </h3>
              </div>
              <p className="text-sm font-semibold text-[#0A0A0A]">{EDUCATION.degree[lang]}</p>
              <p className="text-xs font-mono-tech text-[#52525B]">
                {EDUCATION.bachelor[lang]} · {EDUCATION.period}
              </p>
              <ul className="space-y-2 pt-1">
                {EDUCATION.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#52525B]">
                    <CheckCircle2
                      className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>{h[lang]}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {EDUCATION.codes.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 border border-[#E4E4E7] bg-[#FAFAFA] font-mono-tech text-[11px] text-[#0A0A0A]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E4E4E7] p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <Languages className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="font-display font-bold text-xl text-[#0A0A0A]">
                  {lang === 'es' ? 'Idiomas certificados' : 'Certified Language Proficiency'}
                </h3>
              </div>
              <div className="space-y-4 divide-y divide-[#E4E4E7]">
                {LANGUAGE_CERTS.map((lc, i) => (
                  <div key={lc.id} className={i > 0 ? 'pt-4 space-y-1' : 'space-y-1'}>
                    <div className="text-xs font-mono-tech text-[#52525B]">
                      {lc.institution} · {lc.period}
                    </div>
                    <div className="font-display font-bold text-sm text-[#0A0A0A]">
                      {lc.title[lang]}
                    </div>
                    <div className="text-xs font-semibold text-[#0A0A0A]">
                      {lc.scoreOrResult[lang]}
                    </div>
                    <p className="text-xs text-[#52525B] leading-relaxed">{lc.details[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CIP + MTPE Official Authorizations */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {OFFICIAL_ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="bg-white border border-[#E4E4E7] p-5 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#0A0A0A] shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                    <span className="text-xs font-semibold text-[#0A0A0A] leading-snug">
                      {acc.authority}
                    </span>
                  </div>
                  <div className="font-mono-tech text-xs font-semibold px-2.5 py-1 bg-[#0A0A0A] text-white inline-block">
                    {acc.code}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0A0A0A]">
                    {acc.title[lang]}
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">{acc.description[lang]}</p>
                </div>
                <div className="pt-3 border-t border-[#E4E4E7] flex items-center justify-between gap-2">
                  <span className="text-[11px] text-[#71717A] leading-snug">
                    {acc.verificationNote[lang]}
                  </span>
                  {acc.verificationUrl && (
                    <a
                      href={acc.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A0A0A] hover:underline shrink-0"
                    >
                      <span>Portal</span>
                      <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block B: Verifiable Google AI & Microsoft Power BI Credentials */}
        <div className="bg-white border border-[#E4E4E7] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E4E4E7] pb-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-[#0A0A0A]">
                {lang === 'es'
                  ? 'Certificaciones Verificables: Google AI & Microsoft Power BI'
                  : 'Verifiable Credentials: Google AI & Microsoft Power BI'}
              </h3>
              <p className="text-sm text-[#52525B] mt-1">
                {lang === 'es'
                  ? 'Credenciales digitales verificables en línea mediante enlaces oficiales de Credly y Coursera.'
                  : 'Digital credentials independently verifiable online via official Credly and Coursera links.'}
              </p>
            </div>
            <span className="font-mono-tech text-xs text-[#0A0A0A] font-semibold">
              10 CREDLY BADGES · 11+ VERIFIED TRACKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CREDLY_CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className={`p-4 border flex flex-col justify-between gap-4 ${
                  cred.isMainBundle
                    ? 'border-[#0A0A0A] bg-[#FAFAFA]'
                    : 'border-[#E4E4E7] bg-white'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 font-mono-tech text-[11px] text-[#52525B]">
                    <span>{cred.issuer}</span>
                    <span>{cred.issuedDate}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#0A0A0A] leading-snug">
                    {cred.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E4E4E7]">
                  {cred.credlyUrl && (
                    <a
                      href={cred.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A0A0A] hover:underline"
                    >
                      <span>{UI_COPY.verifyCredly[lang]}</span>
                      <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={cred.courseraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#52525B] hover:text-[#0A0A0A] hover:underline"
                  >
                    <span>{UI_COPY.verifyCoursera[lang]}</span>
                    <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block C: Full Searchable Certificate Catalog (103 Table + v35 Annexes = 128+) */}
        <div className="bg-white border border-[#E4E4E7] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-[#0A0A0A]">
                {lang === 'es'
                  ? `Catálogo completo de capacitaciones (${CERTIFICATES.length} registros · 2,511+ h)`
                  : `Complete training & certificate catalog (${CERTIFICATES.length} records · 2,511+ hrs)`}
              </h3>
              <p className="text-sm text-[#52525B] mt-1">
                {lang === 'es'
                  ? 'Incluye los 103 certificados de la tabla principal del CV más todos los certificados adicionales acreditados en el dossier v35 (KREA GREEN, PYMIS, SIG Peruvian, SGS, 2017 y Google/Microsoft).'
                  : 'Includes all 103 entries from the primary CV ledger plus every verified certificate in the v35 dossier annexes (KREA GREEN, PYMIS, SIG Peruvian, SGS, 2017, and Google/Microsoft).'}
              </p>
            </div>
            <span className="font-mono-tech text-xs text-[#52525B] shrink-0">
              {filteredCerts.length} / {CERTIFICATES.length}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                type="search"
                value={certQuery}
                onChange={(e) => setCertQuery(e.target.value)}
                placeholder={UI_COPY.searchCertsPlaceholder[lang]}
                className="w-full h-11 pl-10 pr-4 border border-[#E4E4E7] focus:border-[#0A0A0A] bg-[#FAFAFA] text-sm text-[#0A0A0A] placeholder:text-[#71717A] outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CERT_CATEGORIES.map((cat) => {
                const active = certCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCertCategory(cat.id)}
                    className={`h-11 px-3 border text-xs font-medium transition-colors duration-150 cursor-pointer ${
                      active
                        ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                        : 'border-[#E4E4E7] bg-white text-[#0A0A0A] hover:border-[#0A0A0A]'
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredCerts.length === 0 ? (
            <div className="border border-[#E4E4E7] bg-[#FAFAFA] p-8 text-center space-y-3">
              <p className="font-display font-bold text-base text-[#0A0A0A]">
                {UI_COPY.noResultsTitle[lang]}
              </p>
              <button
                type="button"
                onClick={() => {
                  setCertQuery('');
                  setCertCategory('all');
                }}
                className="h-10 px-4 bg-[#0A0A0A] text-white text-xs font-semibold cursor-pointer"
              >
                {UI_COPY.resetFilters[lang]}
              </button>
            </div>
          ) : (
            <>
              <div className="border border-[#E4E4E7] divide-y divide-[#E4E4E7]">
                {visibleCerts.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 sm:px-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center text-sm hover:bg-[#FAFAFA] transition-colors duration-150"
                  >
                    <div className="md:col-span-6 font-medium text-[#0A0A0A]">
                      {cert.cvIndex && (
                        <span className="font-mono-tech text-xs text-[#71717A] mr-2">
                          #{String(cert.cvIndex).padStart(3, '0')}
                        </span>
                      )}
                      <span>{cert.title[lang]}</span>
                    </div>
                    <div className="md:col-span-3 text-xs font-semibold text-[#52525B]">
                      {cert.institution}
                    </div>
                    <div className="md:col-span-3 flex items-center md:justify-end gap-2 font-mono-tech text-xs text-[#52525B]">
                      <span className="px-2 py-0.5 bg-[#F4F4F5] text-[#0A0A0A]">
                        {cert.hours} {cert.hours.match(/^\d/) ? 'h' : ''}
                      </span>
                      {cert.verificationCode && (
                        <span className="text-[11px] truncate max-w-[16ch]" title={cert.verificationCode}>
                          {cert.verificationCode}
                        </span>
                      )}
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Verify ${cert.title[lang]}`}
                          className="text-[#0A0A0A] hover:underline inline-flex items-center"
                        >
                          <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {certQuery.trim() === '' && certCategory === 'all' && filteredCerts.length > 15 && (
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllCerts((prev) => !prev)}
                    className="h-11 px-6 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold transition-colors duration-150 cursor-pointer"
                  >
                    {showAllCerts
                      ? UI_COPY.showCompactCerts[lang]
                      : `${UI_COPY.showAllCerts[lang]} (${filteredCerts.length})`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Verified Evidence Registry Modal */}
      {evidenceOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={UI_COPY.openEvidenceViewer[lang]}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setEvidenceOpen(false)}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] bg-white border border-[#0A0A0A] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#E4E4E7] flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg text-[#0A0A0A]">
                  {UI_COPY.openEvidenceViewer[lang]}
                </h3>
                <p className="text-xs text-[#52525B]">
                  {lang === 'es'
                    ? 'Códigos públicos de validación oficial sin exposición de documentos civiles privados.'
                    : 'Public official validation codes and live verification links (civil ID scans kept private).'}
                </p>
              </div>
              <button
                ref={closeModalRef}
                type="button"
                onClick={() => setEvidenceOpen(false)}
                aria-label={UI_COPY.closeModal[lang]}
                className="h-9 w-9 border border-[#E4E4E7] hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-base text-[#0A0A0A]">
                  {lang === 'es' ? 'Registros Oficiales del Estado y Colegiatura' : 'Official State & Engineering Registries'}
                </h4>
                <div className="border border-[#E4E4E7] divide-y divide-[#E4E4E7] font-mono-tech text-xs">
                  <div className="p-3 flex flex-wrap justify-between gap-2">
                    <span className="font-semibold text-[#0A0A0A]">CIP N.º 264611</span>
                    <span className="text-[#52525B]">Colegiado 28/08/2021 · Cód. Cap. 008267-20-H</span>
                  </div>
                  <div className="p-3 flex flex-wrap justify-between gap-2">
                    <span className="font-semibold text-[#0A0A0A]">MTPE N.º 202200156</span>
                    <span className="text-[#52525B]">Autos Directorales 0472 &amp; 0481-2022-MTPE/3/19.2 (M2974001-1 / 2)</span>
                  </div>
                  <div className="p-3 flex flex-wrap justify-between gap-2">
                    <span className="font-semibold text-[#0A0A0A]">MTPE/PRL-IM-00040</span>
                    <span className="text-[#52525B]">Profesional Competente SST · R.D. 140-2016-MTPE/3/19</span>
                  </div>
                  <div className="p-3 flex flex-wrap justify-between gap-2">
                    <span className="font-semibold text-[#0A0A0A]">UNTELS 088AT0668 / 088AB0380</span>
                    <span className="text-[#52525B]">Título Prof. RCO 144-2020-UNTELS · Tercio Superior</span>
                  </div>
                  <div className="p-3 flex flex-wrap justify-between gap-2">
                    <span className="font-semibold text-[#0A0A0A]">IPCNA Folio 101415 / TOEFL 443</span>
                    <span className="text-[#52525B]">Programa Avanzado Nov 2025 + ETS TOEFL ITP Level 2</span>
                  </div>
                  <div className="p-3 flex flex-wrap justify-between gap-2">
                    <span className="font-semibold text-[#0A0A0A]">AXSAN AX.CAP.742–747</span>
                    <a
                      href="https://axsansafety.com/certificados/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A0A0A] underline inline-flex items-center gap-1"
                    >
                      <span>axsansafety.com/certificados/</span>
                      <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-bold text-base text-[#0A0A0A]">
                  {lang === 'es' ? 'Portales Externos de Verificación en Línea' : 'External Live Verification Portals'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://www.credly.com/go/cpbLDbik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#E4E4E7] hover:border-[#0A0A0A] flex items-center justify-between"
                  >
                    <span className="font-semibold text-[#0A0A0A]">Google AI Professional (Credly)</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  <a
                    href="https://coursera.org/verify/9O62TBTH0KBJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#E4E4E7] hover:border-[#0A0A0A] flex items-center justify-between"
                  >
                    <span className="font-semibold text-[#0A0A0A]">Microsoft Power BI (Coursera)</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  <a
                    href="https://aplicativosweb6.sunafil.gob.pe/si.certificadosInpa/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#E4E4E7] hover:border-[#0A0A0A] flex items-center justify-between"
                  >
                    <span className="font-semibold text-[#0A0A0A]">SUNAFIL Certificados INPA</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  <a
                    href="https://app.trabajo.gob.pe/sigdoc-ext/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#E4E4E7] hover:border-[#0A0A0A] flex items-center justify-between"
                  >
                    <span className="font-semibold text-[#0A0A0A]">MTPE Verificación SIGDOC</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
