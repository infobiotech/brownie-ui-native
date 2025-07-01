"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = exports.BColorVariants = exports.BColors = void 0;
const _1 = require(".");
exports.BColors = {
    white: ["#f4f5f6", "#f7f8fa", "#f9f7fa"],
    black: ["#171717", "#232629", "#1a1a1a"],
    gray: ["#656565", "#b2b2b2", "#e7e7e7"],
    red: ["#d8070b", "#fba0a0", "#ffd1d1"],
    orange: ["#fc8a08", "#fed09b", "#ffe8cc"],
    yellow: ["#ffd20c", "#fffbcb", "#fffde1"],
    green: ["#2bdd66", "#a8f2c0", "#d3f9e0"],
    turquoise: ["#24ddcb", "#a5f2ea", "#cffaf6"],
    blue: ["#0064e4", "#9ac7ff", "#cde5ff"],
    violet: ["#7b2eda", "#caaaf1", "#e7d6fb"],
    pink: ["#FF0090", "#ff9bd4", "#ffceec"],
};
exports.BColorVariants = {
    filled: "filled",
    light: "light",
    outline: "outline",
};
const getColor = (value, index = 0) => {
    return (0, _1.isObjectValue)(exports.BColors, value)
        ? value[index]
        : (0, _1.isObjectKey)(exports.BColors, value)
            ? exports.BColors[value][index]
            : value;
};
exports.getColor = getColor;
