import { defaultTheme, Theme } from "./defaulTheme";

export const createTheme = (overrides: Partial<Theme>): Theme => ({
  // ...defaultTheme,
  themeColor: { ...defaultTheme.themeColor, ...overrides.themeColor },
  colors: {
    ...defaultTheme.colors,
    ...overrides.colors,
  },
  spacing: {
    ...defaultTheme.spacing,
    ...overrides.spacing,
  },
  radius: {
    ...defaultTheme.radius,
    ...overrides.radius,
  },
  fontFamilies: { ...defaultTheme.fontFamilies, ...overrides.fontFamilies },
  fontSizes: {
    ...defaultTheme.fontSizes,
    ...overrides.fontSizes,
  },
  fontWeights: {
    ...defaultTheme.fontWeights,
    ...overrides.fontWeights,
  },
});
