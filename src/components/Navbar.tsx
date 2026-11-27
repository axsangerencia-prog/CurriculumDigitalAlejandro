import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { UI_COPY } from '../data/i18n';
import { PROFILE } from '../data/profile';
import type { Language } from '../types/portfolio';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cvHref = `${import.meta.env.BASE_URL}${PROFILE.sanitizedCvPath}`;

  const links = [
    { href: '#inicio', label: UI_COPY.navHome[lang] },
    { href: '#apps', label: UI_COPY.navApps[lang] },
    { href: '#ecosistema', label: UI_COPY.navEcosystem[lang] },
    { href: '#trayectoria', label: UI_COPY.navTrajectory[lang] },
    { href: '#credenciales', label: UI_COPY.navCredentials[lang] },
    { href: '#habilidades', label: UI_COPY.navSkills[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E4E4E7]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3 min-w-0 group"
          onClick={() => setMobileOpen(false)}
        >
          <span className="w-8 h-8 shrink-0 bg-[#0A0A0A] text-white font-display font-extrabold text-xs tracking-tight flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            AC
          </span>
          <span className="flex flex-col min-w-0">
            <span className="font-display font-bold text-sm text-[#0A0A0A] truncate leading-tight">
              {PROFILE.shortName}
            </span>
            <span className="font-mono-tech text-[11px] text-[#52525B] leading-tight">
              {UI_COPY.navBrandSub[lang]}
            </span>
          </span>
        </a>

        <nav aria-label={UI_COPY.navMainAria[lang]} className="hidden lg:flex items-center gap-6">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#52525B] hover:text-[#0A0A0A] transition-colors duration-150 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="ES / EN"
            className="h-9 px-3 border border-[#E4E4E7] bg-white hover:border-[#0A0A0A] text-xs font-mono-tech font-medium text-[#0A0A0A] transition-colors duration-150 cursor-pointer"
          >
            <span className={lang === 'es' ? 'font-bold underline underline-offset-4' : 'text-[#71717A]'}>
              ES
            </span>
            <span className="mx-1 text-[#A1A1AA]">/</span>
            <span className={lang === 'en' ? 'font-bold underline underline-offset-4' : 'text-[#71717A]'}>
              EN
            </span>
          </button>

          <a
            href={cvHref}
            download="CV-Ejecutivo-Alejandro-Carrasco.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold transition-colors duration-150 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>{UI_COPY.navDownloadCv[lang]}</span>
          </a>

          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center h-9 px-4 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-xs font-semibold transition-colors duration-150 whitespace-nowrap"
          >
            {UI_COPY.navHire[lang]}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? UI_COPY.navCloseMenu[lang] : UI_COPY.navOpenMenu[lang]}
            className="lg:hidden h-9 w-9 border border-[#E4E4E7] flex items-center justify-center text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors duration-150 cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t border-[#E4E4E7] bg-white px-4 py-4 space-y-2"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setMobileOpen(false);
          }}
        >
          <nav className="flex flex-col gap-1" aria-label={UI_COPY.navMobileAria[lang]}>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-2 text-sm font-medium text-[#0A0A0A] hover:bg-[#F4F4F5] transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E4E4E7] flex flex-wrap gap-2">
            <a
              href={cvHref}
              download="CV-Ejecutivo-Alejandro-Carrasco.pdf"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-3 border border-[#0A0A0A] text-xs font-semibold text-[#0A0A0A]"
            >
              <Download className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>{UI_COPY.navDownloadCv[lang]}</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center h-10 px-4 bg-[#0A0A0A] text-white text-xs font-semibold"
            >
              {UI_COPY.navHire[lang]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
