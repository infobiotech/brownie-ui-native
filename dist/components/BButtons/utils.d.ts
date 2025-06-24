import { Theme } from '../../theme/defaulTheme';
import { ButtonProps } from './BButton/types';
export declare const renderChildren: (children: ButtonProps["children"]) => "children" | "string";
export declare const getFlexDirection: (iconPosition: ButtonProps["iconPosition"]) => "row-reverse" | "row";
export declare const getColors: (primaryColor: ButtonProps["primaryColor"], contentColor: ButtonProps["contentColor"], variant: ButtonProps["variant"], colors: Theme["colors"], themeColor: Theme["themeColor"]["primary"]) => {
    content: string;
    border: string;
    background: string;
};
export declare const getPadding: (size: ButtonProps["size"], o: "v" | "h", spacing: Theme["spacing"]) => number;
