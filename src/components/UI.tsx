import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerClassName, title, subtitle, dark, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          "py-24 md:py-32 overflow-hidden",
          dark ? "bg-gray-900 text-white" : "bg-white text-gray-900",
          className
        )}
        {...props}
      >
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
          {(title || subtitle) && (
            <div className="mb-16 max-w-2xl">
              {subtitle && (
                <span className={cn(
                  "block text-[10px] font-bold tracking-[0.4em] uppercase mb-4",
                  dark ? "text-blue-400" : "text-blue-600"
                )}>
                  {subtitle}
                </span>
              )}
              {title && (
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                  {title}
                </h2>
              )}
            </div>
          )}
          {children}
        </div>
      </motion.section>
    );
  }
);

Section.displayName = 'Section';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-blue-600',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    ghost: 'text-gray-900 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4.5 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 rounded-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
