import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#EBF3FC]',
  priority = false,
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EBF3FC] via-[#FAFBFD] to-[#F2EEFA] border border-[#162038]/10"
          role="img"
          aria-label={alt}
        >
          <div className="w-12 h-12 rounded-full border border-[#C59B52]/40 flex items-center justify-center mb-3 text-[#96702B]">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="font-serif text-lg font-semibold text-[#162038] max-w-sm">
            {fallbackTitle || 'Paris Magic Plan · Fotografía Editorial'}
          </p>
          <p className="text-xs text-[#42506B] mt-1 max-w-xs">{alt}</p>
        </div>
      )}
    </div>
  );
};
