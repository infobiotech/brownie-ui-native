"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const utils_1 = require("../utils");
const ThemeProvider_1 = require("../../../theme/ThemeProvider");
const BButtonGroup = (props) => {
    const { themeColor, colors, spacing, radius, fontFamilies, fontSizes, fontWeights, } = (0, ThemeProvider_1.useTheme)();
    const { actions, setter, disabled, active, loading, size = "sm", fontSize, iconSize, iconPosition = "left", fullwidth = false, primaryColor = themeColor.primary, contentColor, variant = "light", borderRadius = "sm", style, contentStyle, } = props;
    const getColorsObject = (0, utils_1.getColors)(primaryColor, contentColor, variant, colors, themeColor.primary);
    const classNames = react_native_1.StyleSheet.create({
        btnContainer: {
            width: fullwidth ? "100%" : "auto",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: spacing.md,
            backgroundColor: disabled ? colors.gray[2] : getColorsObject.background,
            borderColor: disabled ? colors.gray[1] : getColorsObject.border,
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: radius[borderRadius],
            padding: spacing.xxs,
        },
        btn: Object.assign({ flexGrow: fullwidth ? 1 : 0, flexDirection: (0, utils_1.getFlexDirection)(iconPosition), justifyContent: "center", alignItems: "center", gap: spacing.sm, borderRadius: radius[borderRadius], paddingVertical: (0, utils_1.getPadding)(size, "v", spacing), paddingHorizontal: (0, utils_1.getPadding)(size, "h", spacing) }, style),
        active: {
            backgroundColor: disabled
                ? colors.white
                : variant !== "outline"
                    ? colors.white
                    : getColorsObject.content,
        },
        text: Object.assign({ fontFamily: fontFamilies.family, fontSize: fontSize || fontSizes[size], fontWeight: fontWeights.bold, color: disabled ? colors.gray[1] : getColorsObject.content }, contentStyle),
        icon: Object.assign({ color: disabled ? colors.gray[1] : getColorsObject.content }, contentStyle),
        contentActive: {
            color: disabled
                ? colors.gray[1]
                : variant !== "outline"
                    ? getColorsObject.content
                    : colors.white,
        },
    });
    const handleOnClick = (action) => {
        setter(action.value);
        action.action();
    };
    return (<react_native_1.View style={classNames.btnContainer}>
      {actions.map((action, i) => (<react_native_1.TouchableOpacity key={i} onPress={() => handleOnClick(action)} disabled={disabled || loading} style={[classNames.btn, active === action.value && classNames.active]}>
          {action.icon && (<react_native_fontawesome_1.FontAwesomeIcon icon={action.icon} size={iconSize ? fontSizes[iconSize] : fontSizes[size]} style={[
                    classNames.icon,
                    active === action.value && classNames.contentActive,
                ]}/>)}
          {action.label && (<react_native_1.Text style={[
                    classNames.text,
                    active === action.value && classNames.contentActive,
                ]}>
              {action.label}
            </react_native_1.Text>)}
        </react_native_1.TouchableOpacity>))}
    </react_native_1.View>);
};
exports.default = BButtonGroup;
