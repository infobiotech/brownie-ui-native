"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThemeProvider_1 = require("../../theme/ThemeProvider");
const utils_1 = require("./utils");
const spacing_1 = require("../../theme/tokens/spacing");
const colors_1 = require("../../theme/tokens/colors");
const BBox = (props) => {
    const { spacing } = (0, ThemeProvider_1.useTheme)();
    const { flexDirection = "column", justifyContent = "flex-start", alignItems = "flex-start", gap = spacing.sm, margin, marginVertical, marginHorizontal, marginTop, marginRight, marginBottom, marginLeft, padding, paddingVertical, paddingHorizontal, paddingTop, paddingRight, paddingBottom, paddingLeft, backgroundColor, backgroundOpacity = "100", borderColor, borderRadius, children, style } = props, otherProps = __rest(props, ["flexDirection", "justifyContent", "alignItems", "gap", "margin", "marginVertical", "marginHorizontal", "marginTop", "marginRight", "marginBottom", "marginLeft", "padding", "paddingVertical", "paddingHorizontal", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "backgroundColor", "backgroundOpacity", "borderColor", "borderRadius", "children", "style"]);
    const dynamicStyle = (0, utils_1.buildStyleAuto)(Object.assign({}, otherProps));
    const classNames = react_native_1.StyleSheet.create({
        box: Object.assign(Object.assign({ backgroundColor: backgroundColor &&
                `${(0, colors_1.getColor)(backgroundColor)}${backgroundOpacity !== "100" && backgroundOpacity}`, flexDirection: flexDirection, justifyContent: justifyContent, alignItems: alignItems, gap: (0, spacing_1.getSpacing)(gap), margin: margin && margin !== "auto" ? (0, spacing_1.getSpacing)(margin) : "auto", marginVertical: marginVertical && marginVertical !== "auto"
                ? (0, spacing_1.getSpacing)(marginVertical)
                : "auto", marginHorizontal: marginHorizontal && marginHorizontal !== "auto"
                ? (0, spacing_1.getSpacing)(marginHorizontal)
                : "auto", marginTop: marginTop && marginTop !== "auto" ? (0, spacing_1.getSpacing)(marginTop) : "auto", marginRight: marginRight && marginRight !== "auto"
                ? (0, spacing_1.getSpacing)(marginRight)
                : "auto", marginBottom: marginBottom && marginBottom !== "auto"
                ? (0, spacing_1.getSpacing)(marginBottom)
                : "auto", marginLeft: marginLeft && marginLeft !== "auto" ? (0, spacing_1.getSpacing)(marginLeft) : "auto", padding: padding && (0, spacing_1.getSpacing)(padding), paddingVertical: paddingVertical && (0, spacing_1.getSpacing)(paddingVertical), paddingHorizontal: paddingHorizontal && (0, spacing_1.getSpacing)(paddingHorizontal), paddingTop: paddingTop && (0, spacing_1.getSpacing)(paddingTop), paddingRight: paddingRight && (0, spacing_1.getSpacing)(paddingRight), paddingBottom: paddingBottom && (0, spacing_1.getSpacing)(paddingBottom), paddingLeft: paddingLeft && (0, spacing_1.getSpacing)(paddingLeft), borderRadius: borderRadius && (0, spacing_1.getRadius)(borderRadius), borderColor: borderColor && (0, colors_1.getColor)(borderColor) }, style), dynamicStyle),
    });
    return <react_native_1.View style={classNames.box}>{children}</react_native_1.View>;
};
exports.default = BBox;
