import React from "react";
import { Theme } from "./defaulTheme";
export declare const useTheme: () => {
    readonly themeColor: {
        readonly primary: string[];
    };
    readonly colors: {
        readonly white: string[];
        readonly black: string[];
        readonly gray: string[];
        readonly red: string[];
        readonly orange: string[];
        readonly yellow: string[];
        readonly green: string[];
        readonly turquoise: string[];
        readonly blue: string[];
        readonly violet: string[];
        readonly pink: string[];
    };
    readonly spacing: {
        readonly xxs: number;
        readonly xs: number;
        readonly sm: number;
        readonly md: number;
        readonly lg: number;
        readonly xl: number;
        readonly xxl: number;
    };
    readonly radius: {
        readonly sm: 12;
        readonly md: 16;
        readonly lg: 20;
        readonly rounded: 100;
    };
    readonly fontFamilies: {
        readonly family: string;
    };
    readonly fontSizes: {
        readonly xxs: number;
        readonly xs: number;
        readonly sm: number;
        readonly md: number;
        readonly lg: number;
        readonly xl: number;
    };
    readonly fontWeights: {
        readonly light: number;
        readonly regular: number;
        readonly medium: number;
        readonly semibold: number;
        readonly bold: number;
        readonly black: number;
    };
};
declare const ThemeProvider: React.FC<{
    theme?: Partial<Theme>;
    children: React.ReactNode;
}>;
export default ThemeProvider;
