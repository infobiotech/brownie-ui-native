export declare const defaultTheme: {
    readonly themeColor: {
        readonly primary: string[];
    };
    readonly colors: {
        readonly gray: string[];
        readonly red: string[];
        readonly orange: string[];
        readonly yellow: string[];
        readonly green: string[];
        readonly turquoise: string[];
        readonly blue: string[];
        readonly violet: string[];
        readonly pink: string[];
        readonly white: "#F2F3F4";
        readonly black: "#14171A";
    };
    readonly spacing: {
        readonly none: 0;
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
        readonly light: "300";
        readonly regular: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
        readonly black: "900";
    };
};
export type Theme = typeof defaultTheme;
