import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  Monitor,
  SlidersHorizontal,
} from 'lucide-react';
import { ECOSYSTEM_PLATFORMS } from '../data/ecosystemPlatforms';
import { UI_COPY } from '../data/i18n';
import type { Language, LocalizedText, PlatformCategoryId } from '../types/portfolio';
import { LightboxModal } from './ui/LightboxModal';
import { Reveal } from './ui/Reveal';
import { SafeImage } from './ui/SafeImage';

interface EcosystemShowcaseProps {
  lang: Language;
}

const CATEGORIES: { id: PlatformCategoryId; label: LocalizedText }[] = [
  { id: 'all', label: { es: 'Todas (13)', en: 'All (13)' } },
  {
    id: 'operations-risk',
    label: { es: 'Operaciones y Alto Riesgo', en: 'Operations & High Risk' },
  },
  { id: 'control-reports', label: { es: 'Control y Reportes', en: 'Control & Reports' } },
  { id: 'training-culture', label: { es: 'Formación y Cultura', en: 'Training & Culture' } },
  { id: 'health-ppe', label: { es: 'Salud y EPP', en: 'Health & PPE' } },
  {
    id: 'management-accreditation',
    label: { es: 'Gestión y Acreditación', en: 'Management & Accreditation' },
  },
];

export function EcosystemShowcase({ lang }: EcosystemShowcaseProps) {
  const [category, setCategory] = useState<PlatformCategoryId>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const filtered = useMemo(() => {
    if (category === 'all') return ECOSYSTEM_PLATFORMS;
    return ECOSYSTEM_PLATFORMS.filter((p) => p.categoryGroup === category);
  }, [category]);

  const safeIdx = Math.min(spotlightIdx, Math.max(0, filtered.length - 1));
  const current = filtered[safeIdx] ?? ECOSYSTEM_PLATFORMS[0];

  const handleCategoryChange = (cat: PlatformCategoryId) => {
    setCategory(cat);
    setSpotlightIdx(0);
  };

  return (
    <section id="ecosistema" className="bg-[#FAFAFA] border-b border-[#E4E4E7] py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[72ch] space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
                {UI_COPY.ecosystemHeading[lang]}
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                {UI_COPY.ecosystemSubtitle[lang]}
              </p>
            </div>

            {/* View Toggle */}
            <div className="inline-flex border border-[#0A0A0A] bg-white shrink-0 self-start">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`h-10 px-4 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors duration-150 cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-white text-[#0A0A0A] hover:bg-[#F4F4F5]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>{UI_COPY.ecosystemViewCarousel[lang]}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`h-10 px-4 text-xs font-semibold inline-flex items-center gap-1.5 border-l border-[#0A0A0A] transition-colors duration-150 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-white text-[#0A0A0A] hover:bg-[#F4F4F5]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>{UI_COPY.ecosystemViewGrid[lang]}</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`h-9 px-3.5 border text-xs font-medium transition-colors duration-150 cursor-pointer ${
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

        {/* View 1: Spotlight Interactive Carousel */}
        {viewMode === 'carousel' && current && (
          <div className="space-y-4">
            <div className="border border-[#E4E4E7] bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6 relative bg-[#FAFAFA] border-b lg:border-b-0 lg:border-r border-[#E4E4E7] flex flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono-tech text-xs font-semibold text-[#0A0A0A]">
                      {String(current.order).padStart(2, '0')} / 13 — {current.categoryLabel[lang]}
                    </span>
                    <span className="font-mono-tech text-[11px] text-[#52525B]">
                      {current.domain}
                    </span>
                  </div>

                  <div className="relative overflow-hidden border border-[#E4E4E7] bg-white aspect-[16/10]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.id}
                        initial={prefersReduced ? false : { opacity: 0.25, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={prefersReduced ? undefined : { opacity: 0.25, x: -14 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        <SafeImage
                          src={current.imageUrl}
                          alt={current.title[lang]}
                          fallbackLabel={current.shortTitle[lang]}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      aria-label={UI_COPY.appsZoomScreenshot[lang]}
                      className="absolute bottom-3 right-3 h-8 px-2.5 bg-white/95 border border-[#0A0A0A] text-[11px] font-semibold text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {UI_COPY.appsZoomScreenshot[lang]}
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4 gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setSpotlightIdx((safeIdx - 1 + filtered.length) % filtered.length)
                        }
                        aria-label={UI_COPY.appsPrevShot[lang]}
                        className="h-9 w-9 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setSpotlightIdx((safeIdx + 1) % filtered.length)}
                        aria-label={UI_COPY.appsNextShot[lang]}
                        className="h-9 w-9 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                      </button>
                    </div>
                    <span className="font-mono-tech text-xs text-[#52525B]">
                      {safeIdx + 1} / {filtered.length}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    {current.includesDesktopApp && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#0A0A0A] bg-[#0A0A0A] text-white font-mono-tech text-[11px]">
                        <Monitor className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                        <span>{UI_COPY.ecosystemDesktopBadge[lang]}</span>
                      </div>
                    )}

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A0A0A]">
                      {current.title[lang]}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#0A0A0A]">
                      {current.tagline[lang]}
                    </p>
                    <p className="text-sm text-[#52525B] leading-relaxed">
                      {current.description[lang]}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {current.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#52525B]">
                          <Check
                            className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          <span>{h[lang]}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-3.5 border border-[#E4E4E7] bg-[#FAFAFA]">
                      <div className="text-xs font-semibold text-[#52525B] mb-1">
                        {UI_COPY.ecosystemBenefitLabel[lang]}
                      </div>
                      <p className="text-sm font-medium text-[#0A0A0A]">
                        {current.operationalBenefit[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E4E4E7] flex flex-wrap gap-3">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-11 px-5 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-xs font-semibold transition-colors duration-150"
                    >
                      <span>{UI_COPY.ecosystemOpenLive[lang]}</span>
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                    {current.desktopRepoUrl && (
                      <a
                        href={current.desktopRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-11 px-4 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold transition-colors duration-150"
                      >
                        <span>GitHub Desktop App</span>
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Index Strip across all filtered platforms */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-13 gap-1.5">
              {filtered.map((plat, idx) => {
                const active = idx === safeIdx;
                return (
                  <button
                    key={plat.id}
                    type="button"
                    onClick={() => setSpotlightIdx(idx)}
                    className={`p-2 border text-left transition-colors duration-150 cursor-pointer ${
                      active
                        ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                        : 'border-[#E4E4E7] bg-white text-[#0A0A0A] hover:border-[#0A0A0A]'
                    }`}
                  >
                    <div className="font-mono-tech text-[10px] opacity-75">
                      {String(plat.order).padStart(2, '0')}
                    </div>
                    <div className="text-[11px] font-semibold truncate mt-0.5">
                      {plat.shortTitle[lang]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2: Complete 13-Platform Catalog Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((plat) => (
              <article
                key={plat.id}
                className="border border-[#E4E4E7] bg-white flex flex-col justify-between hover:border-[#0A0A0A] transition-colors duration-150"
              >
                <div>
                  <div className="aspect-[16/9] border-b border-[#E4E4E7] bg-[#FAFAFA] overflow-hidden relative">
                    <SafeImage
                      src={plat.imageUrl}
                      alt={plat.title[lang]}
                      fallbackLabel={plat.shortTitle[lang]}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#0A0A0A] text-white font-mono-tech text-[11px]">
                      {String(plat.order).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="font-mono-tech text-[11px] text-[#52525B]">
                      {plat.categoryLabel[lang]}
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#0A0A0A] leading-snug">
                      {plat.title[lang]}
                    </h3>
                    {plat.includesDesktopApp && (
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#0A0A0A] text-[#0A0A0A] font-mono-tech text-[11px]">
                        <Monitor className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                        <span>{UI_COPY.ecosystemDesktopBadge[lang]}</span>
                      </div>
                    )}
                    <p className="text-sm text-[#52525B] leading-relaxed">{plat.tagline[lang]}</p>
                    <p className="text-xs text-[#71717A] leading-relaxed">
                      {plat.description[lang]}
                    </p>
                    <p className="text-xs font-medium text-[#0A0A0A] pt-1">
                      {plat.operationalBenefit[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-[#E4E4E7] bg-[#FAFAFA] flex items-center justify-between gap-2">
                  <span className="font-mono-tech text-[11px] text-[#52525B] truncate">
                    {plat.domain}
                  </span>
                  <a
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A0A0A] hover:underline underline-offset-4 shrink-0"
                  >
                    <span>{UI_COPY.ecosystemOpenLive[lang]}</span>
                    <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        slides={filtered.map((p) => ({
          url: p.imageUrl,
          caption: `${p.title[lang]} — ${p.tagline[lang]}`,
        }))}
        activeIndex={safeIdx}
        title={UI_COPY.ecosystemModalTitle[lang]}
        lang={lang}
        onClose={() => setLightboxOpen(false)}
        onChangeIndex={setSpotlightIdx}
      />
    </section>
  );
}
