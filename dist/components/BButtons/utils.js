"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPadding = exports.getColors = exports.getFlexDirection = exports.renderChildren = void 0;
const colors_1 = require("../../theme/tokens/colors");
const renderChildren = (children) => {
    if (typeof children === "string") {
        return "string";
    }
    else {
        return "children";
    }
};
exports.renderChildren = renderChildren;
const getFlexDirection = (iconPosition) => {
    switch (iconPosition) {
        case "right":
            return "row-reverse";
        case "left":
        default:
            return "row";
    }
};
exports.getFlexDirection = getFlexDirection;
const getColors = (primaryColor, contentColor, variant, colors, themeColor) => {
    if (!primaryColor)
        primaryColor = themeColor;
    let colorsObject = { content: "", border: "", background: "" };
    const colorDark = (0, colors_1.getColor)(primaryColor);
    const colorLight = (0, colors_1.getColor)(primaryColor, 2);
    const customContentColor = contentColor ? (0, colors_1.getColor)(contentColor) : "";
    colorsObject.content = customContentColor
        ? customContentColor
        : variant === "filled"
            ? colors.white[0]
            : colorDark;
    colorsObject.border = variant === "light" ? colorLight : colorDark;
    colorsObject.background =
        variant === "outline"
            ? colors.white[0]
            : variant === "light"
                ? colorLight
                : colorDark;
    return colorsObject;
};
exports.getColors = getColors;
const getPadding = (size, o, spacing) => {
    switch (size) {
        case "xxs":
            return spacing.xs;
        case "xs":
            return o === "v" ? spacing.xs : spacing.sm;
        case "sm":
            return o === "v" ? spacing.sm : spacing.md;
        case "md":
            return o === "v" ? spacing.md : spacing.lg;
        case "lg":
            return o === "v" ? spacing.lg : spacing.xl;
        case "xl":
            return spacing.xl;
        default:
            return o === "v" ? spacing.sm : spacing.md;
    }
};
exports.getPadding = getPadding;
