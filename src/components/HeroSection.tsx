import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  Download,
  ExternalLink,
  FileCheck2,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { UI_COPY } from '../data/i18n';
import { METRICS, PROFILE } from '../data/profile';
import type { Language } from '../types/portfolio';
import { SafeImage } from './ui/SafeImage';

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const prefersReduced = useReducedMotion();
  const cvHref = `${import.meta.env.BASE_URL}${PROFILE.sanitizedCvPath}`;
  const portraitSrc = `${import.meta.env.BASE_URL}${PROFILE.portraitPath}`;

  return (
    <section
      id="inicio"
      className="bg-white border-b border-[#E4E4E7] pt-10 pb-14 sm:pt-14 sm:pb-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Executive Column */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0.94, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#52525B]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#0A0A0A] bg-[#0A0A0A] text-white font-mono-tech font-medium">
                {PROFILE.cip[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#E4E4E7] bg-[#FAFAFA] text-[#0A0A0A] font-medium">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                {UI_COPY.heroAvailability[lang]}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.35rem] tracking-[-0.035em] leading-[1.04] text-[#0A0A0A]">
                {PROFILE.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#0A0A0A] leading-snug max-w-[60ch]">
                {PROFILE.headlineRole[lang]}
              </p>
            </div>

            <p className="text-base text-[#52525B] leading-relaxed max-w-[68ch]">
              {PROFILE.aboutSummary[lang]}
            </p>

            {/* Primary High-Conversion Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-sm font-semibold transition-colors duration-150"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                <span>{UI_COPY.heroPrimaryCta[lang]}</span>
              </a>

              <a
                href={cvHref}
                download="CV-Ejecutivo-Alejandro-Carrasco.pdf"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-sm font-semibold transition-colors duration-150"
              >
                <Download className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                <span>{UI_COPY.heroSecondaryCta[lang]}</span>
              </a>
            </div>

            {/* Direct Verification & Dossier Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#52525B]">
              <a
                href="#apps"
                className="inline-flex items-center gap-1 font-semibold text-[#0A0A0A] hover:underline underline-offset-4 transition-colors duration-150"
              >
                <span>{UI_COPY.heroExploreAppsCta[lang]}</span>
                <ArrowDownRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#0A0A0A] underline underline-offset-4 decoration-[#D4D4D8] hover:decoration-[#0A0A0A] transition-colors duration-150"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#0A0A0A] underline underline-offset-4 decoration-[#D4D4D8] hover:decoration-[#0A0A0A] transition-colors duration-150"
              >
                <span>GitHub (@axsangerencia-prog)</span>
                <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={PROFILE.ecosystemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#0A0A0A] underline underline-offset-4 decoration-[#D4D4D8] hover:decoration-[#0A0A0A] transition-colors duration-150"
              >
                <span>{UI_COPY.ecosystemBrandLink[lang]}</span>
                <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={PROFILE.dossierRequestWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4 transition-colors duration-150"
              >
                <FileCheck2 className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>{UI_COPY.heroDossierCta[lang]}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Editorial Portrait + Verified Metric Grid */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0.94, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="border border-[#E4E4E7] bg-[#FAFAFA]">
              <div className="relative pt-6 px-6 bg-[#FAFAFA] border-b border-[#E4E4E7] flex justify-center overflow-hidden">
                <SafeImage
                  src={portraitSrc}
                  alt={`${PROFILE.fullName} — ${PROFILE.cip[lang]}`}
                  fallbackLabel={PROFILE.shortName}
                  loading="eager"
                  className="w-full max-w-[340px] h-[300px] sm:h-[330px] object-contain object-bottom"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white">
                <p className="text-xs font-mono-tech text-[#52525B] mb-4">
                  {PROFILE.titlesLine[lang]} · {PROFILE.rnpStatus[lang]}
                </p>
                <div className="grid grid-cols-2 border-t border-l border-[#E4E4E7]">
                  {METRICS.map((m) => (
                    <div
                      key={m.value}
                      className="p-3.5 border-r border-b border-[#E4E4E7] bg-white"
                    >
                      <div className="font-display font-black text-2xl sm:text-[1.75rem] tracking-tight text-[#0A0A0A] font-mono-tech">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-[#0A0A0A] mt-0.5">
                        {m.label[lang]}
                      </div>
                      <div className="text-[11px] text-[#52525B] mt-0.5 leading-snug">
                        {m.detail[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
