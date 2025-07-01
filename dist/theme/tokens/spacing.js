"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRadius = exports.getSpacing = exports.BRadius = exports.BSpacings = exports.BRawSpacings = void 0;
exports.useScale = useScale;
const react_1 = require("react");
const react_native_1 = require("react-native");
const _1 = require(".");
const guidelineBaseWidth = 1100;
function useScale() {
    const [screenWidth, setScreenWidth] = (0, react_1.useState)(react_native_1.Dimensions.get("window").width);
    (0, react_1.useEffect)(() => {
        const subscription = react_native_1.Dimensions.addEventListener("change", ({ window }) => {
            setScreenWidth(window.width);
        });
        return () => {
            subscription === null || subscription === void 0 ? void 0 : subscription.remove(); // <-- this is the modern cleanup method
        };
    }, []);
    const scale = (size) => (screenWidth / guidelineBaseWidth) * size;
    return { scale };
}
// Static scale function (non-hook version, for tokens)
const screenWidth = react_native_1.Dimensions.get("window").width;
const scale = (size) => (screenWidth / guidelineBaseWidth) * size;
exports.BRawSpacings = {
    xxs: 3,
    xs: 5,
    sm: 8,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 40,
};
exports.BSpacings = {
    xxs: scale(exports.BRawSpacings.xxs),
    xs: scale(exports.BRawSpacings.xs),
    sm: scale(exports.BRawSpacings.sm),
    md: scale(exports.BRawSpacings.md),
    lg: scale(exports.BRawSpacings.lg),
    xl: scale(exports.BRawSpacings.xl),
    xxl: scale(exports.BRawSpacings.xxl),
};
exports.BRadius = {
    sm: 12,
    md: 16,
    lg: 20,
    rounded: 100,
};
const getSpacing = (value) => {
    return (0, _1.isObjectKey)(exports.BSpacings, value) ? exports.BSpacings[value] : value;
};
exports.getSpacing = getSpacing;
const getRadius = (value) => {
    return (0, _1.isObjectKey)(exports.BRadius, value) ? exports.BRadius[value] : value;
};
exports.getRadius = getRadius;
