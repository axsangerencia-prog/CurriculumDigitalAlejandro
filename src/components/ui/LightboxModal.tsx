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

function getFocusable(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
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
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const onCloseRef = useRef(onClose);
  const onChangeIndexRef = useRef(onChangeIndex);
  const activeIndexRef = useRef(activeIndex);
  const slidesLenRef = useRef(slides.length);

  onCloseRef.current = onClose;
  onChangeIndexRef.current = onChangeIndex;
  activeIndexRef.current = activeIndex;
  slidesLenRef.current = slides.length;

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
        onCloseRef.current();
      } else if (e.key === 'ArrowRight' && slidesLenRef.current > 1) {
        onChangeIndexRef.current((activeIndexRef.current + 1) % slidesLenRef.current);
      } else if (e.key === 'ArrowLeft' && slidesLenRef.current > 1) {
        onChangeIndexRef.current(
          (activeIndexRef.current - 1 + slidesLenRef.current) % slidesLenRef.current,
        );
      } else if (e.key === 'Tab') {
        const focusable = getFocusable(dialogRef.current);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen || slides.length === 0) return null;

  const current = slides[activeIndex] ?? slides[0];

  return (
    <div
      ref={dialogRef}
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
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#E4E4E7] bg-white gap-3">
          <div className="min-w-0">
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
              className="h-9 w-9 shrink-0 border border-[#E4E4E7] hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white flex items-center justify-center text-[#0A0A0A] transition-colors duration-150 cursor-pointer"
            >
              <X className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative bg-[#FAFAFA] flex items-center justify-center min-h-[280px] sm:min-h-[440px] max-h-[75vh] p-4">
          <div className="w-full max-w-3xl min-h-[240px] sm:min-h-[380px] flex items-center justify-center">
            <SafeImage
              src={current.url}
              alt={current.caption}
              fallbackLabel={`${title} — ${current.caption}`}
              loading="eager"
              className="max-h-[68vh] w-auto max-w-full object-contain border border-[#E4E4E7] bg-white"
            />
          </div>

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
