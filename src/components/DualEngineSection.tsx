import { Check, Cpu, ShieldCheck } from 'lucide-react';
import { UI_COPY } from '../data/i18n';
import { COMPETENCIES, PROFILE } from '../data/profile';
import type { Language } from '../types/portfolio';
import { Reveal } from './ui/Reveal';

interface DualEngineSectionProps {
  lang: Language;
}

export function DualEngineSection({ lang }: DualEngineSectionProps) {
  const hseHighlights =
    lang === 'es'
      ? [
          'Colegiatura CIP N.º 264611 habilitada (Capítulo Ing. Química y Ambiental)',
          'Evaluador de Competencias Laborales MTPE (Reg. N.º 202200156)',
          'Profesional Competente SST MTPE/PRL-IM-00040 (Nivel Jefe / Supervisor)',
          'Auditoría e integración ISO 9001, ISO 14001, ISO 45001 e ISO 19011',
          'Trabajos críticos: altura, caliente, confinados, izaje, LOTO y refractarios',
        ]
      : [
          'Active Chartered Engineer CIP No. 264611 (Chemical & Environmental Chapter)',
          'National MTPE Labor Competency Evaluator (Reg. No. 202200156)',
          'MTPE Competent OHS Professional MTPE/PRL-IM-00040 (Chief / Supervisor)',
          'ISO 9001, ISO 14001, ISO 45001 & ISO 19011 auditing and integration',
          'High-risk ops: height, hot work, confined spaces, rigging, LOTO & kilns',
        ];

  const techHighlights =
    lang === 'es'
      ? [
          '4 aplicaciones móviles nativas publicadas en Google Play Store',
          '13 plataformas web PWA en vivo + software nativo Windows 10 & 11 (MYSSA)',
          'Google AI Professional Certificate, Prompting Essentials & AI Essentials',
          'Microsoft Power BI avanzado y automatización empresarial cero-papel',
          'Ingeniería Android (CameraX, ZXing, Biometría, Firebase, Billing) y React/TS',
        ]
      : [
          '4 production Android mobile apps published on Google Play Store',
          '13 live Progressive Web Apps + native Windows 10 & 11 desktop client',
          'Google AI Professional Certificate, Prompting Essentials & AI Essentials',
          'Advanced Microsoft Power BI & paperless enterprise workflow automation',
          'Android Engineering (CameraX, ZXing, Biometrics, Firebase) & React/TypeScript',
        ];

  return (
    <section className="bg-[#FAFAFA] border-b border-[#E4E4E7] py-16 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal>
          <div className="max-w-[70ch] space-y-3">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
              {UI_COPY.dualHeading[lang]}
            </h2>
            <p className="text-base text-[#52525B] leading-relaxed">
              {UI_COPY.dualSubtitle[lang]}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal delay={0.04}>
            <div className="h-full bg-white border border-[#E4E4E7] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A]">
                  {UI_COPY.dualPillar1Title[lang]}
                </h3>
                <ul className="space-y-3">
                  {hseHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#52525B]">
                      <Check
                        className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full bg-white border border-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center">
                  <Cpu className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A]">
                  {UI_COPY.dualPillar2Title[lang]}
                </h3>
                <ul className="space-y-3">
                  {techHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#52525B]">
                      <Check
                        className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 7 Strategic Competencies + INTJ-Te Work Style */}
        <Reveal>
          <div className="bg-white border border-[#E4E4E7] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-5">
              <h3 className="font-display font-bold text-2xl text-[#0A0A0A]">
                {UI_COPY.competenciesHeading[lang]}
              </h3>
              <p className="text-xs font-mono-tech text-[#52525B] max-w-[56ch]">
                {PROFILE.workStyle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
              {COMPETENCIES.map((comp) => (
                <div key={comp.id} className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#0A0A0A]">
                    {comp.title[lang]}
                  </h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">{comp.detail[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
