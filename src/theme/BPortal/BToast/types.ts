import { BColorKey, BColorValue } from "../../tokens/colors";
import { BRadiusKey } from "../../tokens/spacing";

export interface ToastProps {
  title: string;
  description: string;
  timeout?: number;
  disruptive?: boolean;
  borderRadius?: BRadiusKey | number;
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
}
