import { cn } from '../../lib/cn';
import { asset } from '../../lib/paths';

interface ImageFrameProps {
  src: string;
  alt: string;
  /** Tailwind-Klasse für das Seitenverhältnis, z. B. "aspect-[4/5]" */
  aspect?: string;
  /** Seite, auf der der goldene Versatzrahmen erscheint */
  frame?: 'left' | 'right';
  className?: string;
  imgClassName?: string;
}

/** Bild mit versetztem goldenem Rahmen – zentrales Gestaltungselement der Website. */
export function ImageFrame({ src, alt, aspect = 'aspect-[4/5]', frame = 'right', className, imgClassName }: ImageFrameProps) {
  return (
    <div className={cn('relative', className)}>
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 translate-y-4 border border-gold-500/50 sm:translate-y-5',
          frame === 'right' ? 'translate-x-4 sm:translate-x-5' : '-translate-x-4 sm:-translate-x-5',
        )}
      />
      <div className={cn('relative overflow-hidden bg-navy-900', aspect)}>
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            'h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo hover:scale-[1.04]',
            imgClassName,
          )}
        />
      </div>
    </div>
  );
}
