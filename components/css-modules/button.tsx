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

import { ButtonProps } from '../../types/button';
import styles from './button.module.css';
import classNames from 'classnames';

const BUTTON_VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary,
  empty: styles.empty,
} as const;

const BUTTON_SIZES = {
  small: styles.small,
  medium: styles.medium,
} as const;

const CSSModulesButton = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  children,
  onClick,
}: ButtonProps) => {
  // Combine CSS classes using classnames library
  // This provides a clean way to conditionally apply styles
  const buttonClasses = classNames(
    styles.button,
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    {
      [styles.disabled]: disabled || loading,
      [styles.loading]: loading,
      [styles.withIcon]: Boolean(icon) && !loading,
    }
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        icon && <span className={styles.icon}>🌴</span>
      )}
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default CSSModulesButton;
