import { Dispatch, SetStateAction } from "react";
import { BIcons } from "../../../theme/tokens";
import { BColorKey, BColorValue, BColorVariantKey } from "../../../theme/tokens/colors";
import { BFontSizeKey } from "../../../theme/tokens/typography";
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
    size?: BFontSizeKey;
    fontSize?: BFontSizeKey | number;
    iconSize?: BFontSizeKey | number;
    iconPosition?: "left" | "right";
    fullwidth?: boolean;
    primaryColor?: BColorKey | BColorValue;
    contentColor?: BColorKey | BColorValue;
    variant?: BColorVariantKey;
    style?: any;
    contentStyle?: any;
}
