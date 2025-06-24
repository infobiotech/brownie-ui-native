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
const BButton = (props) => {
    const { themeColor, colors, spacing, radius, fontFamilies, fontSizes, fontWeights, } = (0, ThemeProvider_1.useTheme)();
    const { action, disabled, loading, size = "sm", fontSize, iconSize, icon, iconPosition = "right", children, fullwidth = false, primaryColor = themeColor.primary, contentColor, variant = "light", borderRadius = "sm", aspectRatio, style, contentStyle, } = props;
    const getColorsObject = (0, utils_1.getColors)(primaryColor, contentColor, variant, colors, themeColor.primary);
    const classNames = react_native_1.StyleSheet.create({
        btnContainer: { width: fullwidth ? "100%" : "auto" },
        btn: Object.assign({ flexDirection: (0, utils_1.getFlexDirection)(iconPosition), alignSelf: fullwidth ? "auto" : "center", alignItems: "center", justifyContent: "center", gap: spacing.md, 
            // alignSelf: width === 'fit-content' ? 'flex-start' : 'unset',
            backgroundColor: disabled ? colors.gray[2] : getColorsObject.background, borderColor: disabled ? colors.gray[1] : getColorsObject.border, borderWidth: 2, borderStyle: "solid", borderRadius: radius[borderRadius], paddingVertical: aspectRatio === 1 ? spacing.xs : (0, utils_1.getPadding)(size, "v", spacing), paddingHorizontal: aspectRatio === 1 ? spacing.xs : (0, utils_1.getPadding)(size, "h", spacing), aspectRatio: aspectRatio }, style),
        text: Object.assign({ fontFamily: fontFamilies.family, fontSize: fontSize || fontSizes[size], fontWeight: fontWeights.bold, color: disabled ? colors.gray[1] : getColorsObject.content }, contentStyle),
        icon: Object.assign({ color: disabled ? colors.gray[1] : getColorsObject.content }, contentStyle),
    });
    return (<react_native_1.View style={classNames.btnContainer}>
      <react_native_1.TouchableOpacity onPress={action} disabled={disabled || loading} style={classNames.btn}>
        {loading ? (<react_native_1.ActivityIndicator color={getColorsObject.content}/>) : (icon && (<react_native_fontawesome_1.FontAwesomeIcon icon={icon} size={iconSize ? fontSizes[iconSize] : fontSizes[size]} style={classNames.icon}/>))}
        {children && (0, utils_1.renderChildren)(children) === "string" ? (<react_native_1.Text style={classNames.text}>{children}</react_native_1.Text>) : (children)}
      </react_native_1.TouchableOpacity>
    </react_native_1.View>);
};
exports.default = BButton;
