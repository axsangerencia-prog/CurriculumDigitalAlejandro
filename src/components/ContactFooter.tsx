import { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { UI_COPY } from '../data/i18n';
import { PROFILE } from '../data/profile';
import type { Language } from '../types/portfolio';

interface ContactFooterProps {
  lang: Language;
}

export function ContactFooter({ lang }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);
  const cvHref = `${import.meta.env.BASE_URL}${PROFILE.sanitizedCvPath}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <footer id="contacto" className="bg-white pt-16 sm:pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border border-[#0A0A0A] bg-[#FAFAFA] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-2.5 py-1 bg-[#0A0A0A] text-white font-mono-tech text-xs">
                {PROFILE.cip[lang]}
              </span>
              <span className="inline-block px-2.5 py-1 border border-[#E4E4E7] bg-white text-[#0A0A0A] text-xs font-medium">
                {PROFILE.location[lang]}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A]">
              {UI_COPY.contactHeading[lang]}
            </h2>
            <p className="text-base text-[#52525B] leading-relaxed max-w-[66ch]">
              {UI_COPY.contactSubtitle[lang]}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 bg-[#0A0A0A] text-white hover:bg-[#27272A] text-sm font-semibold inline-flex items-center justify-between transition-colors duration-150"
            >
              <span className="inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                <span>WhatsApp · {PROFILE.phoneDisplay}</span>
              </span>
              <ExternalLink className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <div className="flex gap-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex-1 h-12 px-4 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 min-w-0 transition-colors duration-150"
              >
                <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span className="truncate">{PROFILE.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={copied ? UI_COPY.copiedEmail[lang] : UI_COPY.copyEmail[lang]}
                className="h-12 px-4 border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 transition-colors duration-150 cursor-pointer"
              >
                {copied ? (
                  <Check className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Copy className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                )}
                <span>{copied ? UI_COPY.copiedEmail[lang] : UI_COPY.copyEmail[lang]}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <a
                href={cvHref}
                download="CV-Ejecutivo-Alejandro-Carrasco.pdf"
                className="h-11 px-4 border border-[#E4E4E7] bg-white hover:border-[#0A0A0A] text-xs font-semibold text-[#0A0A0A] inline-flex items-center justify-center gap-1.5 transition-colors duration-150"
              >
                <Download className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>{UI_COPY.heroSecondaryCta[lang]}</span>
              </a>

              <a
                href={PROFILE.dossierRequestWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 border border-[#E4E4E7] bg-white hover:border-[#0A0A0A] text-xs font-semibold text-[#0A0A0A] inline-flex items-center justify-center gap-1.5 transition-colors duration-150"
              >
                <FileText className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {lang === 'es' ? 'Solicitar Dossier v35' : 'Request v35 Dossier'}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E4E4E7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#52525B]">
          <div>
            <span className="font-semibold text-[#0A0A0A]">{PROFILE.fullName}</span> —{' '}
            <span>{PROFILE.cip[lang]}</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A0A0A] underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A0A0A] underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={PROFILE.ecosystemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A0A0A] underline underline-offset-4"
            >
              {UI_COPY.ecosystemBrandLink[lang]}
            </a>
            <a
              href={PROFILE.dossierRequestMailto}
              className="hover:text-[#0A0A0A] underline underline-offset-4"
            >
              {lang === 'es' ? 'Solicitar v35 por correo' : 'Email for v35 Dossier'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
