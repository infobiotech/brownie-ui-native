export declare function useScale(): {
    scale: (size: number) => number;
};
export declare const BRawSpacings: {
    none: number;
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export declare const BSpacings: {
    none: number;
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
    readonly lg: 20;
    readonly rounded: 100;
};
export type BSpacingValue = (typeof BSpacings)[keyof typeof BSpacings];
export type BSpacingKey = keyof typeof BSpacings;
export type BRadiusKey = keyof typeof BRadius;
