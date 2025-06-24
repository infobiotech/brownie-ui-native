// theme/defaultTheme.ts

import { BColors } from './tokens/colors';
import { BRadius, BSpacings } from './tokens/spacing';
import { BFontFamilies, BFontSizes, BFontWeights } from './tokens/typography';

export const defaultTheme = {
  themeColor: {
    primary: BColors.violet,
  },
  colors: {
    white: '#F2F3F4',
    black: '#14171A',
    ...BColors,
  },
  spacing: {
    none: 0,
    xxs: BSpacings.xxs,
    xs: BSpacings.xs,
    sm: BSpacings.sm,
    md: BSpacings.md,
    lg: BSpacings.lg,
    xl: BSpacings.xl,
    xxl: BSpacings.xxl,
  },
  radius: {
    sm: BRadius.sm,
    lg: BRadius.lg,
    rounded: BRadius.rounded,
  },
  fontFamilies: {
    family: BFontFamilies.family,
  },
  fontSizes: {
    xxs: BFontSizes.xxs,
    xs: BFontSizes.xs,
    sm: BFontSizes.sm,
    md: BFontSizes.md,
    lg: BFontSizes.lg,
    xl: BFontSizes.xl,
  },
  fontWeights: {
    light: BFontWeights.light,
    regular: BFontWeights.regular,
    medium: BFontWeights.medium,
    semibold: BFontWeights.semibold,
    bold: BFontWeights.bold,
    black: BFontWeights.black,
  },
} as const;

export type Theme = typeof defaultTheme;
