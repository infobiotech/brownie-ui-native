import { BIcons } from "../../../theme/tokens";
import { BColorKey, BColorValue, BColorVariantKey } from "../../../theme/tokens/colors";
import { BFontSizeKey } from "../../../theme/tokens/typography";
export interface RoundedButtonProps {
    action: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: BFontSizeKey;
    icon: BIcons;
    primaryColor?: BColorKey | BColorValue;
    contentColor?: BColorKey | BColorValue;
    variant?: BColorVariantKey;
    style?: any;
    contentStyle?: any;
}
