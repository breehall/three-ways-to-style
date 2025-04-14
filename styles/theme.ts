import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#e276d8',
    secondary: '#ffbbcb',
    empty: '#e276d8',
  },
};

// Optional dark theme
export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#0196fe',
    secondary: '#cbccfe',
    empty: '#0196fe',
  },
};

export type Theme = typeof defaultTheme;
