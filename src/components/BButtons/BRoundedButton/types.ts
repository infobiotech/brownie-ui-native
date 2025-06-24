import { BIcons } from '../../../theme/tokens';
import {
  BColorKey,
  BColorValue,
  BColorVariantKey,
} from '../../../theme/tokens/colors';

export interface RoundedButtonProps {
  // logic
  action: () => void;
  disabled?: boolean;
  loading?: boolean;
  // content
  size?: 'sm' | 'md' | 'lg';
  icon: BIcons;
  // style
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
  variant?: BColorVariantKey;
  style?: any;
  contentStyle?: any;
}
