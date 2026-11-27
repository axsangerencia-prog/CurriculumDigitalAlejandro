import { useState } from 'react';
import { Layers } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function SafeImage({
  src,
  alt,
  fallbackLabel,
  className = '',
  loading = 'lazy',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
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
