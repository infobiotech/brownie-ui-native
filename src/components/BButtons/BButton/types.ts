import { ReactNode } from "react";
import { BIcons } from "../../../theme/tokens";
import {
  BColorKey,
  BColorValue,
  BColorVariantKey,
} from "../../../theme/tokens/colors";
import { BRadiusKey } from "../../../theme/tokens/spacing";
import { BFontSizeKey } from "../../../theme/tokens/typography";

export interface ButtonProps {
  // logic
  action: () => void;
  disabled?: boolean;
  loading?: boolean;
  // content
  fullwidth?: boolean;
  size?: BFontSizeKey;
  fontSize?: BFontSizeKey | number;
  iconSize?: BFontSizeKey | number;
  icon?: BIcons;
  iconPosition?: "left" | "right";
  children?: ReactNode;
  // style
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
  variant?: BColorVariantKey;
  borderRadius?: BRadiusKey | number;
  aspectRatio?: number;
  shadow?: "light" | "medium" | "dark";

  style?: any;
  contentStyle?: any;
}
