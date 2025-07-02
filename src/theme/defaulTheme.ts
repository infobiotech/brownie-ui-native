// theme/defaultTheme.ts

import { BColors } from "./tokens/colors";
import { BRadius, BSpacings } from "./tokens/spacing";
import { BFontFamilies, BFontSizes, BFontWeights } from "./tokens/typography";

export const defaultTheme = {
  themeColor: {
    primary: BColors.violet,
  },
  colors: {
    ...BColors,
  },
  spacing: {
    ...BSpacings,
  },
  radius: {
    ...BRadius,
  },
  fontFamilies: {
    ...BFontFamilies,
  },
  fontSizes: {
    ...BFontSizes,
  },
  fontWeights: {
    ...BFontWeights,
  },
} as const;

export type Theme = typeof defaultTheme;
