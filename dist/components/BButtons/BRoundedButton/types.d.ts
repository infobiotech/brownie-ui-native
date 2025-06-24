import { BIcons } from '../../../theme/tokens';
import { BColorKey, BColorValue, BColorVariantKey } from '../../../theme/tokens/colors';
export interface RoundedButtonProps {
    action: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon: BIcons;
    primaryColor?: BColorKey | BColorValue;
    contentColor?: BColorKey | BColorValue;
    variant?: BColorVariantKey;
    style?: any;
    contentStyle?: any;
}
