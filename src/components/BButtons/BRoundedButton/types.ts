import { BIcons } from "../../../theme/tokens";
import {
  BColorKey,
  BColorValue,
  BColorVariantKey,
} from "../../../theme/tokens/colors";
import { BFontSizeKey } from "../../../theme/tokens/typography";

export interface RoundedButtonProps {
  // logic
  action: () => void;
  disabled?: boolean;
  loading?: boolean;
  // content
  size?: BFontSizeKey;
  icon: BIcons;
  // style
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
  variant?: BColorVariantKey;
  shadow?: "light" | "medium" | "dark";

  style?: any;
  contentStyle?: any;
}
