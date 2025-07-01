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
    colors: Object.assign({}, colors_1.BColors),
    spacing: Object.assign({}, spacing_1.BSpacings),
    radius: Object.assign({}, spacing_1.BRadius),
    fontFamilies: {
        family: typography_1.BFontFamilies.family,
    },
    fontSizes: Object.assign({}, typography_1.BFontSizes),
    fontWeights: Object.assign({}, typography_1.BFontWeights),
};
