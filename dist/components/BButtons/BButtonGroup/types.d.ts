import { Dispatch, SetStateAction } from 'react';
import { BIcons } from '../../../theme/tokens';
import { BColorKey, BColorValue, BColorVariantKey } from '../../../theme/tokens/colors';
import { BRadiusKey } from '../../../theme/tokens/spacing';
import { BFontSizeValue } from '../../../theme/tokens/typography';
export interface Action {
    icon?: BIcons;
    label?: string;
    action: () => void;
    value: any;
}
export interface ButtonGroupProps {
    actions: Action[];
    setter: Dispatch<SetStateAction<any>>;
    active: any;
    disabled?: boolean;
    loading?: boolean;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fontSize?: BFontSizeValue;
    iconSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    iconPosition?: 'left' | 'right';
    fullwidth?: boolean;
    primaryColor?: BColorKey | BColorValue;
    contentColor?: BColorKey | BColorValue;
    variant?: BColorVariantKey;
    borderRadius?: BRadiusKey;
    style?: any;
    contentStyle?: any;
}
