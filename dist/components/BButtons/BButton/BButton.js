"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThemeProvider_1 = require("../../../theme/ThemeProvider");
const react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
const utils_1 = require("../utils");
const spacing_1 = require("../../../theme/tokens/spacing");
const typography_1 = require("../../../theme/tokens/typography");
const BButton = (props) => {
    const { themeColor, colors, spacing, radius, fontFamilies, fontWeights } = (0, ThemeProvider_1.useTheme)();
    const { action, disabled, loading, size = "sm", fontSize, iconSize, icon, iconPosition = "right", children, primaryColor = themeColor.primary, contentColor, variant = "light", borderRadius = radius.sm, aspectRatio, style, contentStyle, } = props;
    const getColorsObject = (0, utils_1.getColors)(primaryColor, contentColor, variant, colors, themeColor.primary);
    const classNames = react_native_1.StyleSheet.create({
        btn: Object.assign({ flexDirection: (0, utils_1.getFlexDirection)(iconPosition), alignItems: "center", justifyContent: "center", gap: spacing.md, backgroundColor: disabled ? colors.gray[2] : getColorsObject.background, borderColor: disabled ? colors.gray[1] : getColorsObject.border, borderWidth: 2, borderStyle: "solid", borderRadius: (0, spacing_1.getRadius)(borderRadius), paddingVertical: aspectRatio === 1 ? spacing.xs : (0, utils_1.getPadding)(size, "v", spacing), paddingHorizontal: aspectRatio === 1 ? spacing.xs : (0, utils_1.getPadding)(size, "h", spacing), aspectRatio: aspectRatio }, style),
        txt: Object.assign({ fontFamily: fontFamilies.family, fontSize: (0, typography_1.getFontSize)(size || fontSize), fontWeight: fontWeights.medium, color: disabled ? colors.gray[1] : getColorsObject.content }, contentStyle),
        icon: Object.assign({ color: disabled ? colors.gray[1] : getColorsObject.content }, contentStyle),
    });
    return (<react_native_1.TouchableOpacity onPress={action} disabled={disabled || loading} style={classNames.btn}>
      {loading ? (<react_native_1.ActivityIndicator color={getColorsObject.content}/>) : (icon && (<react_native_fontawesome_1.FontAwesomeIcon icon={icon} size={(0, typography_1.getFontSize)(iconSize || fontSize || size)} style={classNames.icon}/>))}
      {children && (0, utils_1.renderChildren)(children) === "string" ? (<react_native_1.Text style={classNames.txt}>{children}</react_native_1.Text>) : (children)}
    </react_native_1.TouchableOpacity>);
};
exports.default = BButton;
