import { BColorKey, BColorValue } from "../../theme/tokens/colors";
// import { BSpacingKey } from '../../theme/tokens/spacing';

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  length?: Measurements;
  fullLength?: boolean;
  color?: BColorKey | BColorValue | string;
  thickness?: number;
}

type Measurements =
  | number
  | `${number}vw`
  | `${number}vh`
  | `${number}%`
  | "auto"
  | "fit-content";
