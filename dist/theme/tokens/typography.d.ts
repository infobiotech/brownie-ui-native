export declare const scale: (size: number) => number;
/**
 * Raw font sizes — unscaled, design-system based.
 */
export declare const RawFontSizes: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
/**
 * Scaled font sizes — ready for use in components.
 */
export declare const BFontSizes: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
/**
 * Font weights — mapped to platform-specific or custom names
 */
export declare const BFontWeights: {
    light: "300";
    regular: "400";
    medium: "500";
    semibold: "600";
    bold: "700";
    black: "900";
};
/**
 * Font families — override as needed per platform or brand
 * Android: normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
 */
export declare const BFontFamilies: {
    family: string;
};
export type BFontSizeValue = (typeof BFontSizes)[keyof typeof BFontSizes];
export type BFontSizeKey = keyof typeof BFontSizes;
export type BFontWeightKey = keyof typeof BFontWeights;
