import { ReactNode } from 'react';
import { BIcons } from '../../../theme/tokens';
import { BColorKey, BColorValue, BColorVariantKey } from '../../../theme/tokens/colors';
import { BRadiusKey } from '../../../theme/tokens/spacing';
import { BFontSizeValue } from '../../../theme/tokens/typography';
export interface ButtonProps {
    action: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fontSize?: BFontSizeValue;
    iconSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    icon?: BIcons;
    iconPosition?: 'left' | 'right';
    children?: ReactNode;
    fullwidth?: boolean;
    primaryColor?: BColorKey | BColorValue;
    contentColor?: BColorKey | BColorValue;
    variant?: BColorVariantKey;
    borderRadius?: BRadiusKey;
    aspectRatio?: number;
    style?: any;
    contentStyle?: any;
}
