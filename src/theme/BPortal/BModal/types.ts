import { ReactNode } from "react";
import { BColorKey, BColorValue, BColorVariantKey } from "../../tokens/colors";
import { BRadiusKey } from "../../tokens/spacing";

export interface ModalProps {
  title: string;
  confirmAction?: () => void;
  cancelAction?: () => void;
  cancelIconPosition?: "top" | "bottom";
  // visible?: boolean;
  confirmLabel?: string;
  confirmColor?: BColorKey | BColorValue;
  cancelLabel?: string;
  cancelColor?: BColorKey | BColorValue;
  buttonsVariant?: BColorVariantKey;
  disruptive?: boolean;
  borderRadius?: BRadiusKey | number;
  modalBackgroundColor?: BColorKey | BColorValue | string;
  overlayColor?: BColorKey | BColorValue | string;
  children?: ReactNode;
}
