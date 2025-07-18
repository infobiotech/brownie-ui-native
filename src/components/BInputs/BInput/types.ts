import { Dispatch, SetStateAction } from "react";
import { BRadiusKey } from "../../../theme/tokens/spacing";

export interface InputProps {
  value: string | number;
  onChange:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<number>>
    | ((args?: any) => void);
  inputMode?: "email" | "numeric" | "tel" | "text" | "url";
  onBlur?: () => void;
  onFocus?: () => void;
  onPress?: () => void;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  maxLength?: number;
  withMaxLengthLabel?: boolean;
  disabled?: boolean;
  multiline?: boolean;

  width?: number;
  borderRadius?: BRadiusKey;
}
