import { isObjectKey, isObjectValue } from ".";

export const BColors = {
  white: ["#f4f5f6", "#f7f8fa", "#f9f7fa"],
  black: ["#171717", "#232629", "#1a1a1a"],
  gray: ["#656565", "#b2b2b2", "#e7e7e7"],
  red: ["#d8070b", "#fba0a0", "#ffd1d1"],
  orange: ["#fc8a08", "#fed09b", "#ffe8cc"],
  yellow: ["#ffd20c", "#fffbcb", "#fffde1"],
  green: ["#2bdd66", "#a8f2c0", "#d3f9e0"],
  turquoise: ["#24ddcb", "#a5f2ea", "#cffaf6"],
  // blue: ["#0064e4", "#9ac7ff", "#cde5ff"],
  blue: ["#2F27CE", "#9ac7ff", "#DCE8FF"],
  violet: ["#7b2eda", "#caaaf1", "#e7d6fb"],
  pink: ["#FF0090", "#ff9bd4", "#ffceec"],
};

export const BColorVariants = {
  filled: "filled",
  light: "light",
  outline: "outline",
} as const;

export type BColorValue = (typeof BColors)[keyof typeof BColors];
export type BColorKey = keyof typeof BColors;
export type BColorVariantKey = keyof typeof BColorVariants;

export const getColor = (
  value: BColorKey | BColorValue | string,
  index = 0
) => {
  return isObjectValue(BColors, value)
    ? value[index]
    : isObjectKey(BColors, value)
    ? BColors[value][index]
    : value;
};
