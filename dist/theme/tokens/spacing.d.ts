export declare function useScale(): {
    scale: (size: number) => number;
};
export declare const BRawSpacings: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export declare const BSpacings: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export declare const BRadius: {
    readonly sm: 12;
    readonly md: 16;
    readonly lg: 20;
    readonly rounded: 100;
};
export type BSpacingKey = keyof typeof BSpacings;
export type BRadiusKey = keyof typeof BRadius;
export declare const getSpacing: (value: BSpacingKey | number) => number;
export declare const getRadius: (value: BRadiusKey | number) => number;
