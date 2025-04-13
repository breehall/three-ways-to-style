'use client';

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

import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariant, ButtonSize } from '@/types/button';

/**
 * Get the variant styles for the button
 */
const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: #e276d8;
        color: black;
        border: 1px solid #e276d8;
      `;
    case 'secondary':
      return css`
        background-color: #ffbbcb;
        color: black;
        border: 1px solid #ffbbcb;
      `;
    case 'empty':
      return css`
        background-color: transparent;
        color: #e276d8;
        border: 1px solid #e276d8;
        text-decoration: underline;
      `;
  }
};

/**
 * Get the size styles for the button
 */
const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        height: 24px;
        font-size: 14px;
        padding: 0 12px;
      `;
    case 'medium':
      return css`
        height: 32px;
        font-size: 16px;
        padding: 0 16px;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 0.2s ease;
  gap: 8px;

  ${(props) => getVariantStyles(props.variant || 'primary')}
  ${(props) => getSizeStyles(props.size || 'medium')}

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;

const LoadingSpinner = styled.svg`
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledComponentsButton = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  icon,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {icon && icon}
      {loading ? (
        <LoadingSpinner
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10"
          />
        </LoadingSpinner>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default StyledComponentsButton;
