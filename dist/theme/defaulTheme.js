"use strict";
// theme/defaultTheme.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const colors_1 = require("./tokens/colors");
const spacing_1 = require("./tokens/spacing");
const typography_1 = require("./tokens/typography");
exports.defaultTheme = {
    themeColor: {
        primary: colors_1.BColors.violet,
    },
    colors: Object.assign({ white: '#F2F3F4', black: '#14171A' }, colors_1.BColors),
    spacing: {
        none: 0,
        xxs: spacing_1.BSpacings.xxs,
        xs: spacing_1.BSpacings.xs,
        sm: spacing_1.BSpacings.sm,
        md: spacing_1.BSpacings.md,
        lg: spacing_1.BSpacings.lg,
        xl: spacing_1.BSpacings.xl,
        xxl: spacing_1.BSpacings.xxl,
    },
    radius: {
        sm: spacing_1.BRadius.sm,
        lg: spacing_1.BRadius.lg,
        rounded: spacing_1.BRadius.rounded,
    },
    fontFamilies: {
        family: typography_1.BFontFamilies.family,
    },
    fontSizes: {
        xxs: typography_1.BFontSizes.xxs,
        xs: typography_1.BFontSizes.xs,
        sm: typography_1.BFontSizes.sm,
        md: typography_1.BFontSizes.md,
        lg: typography_1.BFontSizes.lg,
        xl: typography_1.BFontSizes.xl,
    },
    fontWeights: {
        light: typography_1.BFontWeights.light,
        regular: typography_1.BFontWeights.regular,
        medium: typography_1.BFontWeights.medium,
        semibold: typography_1.BFontWeights.semibold,
        bold: typography_1.BFontWeights.bold,
        black: typography_1.BFontWeights.black,
    },
};
