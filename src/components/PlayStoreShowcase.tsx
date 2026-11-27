import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Lock,
  Maximize2,
} from 'lucide-react';
import { UI_COPY } from '../data/i18n';
import {
  COMPLEMENTARY_PROJECTS,
  PLAY_APPS,
  PUBLIC_REPOS,
} from '../data/playApps';
import type { Language } from '../types/portfolio';
import { LightboxModal } from './ui/LightboxModal';
import { Reveal } from './ui/Reveal';
import { SafeImage } from './ui/SafeImage';

interface PlayStoreShowcaseProps {
  lang: Language;
}

export function PlayStoreShowcase({ lang }: PlayStoreShowcaseProps) {
  const [selectedAppIdx, setSelectedAppIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const activeApp = PLAY_APPS[selectedAppIdx];
  const screenshots = activeApp.screenshots;
  const activeShot = screenshots[slideIdx] ?? screenshots[0];

  const handleSelectApp = (idx: number) => {
    setSelectedAppIdx(idx);
    setSlideIdx(0);
  };

  const handleNext = () => {
    setSlideIdx((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setSlideIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="apps" className="bg-white border-b border-[#E4E4E7] py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[70ch] space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
                {UI_COPY.appsHeading[lang]}
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                {UI_COPY.appsSubtitle[lang]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* App Selector Tabs */}
        <div
          role="tablist"
          aria-label={UI_COPY.appsHeading[lang]}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {PLAY_APPS.map((app, idx) => {
            const isActive = idx === selectedAppIdx;
            return (
              <button
                key={app.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => handleSelectApp(idx)}
                className={`relative text-left p-4 border transition-colors duration-150 cursor-pointer flex items-center gap-3.5 ${
                  isActive
                    ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                    : 'border-[#E4E4E7] bg-[#FAFAFA] text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-white'
                }`}
              >
                <SafeImage
                  src={app.iconUrl}
                  alt={app.name}
                  fallbackLabel={app.name}
                  className="w-12 h-12 shrink-0 object-cover border border-black/10 bg-white"
                />
                <div className="min-w-0">
                  <div className="font-display font-bold text-sm leading-tight truncate">
                    {app.name}
                  </div>
                  <div
                    className={`font-mono-tech text-[11px] mt-1 truncate ${
                      isActive ? 'text-white/75' : 'text-[#52525B]'
                    }`}
                  >
                    {app.packageName}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active App Interactive Detail + Screenshot Carousel */}
        <div className="border border-[#E4E4E7] bg-[#FAFAFA]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#E4E4E7] flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <SafeImage
                    src={activeApp.iconUrl}
                    alt={activeApp.name}
                    fallbackLabel={activeApp.name}
                    className="w-16 h-16 shrink-0 object-cover border border-[#E4E4E7]"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display font-extrabold text-2xl text-[#0A0A0A] leading-tight">
                      {activeApp.name}
                    </h3>
                    <p className="text-sm font-medium text-[#52525B] mt-1">
                      {activeApp.subtitle[lang]}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#52525B] leading-relaxed">
                  {activeApp.description[lang]}
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-[#0A0A0A]">
                    {UI_COPY.appsKeyFeatures[lang]}
                  </div>
                  <ul className="space-y-2">
                    {activeApp.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#52525B]">
                        <CheckCircle2
                          className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>{feat[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeApp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-[#E4E4E7] bg-[#FAFAFA] text-[#0A0A0A] font-mono-tech text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E7] flex flex-wrap gap-3">
                <a
                  href={activeApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-xs font-semibold transition-colors duration-150"
                >
                  <span>{UI_COPY.appsOpenStore[lang]}</span>
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                </a>
                {activeApp.privacyUrl && (
                  <a
                    href={activeApp.privacyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 h-11 px-4 border border-[#E4E4E7] bg-white text-[#0A0A0A] hover:border-[#0A0A0A] text-xs font-medium transition-colors duration-150"
                  >
                    <span>{UI_COPY.appsPrivacyPolicy[lang]}</span>
                    <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Interactive Screenshot Carousel */}
            <div
              className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') handleNext();
                if (e.key === 'ArrowLeft') handlePrev();
              }}
              aria-label={`${activeApp.name} screenshot carousel`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-[#0A0A0A] truncate">
                  {activeShot.caption[lang]}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono-tech text-xs text-[#52525B]">
                    {slideIdx + 1} / {screenshots.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    aria-label={UI_COPY.appsZoomScreenshot[lang]}
                    className="h-8 px-2.5 border border-[#E4E4E7] bg-white hover:border-[#0A0A0A] text-xs font-medium text-[#0A0A0A] inline-flex items-center gap-1.5 transition-colors duration-150 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                    <span className="hidden sm:inline">{UI_COPY.appsZoomScreenshot[lang]}</span>
                  </button>
                </div>
              </div>

              <div className="relative bg-white border border-[#E4E4E7] overflow-hidden aspect-video flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeShot.url}
                    initial={prefersReduced ? false : { opacity: 0.2, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReduced ? undefined : { opacity: 0.2, x: -16 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex items-center justify-center bg-[#FAFAFA]"
                  >
                    <SafeImage
                      src={activeShot.url}
                      alt={`${activeApp.name} — ${activeShot.caption[lang]}`}
                      fallbackLabel={activeApp.name}
                      loading="eager"
                      className="w-full h-full object-contain cursor-zoom-in"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={UI_COPY.appsPrevShot[lang]}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/95 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={UI_COPY.appsNextShot[lang]}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/95 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {screenshots.map((shot, i) => {
                  const active = i === slideIdx;
                  return (
                    <button
                      key={shot.url}
                      type="button"
                      onClick={() => setSlideIdx(i)}
                      aria-label={`${activeApp.name} ${i + 1}`}
                      className={`border overflow-hidden aspect-video bg-white transition-opacity duration-150 cursor-pointer ${
                        active
                          ? 'border-[#0A0A0A] ring-1 ring-[#0A0A0A] opacity-100'
                          : 'border-[#E4E4E7] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <SafeImage
                        src={shot.url}
                        alt=""
                        fallbackLabel={String(i + 1)}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Complementary Software Projects & Public GitHub Repositories */}
        <Reveal>
          <div className="space-y-6 pt-4">
            <h3 className="font-display font-bold text-2xl text-[#0A0A0A]">
              {UI_COPY.complementaryHeading[lang]}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {COMPLEMENTARY_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="border border-[#E4E4E7] bg-[#FAFAFA] p-5 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech text-[#52525B]">
                      <Lock className="w-3.5 h-3.5 text-[#0A0A0A]" strokeWidth={1.75} aria-hidden="true" />
                      <span>{proj.badge[lang]}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-[#0A0A0A]">{proj.name}</h4>
                    <p className="text-sm text-[#52525B] leading-relaxed">
                      {proj.description[lang]}
                    </p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-[#E4E4E7]">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-white border border-[#E4E4E7] font-mono-tech text-[11px] text-[#0A0A0A]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#71717A]">{proj.statusNote[lang]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PUBLIC_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-[#E4E4E7] bg-white hover:border-[#0A0A0A] p-4 flex flex-col justify-between gap-3 transition-colors duration-150"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-semibold text-[#0A0A0A]">
                        <FolderGit2 className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                        <span>{repo.name}</span>
                      </span>
                      <ExternalLink
                        className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#0A0A0A]"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {repo.description[lang]}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech text-[#52525B]">
                    <Code2 className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                    <span>{repo.language}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        slides={screenshots.map((s) => ({ url: s.url, caption: s.caption[lang] }))}
        activeIndex={slideIdx}
        title={activeApp.name}
        lang={lang}
        onClose={() => setLightboxOpen(false)}
        onChangeIndex={setSlideIdx}
      />
    </section>
  );
}
