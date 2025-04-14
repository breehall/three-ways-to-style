/**
 * Button component using CSS Modules for styling
 *
 * Features:
 * - Three variants: primary, secondary, and empty
 * - Two sizes: small and medium
 * - Support for loading state with spinner
 * - Support for disabled state
 * - Optional icon support
 */

import { ButtonProps } from '@/types/button';
import { Spinner } from '@/components/tailwind/spinner';
import { tv } from 'tailwind-variants';

/**
 * Compose button styles using Tailwind Variants - a library that allows you to create variants for your components.
 */
const button = tv({
  base: [
    'inline-flex items-center justify-center gap-2  rounded',
    'relative transition-all duration-200 cursor-pointer',
    'focus-visible:shadow-[0_0_0_2px_rgba(226,118,216,0.4)]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  ],
  variants: {
    variant: {
      primary: [
        'bg-miami-pink text-black ',
        'enabled:hover:bg-miami-pink/50 enabled:hover:border-miami-pink/50',
      ],
      secondary: [
        'bg-baby-pink text-black',
        'enabled:hover:bg-baby-pink/50 enabled:hover:border-baby-pink/50',
      ],
      empty: [
        'bg-transparent text-miami-pink border border-miami-pink',
        'underline',
        'enabled:hover:bg-[rgba(226,118,216,0.1)]',
      ],
    },
    size: {
      small: 'h-6 text-sm px-3',
      medium: 'h-8 text-base px-4',
    },
    withIcon: {
      true: 'pl-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const TailwindButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={button({ variant, size, withIcon: !!icon })}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <Spinner />
      ) : (
        icon && (
          <span className="flex items-center justify-center flex-shrink-0">
            {icon}
          </span>
        )
      )}
      <span className="inline-block whitespace-nowrap">{children}</span>
    </button>
  );
};

export default TailwindButton;
