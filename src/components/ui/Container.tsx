import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'default' | 'narrow' | 'wide';
}

const sizes = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-8xl',
};

export function Container({ children, className, as: Tag = 'div', size = 'default' }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', sizes[size], className)}>{children}</Tag>;
}
