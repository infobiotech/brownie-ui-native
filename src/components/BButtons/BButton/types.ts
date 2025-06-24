import { ReactNode } from 'react';
import { BIcons } from '../../../theme/tokens';
import {
  BColorKey,
  BColorValue,
  BColorVariantKey,
} from '../../../theme/tokens/colors';
import { BRadiusKey } from '../../../theme/tokens/spacing';
import { BFontSizeValue } from '../../../theme/tokens/typography';

export interface ButtonProps {
  // logic
  action: () => void;
  disabled?: boolean;
  loading?: boolean;
  // content
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: BFontSizeValue;
  iconSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: BIcons;
  iconPosition?: 'left' | 'right';
  children?: ReactNode;
  // style
  fullwidth?: boolean;
  primaryColor?: BColorKey | BColorValue;
  contentColor?: BColorKey | BColorValue;
  variant?: BColorVariantKey;
  borderRadius?: BRadiusKey;
  aspectRatio?: number;
  style?: any;
  contentStyle?: any;
}
