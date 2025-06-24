export declare const BColors: {
    gray: string[];
    red: string[];
    orange: string[];
    yellow: string[];
    green: string[];
    turquoise: string[];
    blue: string[];
    violet: string[];
    pink: string[];
};
export declare const BColorVariants: {
    readonly filled: "filled";
    readonly light: "light";
    readonly outline: "outline";
};
export type BColorValue = (typeof BColors)[keyof typeof BColors];
export type BColorKey = keyof typeof BColors;
export type BColorVariantKey = keyof typeof BColorVariants;
