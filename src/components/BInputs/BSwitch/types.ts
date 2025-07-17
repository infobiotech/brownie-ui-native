import { BColorKey, BColorValue } from '../../../theme/tokens/colors';

export interface SwitchProps {
  action: () => void;
  isOn: boolean;
  disabled?: boolean;
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
}
