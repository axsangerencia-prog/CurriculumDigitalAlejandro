import { BookOpen, Camera } from 'lucide-react';
import { UI_COPY } from '../data/i18n';
import {
  AUDIOVISUAL_GEAR,
  HOBBIES,
  PRODUCTION_TECH_TAGS,
  SOFTWARE_SKILLS,
} from '../data/profile';
import type { Language } from '../types/portfolio';
import { Reveal } from './ui/Reveal';

interface SkillsMediaSectionProps {
  lang: Language;
}

export function SkillsMediaSection({ lang }: SkillsMediaSectionProps) {
  return (
    <section id="habilidades" className="bg-white border-b border-[#E4E4E7] py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal>
          <div className="max-w-[70ch] space-y-3">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
              {UI_COPY.skillsHeading[lang]}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 12 Official Software Matrix + Modern Dev Tags */}
          <div className="lg:col-span-7 border border-[#E4E4E7] bg-[#FAFAFA] p-6 sm:p-8 space-y-6">
            <h3 className="font-display font-bold text-xl text-[#0A0A0A]">
              {UI_COPY.softwareTitle[lang]}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#E4E4E7] bg-white">
              {SOFTWARE_SKILLS.map((sw) => (
                <div
                  key={sw.order}
                  className="p-3.5 border-r border-b border-[#E4E4E7] flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono-tech text-[11px] text-[#71717A]">
                      {String(sw.order).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-semibold text-[#0A0A0A] truncate">
                      {sw.name}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 font-mono-tech text-[11px] shrink-0 ${
                      sw.level.es === 'Avanzado'
                        ? 'bg-[#0A0A0A] text-white'
                        : 'bg-[#F4F4F5] text-[#0A0A0A] border border-[#E4E4E7]'
                    }`}
                  >
                    {sw.level[lang]}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold text-[#0A0A0A]">
                {lang === 'es'
                  ? 'Stack de desarrollo en producción'
                  : 'Production Engineering Stack'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PRODUCTION_TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-[#E4E4E7] bg-white font-mono-tech text-xs text-[#0A0A0A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Audiovisual (DJI / GoPro / Adobe) + Hobbies */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#E4E4E7] bg-white p-6 space-y-5">
              <div className="flex items-center gap-2.5">
                <Camera className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="font-display font-bold text-xl text-[#0A0A0A]">
                  {UI_COPY.audiovisualTitle[lang]}
                </h3>
              </div>
              <div className="space-y-4 divide-y divide-[#E4E4E7]">
                {AUDIOVISUAL_GEAR.map((gear, i) => (
                  <div key={gear.id} className={i > 0 ? 'pt-4 space-y-1.5' : 'space-y-1.5'}>
                    <h4 className="font-display font-bold text-sm text-[#0A0A0A]">{gear.name}</h4>
                    <div className="text-xs font-semibold text-[#52525B]">{gear.role[lang]}</div>
                    <p className="text-sm text-[#52525B] leading-relaxed">{gear.details[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#E4E4E7] bg-[#FAFAFA] p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="font-display font-bold text-xl text-[#0A0A0A]">
                  {UI_COPY.hobbiesTitle[lang]}
                </h3>
              </div>
              <ul className="space-y-3">
                {HOBBIES.map((hb) => (
                  <li key={hb.order} className="flex items-start gap-2.5 text-sm text-[#52525B]">
                    <span className="font-mono-tech text-xs font-semibold text-[#0A0A0A] shrink-0 mt-0.5">
                      {String(hb.order).padStart(2, '0')}.
                    </span>
                    <span>{hb.text[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
