export declare const BColors: {
    white: string[];
    black: string[];
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
export declare const getColor: (value: BColorKey | BColorValue | string, index?: number) => string;
