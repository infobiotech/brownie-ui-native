import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { isObjectKey } from ".";

const guidelineBaseWidth = 1100;

export function useScale() {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setScreenWidth(window.width);
    });

    return () => {
      subscription?.remove(); // <-- this is the modern cleanup method
    };
  }, []);

  const scale = (size: number) => (screenWidth / guidelineBaseWidth) * size;

  return { scale };
}

// Static scale function (non-hook version, for tokens)
const screenWidth = Dimensions.get("window").width;
const scale = (size: number) => (screenWidth / guidelineBaseWidth) * size;

export const BRawSpacings = {
  xxs: 3,
  xs: 5,
  sm: 8,
  md: 10,
  lg: 15,
  xl: 20,
  xxl: 40,
};

export const BSpacings = {
  xxs: scale(BRawSpacings.xxs),
  xs: scale(BRawSpacings.xs),
  sm: scale(BRawSpacings.sm),
  md: scale(BRawSpacings.md),
  lg: scale(BRawSpacings.lg),
  xl: scale(BRawSpacings.xl),
  xxl: scale(BRawSpacings.xxl),
};

export const BRadius = {
  sm: 12,
  md: 16,
  lg: 20,
  rounded: 100,
} as const;

export type BSpacingKey = keyof typeof BSpacings;
export type BRadiusKey = keyof typeof BRadius;

export const getSpacing = (value: BSpacingKey | number) => {
  return isObjectKey(BSpacings, value) ? BSpacings[value] : value;
};

export const getRadius = (value: BRadiusKey | number) => {
  return isObjectKey(BRadius, value) ? BRadius[value] : value;
};
