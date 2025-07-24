import { Dimensions, Platform } from "react-native";
import { isObjectKey } from ".";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const guidelineBaseWidth = 600;
const guidelineBaseWidth = 1100;

export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * Raw font sizes — unscaled, design-system based.
 */
export const RawFontSizes = {
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 21,
  xl: 24,
};

/**
 * Scaled font sizes — ready for use in components.
 */
export const BFontSizes = {
  xxs: scale(RawFontSizes.xxs),
  xs: scale(RawFontSizes.xs),
  sm: scale(RawFontSizes.sm),
  md: scale(RawFontSizes.md),
  lg: scale(RawFontSizes.lg),
  xl: scale(RawFontSizes.xl),
};

/**
 * Font weights — mapped to platform-specific or custom names
 */
export const BFontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
};

const baseFont = Platform.select({
  ios: "System",
  android: "Roboto",
  web: "sans-serif",
  default: "System",
});
/**
 * Font families — override as needed per platform or brand
 * Android: normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
 */
export const BFontFamilies: Record<string, string> = {
  family: baseFont,
};

export type BFontSizeValue = (typeof BFontSizes)[keyof typeof BFontSizes];
export type BFontSizeKey = keyof typeof BFontSizes;
export type BFontWeightKey = keyof typeof BFontWeights;
export type BFontWeightValue = (typeof BFontWeights)[keyof typeof BFontWeights];

export const getFontSize = (value: BFontSizeKey | number) => {
  return isObjectKey(BFontSizes, value) ? BFontSizes[value] : value;
};
export const getFontWeight = (value: BFontWeightKey | number) => {
  return isObjectKey(BFontWeights, value) ? BFontWeights[value] : value;
};
export const isCustomFontFamily = (fontFamilies: Record<string, string>) => {
  return fontFamilies.family !== baseFont;
};

export const getCustomWeight = (
  value: BFontWeightKey | BFontWeightValue | number,
  fontFamilies: Record<string, string>
) => {
  let weight;
  if (isObjectKey(BFontWeights, value)) {
    weight = value;
  } else {
    for (const key in BFontWeights) {
      if (BFontWeights[key as BFontWeightKey] === value) {
        weight = key as BFontWeightKey;
        break;
      }
    }
  }

  return fontFamilies[weight as string];
};
