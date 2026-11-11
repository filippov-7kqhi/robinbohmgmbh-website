import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  /** Interner Link (React Router) */
  to?: string;
  /** Externer Link oder mailto:/tel: */
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  // Goldene Hauptaktion – auf hellem und dunklem Hintergrund
  primary: 'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_14px_32px_-14px_rgba(207,170,90,0.75)]',
  // Konturschaltfläche für dunkle Hintergründe
  secondary: 'border border-white/30 text-white hover:border-gold-300 hover:text-gold-200',
  // Konturschaltfläche für helle Hintergründe
  outline: 'border border-navy-950/20 text-navy-950 hover:border-gold-600 hover:text-gold-700',
  dark: 'bg-navy-950 text-white hover:bg-navy-800',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-[11px]',
  md: 'h-12 px-7 text-[11.5px]',
  lg: 'h-14 px-8 text-xs',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  withArrow = false,
  to,
  href,
  external = false,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[2px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ease-out-expo disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  tone?: 'onLight' | 'onDark';
  className?: string;
}

/** Dezenter Textlink mit Pfeil */
export function ArrowLink({ to, children, tone = 'onLight', className }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.18em] transition-colors duration-300',
        tone === 'onDark' ? 'text-white hover:text-gold-300' : 'text-navy-950 hover:text-gold-700',
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 text-gold-600 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.75}
      />
    </Link>
  );
}
