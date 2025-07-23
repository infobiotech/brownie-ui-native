import { BColorKey, BColorValue } from "../../theme/tokens/colors";

export interface ProgressBarProps {
  totalTime: number;
  elapsedTime: number;
  color?: BColorKey | BColorValue;
  trackColor?: BColorKey | BColorValue;
  thumbColor?: BColorKey | BColorValue;
  spinnerColor?: BColorKey | BColorValue;
  totalWidth?: number;
  label?: string;
  labelPosition?: "top" | "right" | "bottom" | "left";
  spinner?: boolean;
}
