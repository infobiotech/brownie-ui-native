import { Dispatch, SetStateAction } from "react";
import { BIcons } from "../../../theme/tokens";
import {
  BColorKey,
  BColorValue,
  BColorVariantKey,
} from "../../../theme/tokens/colors";
import { BFontSizeKey } from "../../../theme/tokens/typography";

export interface Action {
  icon?: BIcons;
  label?: string;
  action: () => void;
  value: any;
}

export interface ButtonGroupProps {
  // logic
  actions: Action[];
  setter: Dispatch<SetStateAction<any>>;
  active: any;
  disabled?: boolean;
  loading?: boolean;
  // content
  size?: BFontSizeKey;
  fontSize?: BFontSizeKey | number;
  iconSize?: BFontSizeKey | number;
  iconPosition?: "left" | "right";
  // style
  fullwidth?: boolean;
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
  variant?: BColorVariantKey;
  shadow?: "light" | "medium" | "dark";

  style?: any;
  contentStyle?: any;
}
