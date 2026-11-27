import { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  compact?: boolean;
}

function getMonogram(label: string): string {
  const words = label
    .trim()
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w));
  if (words.length === 0) return 'AC';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}

export function SafeImage({
  src,
  alt,
  fallbackLabel,
  className = '',
  loading = 'lazy',
  compact = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    if (compact) {
      return (
        <div
          className={`flex items-center justify-center bg-[#FAFAFA] border border-[#E4E4E7] text-[#0A0A0A] p-1 text-center select-none ${className}`}
          role="img"
          aria-label={alt || fallbackLabel}
        >
          <span className="font-mono-tech text-xs font-bold tracking-tight">
            {getMonogram(fallbackLabel)}
          </span>
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B] p-6 text-center min-h-[200px] w-full ${className}`}
        role="img"
        aria-label={alt || fallbackLabel}
      >
        <Layers className="w-7 h-7 text-[#0A0A0A] mb-2" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-mono-tech text-xs text-[#0A0A0A] font-medium max-w-[24ch] break-words">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
