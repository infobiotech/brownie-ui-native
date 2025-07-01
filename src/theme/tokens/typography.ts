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
  xxs: 13,
  xs: 16,
  sm: 18,
  md: 21,
  lg: 24,
  xl: 30,
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

/**
 * Font families — override as needed per platform or brand
 * Android: normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
 */
export const BFontFamilies = {
  family: Platform.select({
    ios: "System",
    android: "Roboto",
    web: "sans-serif",
    default: "System",
  }),
};

export type BFontSizeValue = (typeof BFontSizes)[keyof typeof BFontSizes];
export type BFontSizeKey = keyof typeof BFontSizes;
export type BFontWeightKey = keyof typeof BFontWeights;

export const getFontSize = (value: BFontSizeKey | number) => {
  return isObjectKey(BFontSizes, value) ? BFontSizes[value] : value;
};
export const getFontWeight = (value: BFontWeightKey | number) => {
  return isObjectKey(BFontWeights, value) ? BFontWeights[value] : value;
};
