"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
const defaulTheme_1 = require("./defaulTheme");
const createTheme = (overrides) => ({
    // ...defaultTheme,
    themeColor: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.themeColor), overrides.themeColor),
    colors: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.colors), overrides.colors),
    spacing: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.spacing), overrides.spacing),
    radius: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.radius), overrides.radius),
    fontFamilies: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.fontFamilies), overrides.fontFamilies),
    fontSizes: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.fontSizes), overrides.fontSizes),
    fontWeights: Object.assign(Object.assign({}, defaulTheme_1.defaultTheme.fontWeights), overrides.fontWeights),
});
exports.createTheme = createTheme;
