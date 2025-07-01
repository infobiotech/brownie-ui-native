"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontWeight = exports.getFontSize = exports.BFontFamilies = exports.BFontWeights = exports.BFontSizes = exports.RawFontSizes = exports.scale = void 0;
const react_native_1 = require("react-native");
const _1 = require(".");
const { width: SCREEN_WIDTH } = react_native_1.Dimensions.get("window");
// const guidelineBaseWidth = 600;
const guidelineBaseWidth = 1100;
const scale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
exports.scale = scale;
/**
 * Raw font sizes — unscaled, design-system based.
 */
exports.RawFontSizes = {
    xxs: 13,
    xs: 16,
    sm: 18,
    md: 21,
    lg: 24,
    xl: 30,
};
/**
 * Scaled font sizes — ready for use in components.
 */
exports.BFontSizes = {
    xxs: (0, exports.scale)(exports.RawFontSizes.xxs),
    xs: (0, exports.scale)(exports.RawFontSizes.xs),
    sm: (0, exports.scale)(exports.RawFontSizes.sm),
    md: (0, exports.scale)(exports.RawFontSizes.md),
    lg: (0, exports.scale)(exports.RawFontSizes.lg),
    xl: (0, exports.scale)(exports.RawFontSizes.xl),
};
/**
 * Font weights — mapped to platform-specific or custom names
 */
exports.BFontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
};
/**
 * Font families — override as needed per platform or brand
 * Android: normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
 */
exports.BFontFamilies = {
    family: react_native_1.Platform.select({
        ios: "System",
        android: "Roboto",
        web: "sans-serif",
        default: "System",
    }),
};
const getFontSize = (value) => {
    return (0, _1.isObjectKey)(exports.BFontSizes, value) ? exports.BFontSizes[value] : value;
};
exports.getFontSize = getFontSize;
const getFontWeight = (value) => {
    return (0, _1.isObjectKey)(exports.BFontWeights, value) ? exports.BFontWeights[value] : value;
};
exports.getFontWeight = getFontWeight;
