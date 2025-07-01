"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemeProvider_1 = require("../../theme/ThemeProvider");
const react_native_1 = require("react-native");
const typography_1 = require("../../theme/tokens/typography");
const colors_1 = require("../../theme/tokens/colors");
const BText = (props) => {
    const { fontFamilies, fontSizes, fontWeights, colors } = (0, ThemeProvider_1.useTheme)();
    const { fontSize = fontSizes.xs, fontWeight = fontWeights.light, fontFamily = fontFamilies.family, color = colors.gray[0], style, children, } = props;
    const classNames = react_native_1.StyleSheet.create({
        txt: Object.assign({ fontSize: (0, typography_1.getFontSize)(fontSize), fontWeight: (0, typography_1.getFontWeight)(fontWeight), fontFamily: fontFamily, color: (0, colors_1.getColor)(color) }, style),
    });
    return <react_native_1.Text style={classNames.txt}>{children}</react_native_1.Text>;
};
exports.default = BText;
