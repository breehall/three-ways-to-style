import { ReactNode, MouseEvent } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'empty';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
