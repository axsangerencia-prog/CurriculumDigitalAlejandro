import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
  Sparkles,
} from 'lucide-react';
import { FORMAL_EXPERIENCE, FREELANCE_SERVICES } from '../data/experience';
import { UI_COPY } from '../data/i18n';
import type { FreelanceSector, Language, LocalizedText } from '../types/portfolio';
import { Reveal } from './ui/Reveal';

interface ExperienceExplorerProps {
  lang: Language;
}

function normalizeSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

const SECTORS: { id: FreelanceSector; label: LocalizedText }[] = [
  { id: 'all', label: { es: 'Todos (35)', en: 'All (35)' } },
  { id: 'mining', label: { es: 'Minería', en: 'Mining' } },
  { id: 'construction', label: { es: 'Construcción', en: 'Construction' } },
  { id: 'industry-retail', label: { es: 'Industria y Retail', en: 'Industry & Retail' } },
  {
    id: 'training-homologation',
    label: { es: 'Capacitación y Homologación', en: 'Training & Prequalification' },
  },
  { id: 'maritime-fishing', label: { es: 'Marítimo y Pesca', en: 'Maritime & Fishing' } },
];

export function ExperienceExplorer({ lang }: ExperienceExplorerProps) {
  const [activeTab, setActiveTab] = useState<'formal' | 'freelance'>('formal');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-myssa': true,
    'exp-lumat': true,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sector, setSector] = useState<FreelanceSector>('all');
  const [showAllFreelance, setShowAllFreelance] = useState(false);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFreelance = useMemo(() => {
    const q = normalizeSearch(searchTerm);
    return FREELANCE_SERVICES.filter((item) => {
      if (sector !== 'all' && item.sector !== sector) return false;
      if (!q) return true;
      const haystack = normalizeSearch(
        `${item.company} ${item.service.es} ${item.service.en} ${item.number}`,
      );
      return haystack.includes(q);
    });
  }, [searchTerm, sector]);

  const visibleFreelance =
    showAllFreelance || searchTerm.trim() !== '' || sector !== 'all'
      ? filteredFreelance
      : filteredFreelance.slice(0, 10);

  return (
    <section id="trayectoria" className="bg-white border-b border-[#E4E4E7] py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[70ch] space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
                {UI_COPY.trajectoryHeading[lang]}
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                {UI_COPY.trajectorySubtitle[lang]}
              </p>
            </div>

            {/* Mode Tabs */}
            <div role="tablist" className="inline-flex border border-[#0A0A0A] bg-white self-start">
              <button
                role="tab"
                type="button"
                aria-selected={activeTab === 'formal'}
                onClick={() => setActiveTab('formal')}
                className={`h-11 px-4 sm:px-5 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                  activeTab === 'formal'
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-white text-[#0A0A0A] hover:bg-[#F4F4F5]'
                }`}
              >
                {UI_COPY.tabFormal[lang]}
              </button>
              <button
                role="tab"
                type="button"
                aria-selected={activeTab === 'freelance'}
                onClick={() => setActiveTab('freelance')}
                className={`h-11 px-4 sm:px-5 text-xs font-semibold border-l border-[#0A0A0A] transition-colors duration-150 cursor-pointer ${
                  activeTab === 'freelance'
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-white text-[#0A0A0A] hover:bg-[#F4F4F5]'
                }`}
              >
                {UI_COPY.tabFreelance[lang]}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tab 1: 13 Formal Employment Periods */}
        {activeTab === 'formal' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  const allExpanded = FORMAL_EXPERIENCE.every((e) => expandedIds[e.id]);
                  const next: Record<string, boolean> = {};
                  FORMAL_EXPERIENCE.forEach((e) => {
                    next[e.id] = !allExpanded;
                  });
                  setExpandedIds(next);
                }}
                className="text-xs font-semibold text-[#0A0A0A] border border-[#E4E4E7] hover:border-[#0A0A0A] px-3 py-1.5 bg-[#FAFAFA] transition-colors duration-150 cursor-pointer"
              >
                {FORMAL_EXPERIENCE.every((e) => expandedIds[e.id])
                  ? lang === 'es'
                    ? 'Contraer detalles'
                    : 'Collapse details'
                  : lang === 'es'
                    ? 'Expandir todos los 13 cargos'
                    : 'Expand all 13 roles'}
              </button>
            </div>

            <div className="border-t border-[#E4E4E7] divide-y divide-[#E4E4E7]">
              {FORMAL_EXPERIENCE.map((item) => {
                const isOpen = Boolean(expandedIds[item.id]);
                return (
                  <article key={item.id} className="py-5 sm:py-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1.5 max-w-[74ch]">
                        <div className="flex flex-wrap items-center gap-2.5 text-xs">
                          <span className="font-mono-tech font-semibold px-2 py-0.5 bg-[#0A0A0A] text-white">
                            {String(item.order).padStart(2, '0')}
                          </span>
                          <span className="font-mono-tech text-[#52525B]">{item.period[lang]}</span>
                          <span className="text-[#71717A]">|</span>
                          <span className="text-[#52525B] font-medium">{item.sector[lang]}</span>
                        </div>

                        <h3 className="font-display font-bold text-xl text-[#0A0A0A]">
                          {item.role[lang]} — {item.company}
                        </h3>
                        <p className="text-sm text-[#52525B] leading-relaxed">
                          {item.summary[lang]}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {item.featuredLink && (
                          <a
                            href={item.featuredLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 h-9 px-3.5 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-xs font-semibold transition-colors duration-150"
                          >
                            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                            <span>{item.featuredLink.label[lang]}</span>
                            <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleExpanded(item.id)}
                          aria-expanded={isOpen}
                          className="h-9 px-3 border border-[#E4E4E7] hover:border-[#0A0A0A] bg-[#FAFAFA] text-xs font-medium text-[#0A0A0A] inline-flex items-center gap-1 transition-colors duration-150 cursor-pointer"
                        >
                          <span>
                            {isOpen
                              ? lang === 'es'
                                ? 'Ocultar'
                                : 'Hide'
                              : lang === 'es'
                                ? 'Detalle'
                                : 'Details'}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                          )}
                        </button>
                      </div>
                    </div>

                    {isOpen && (
                      <ul className="mt-4 pl-4 border-l-2 border-[#0A0A0A] space-y-2 max-w-[74ch]">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-[#52525B] leading-relaxed">
                            {resp[lang]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: 35 Freelance Consulting Services */}
        {activeTab === 'freelance' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={UI_COPY.searchFreelancePlaceholder[lang]}
                  className="w-full h-11 pl-10 pr-4 border border-[#E4E4E7] focus:border-[#0A0A0A] bg-[#FAFAFA] text-sm text-[#0A0A0A] placeholder:text-[#71717A] outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {SECTORS.map((s) => {
                  const active = sector === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSector(s.id)}
                      className={`h-11 px-3 border text-xs font-medium transition-colors duration-150 cursor-pointer ${
                        active
                          ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                          : 'border-[#E4E4E7] bg-white text-[#0A0A0A] hover:border-[#0A0A0A]'
                      }`}
                    >
                      {s.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {filteredFreelance.length === 0 ? (
              <div className="border border-[#E4E4E7] bg-[#FAFAFA] p-10 text-center space-y-3">
                <p className="font-display font-bold text-lg text-[#0A0A0A]">
                  {UI_COPY.noResultsTitle[lang]}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSector('all');
                  }}
                  className="h-10 px-4 bg-[#0A0A0A] text-white text-xs font-semibold cursor-pointer"
                >
                  {UI_COPY.resetFilters[lang]}
                </button>
              </div>
            ) : (
              <>
                <div className="border border-[#E4E4E7] divide-y divide-[#E4E4E7]">
                  {visibleFreelance.map((srv) => (
                    <div
                      key={srv.number}
                      className="p-4 sm:p-5 bg-white hover:bg-[#FAFAFA] transition-colors duration-150 grid grid-cols-1 md:grid-cols-12 gap-3 items-start"
                    >
                      <div className="md:col-span-4 flex items-start gap-3">
                        <span className="font-mono-tech text-xs font-semibold px-2 py-0.5 border border-[#0A0A0A] text-[#0A0A0A] shrink-0">
                          {String(srv.number).padStart(2, '0')}
                        </span>
                        <span className="font-display font-bold text-sm text-[#0A0A0A]">
                          {srv.company}
                        </span>
                      </div>
                      <div className="md:col-span-8 text-sm text-[#52525B] leading-relaxed">
                        {srv.service[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                {searchTerm.trim() === '' && sector === 'all' && filteredFreelance.length > 10 && (
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => setShowAllFreelance((prev) => !prev)}
                      className="h-11 px-6 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold transition-colors duration-150 cursor-pointer"
                    >
                      {showAllFreelance
                        ? UI_COPY.showCompactFreelance[lang]
                        : UI_COPY.showAllFreelance[lang]}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
