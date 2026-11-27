import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { UI_COPY } from '../../data/i18n';
import type { Language } from '../../types/portfolio';
import { SafeImage } from './SafeImage';

export interface LightboxSlide {
  url: string;
  caption: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  slides: LightboxSlide[];
  activeIndex: number;
  title: string;
  lang: Language;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  slides,
  activeIndex,
  title,
  lang,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 10);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && slides.length > 1) {
        onChangeIndex((activeIndex + 1) % slides.length);
      } else if (e.key === 'ArrowLeft' && slides.length > 1) {
        onChangeIndex((activeIndex - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, activeIndex, slides.length, onClose, onChangeIndex]);

  if (!isOpen || slides.length === 0) return null;

  const current = slides[activeIndex] ?? slides[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-white border border-[#0A0A0A] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#E4E4E7] bg-white">
          <div className="min-w-0 pr-4">
            <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] truncate">
              {title}
            </h4>
            <p className="text-xs text-[#52525B] truncate">{current.caption}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {slides.length > 1 && (
              <span className="font-mono-tech text-xs text-[#52525B]">
                {activeIndex + 1} / {slides.length}
              </span>
            )}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label={UI_COPY.closeModal[lang]}
              className="h-9 w-9 border border-[#E4E4E7] hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center text-[#0A0A0A] transition-colors duration-150 cursor-pointer"
            >
              <X className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative bg-[#FAFAFA] flex items-center justify-center min-h-[280px] sm:min-h-[440px] max-h-[75vh] p-4">
          <SafeImage
            src={current.url}
            alt={current.caption}
            fallbackLabel={title}
            loading="eager"
            className="max-h-[68vh] w-auto max-w-full object-contain border border-[#E4E4E7] bg-white"
          />

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onChangeIndex((activeIndex - 1 + slides.length) % slides.length)}
                aria-label={UI_COPY.appsPrevShot[lang]}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onChangeIndex((activeIndex + 1) % slides.length)}
                aria-label={UI_COPY.appsNextShot[lang]}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
