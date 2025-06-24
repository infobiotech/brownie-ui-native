import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { ButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  getColors,
  getFlexDirection,
  getPadding,
  renderChildren,
} from "../utils";

const BButton: React.FC<ButtonProps> = (props) => {
  const {
    themeColor,
    colors,
    spacing,
    radius,
    fontFamilies,
    fontSizes,
    fontWeights,
  } = useTheme();

  const {
    action,
    disabled,
    loading,
    size = "sm",
    fontSize,
    iconSize,
    icon,
    iconPosition = "right",
    children,
    fullwidth = false,
    primaryColor = themeColor.primary,
    contentColor,
    variant = "light",
    borderRadius = "sm",
    aspectRatio,
    style,
    contentStyle,
  } = props;

  const getColorsObject = getColors(
    primaryColor,
    contentColor,
    variant,
    colors,
    themeColor.primary
  );

  const classNames = StyleSheet.create({
    btnContainer: { width: fullwidth ? "100%" : "auto" },
    btn: {
      flexDirection: getFlexDirection(iconPosition),
      alignSelf: fullwidth ? "auto" : "center",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.md,
      // alignSelf: width === 'fit-content' ? 'flex-start' : 'unset',
      backgroundColor: disabled ? colors.gray[2] : getColorsObject.background,
      borderColor: disabled ? colors.gray[1] : getColorsObject.border,
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: radius[borderRadius],
      paddingVertical:
        aspectRatio === 1 ? spacing.xs : getPadding(size, "v", spacing),
      paddingHorizontal:
        aspectRatio === 1 ? spacing.xs : getPadding(size, "h", spacing),
      aspectRatio: aspectRatio,
      ...style,
    },
    text: {
      fontFamily: fontFamilies.family,
      fontSize: fontSize || fontSizes[size],
      fontWeight: fontWeights.bold,
      color: disabled ? colors.gray[1] : getColorsObject.content,
      ...contentStyle,
    },
    icon: {
      color: disabled ? colors.gray[1] : getColorsObject.content,
      ...contentStyle,
    },
  });

  return (
    <View style={classNames.btnContainer}>
      <TouchableOpacity
        onPress={action}
        disabled={disabled || loading}
        style={classNames.btn}
      >
        {loading ? (
          <ActivityIndicator color={getColorsObject.content} />
        ) : (
          icon && (
            <FontAwesomeIcon
              icon={icon}
              size={iconSize ? fontSizes[iconSize] : fontSizes[size]}
              style={classNames.icon}
            />
          )
        )}
        {children && renderChildren(children) === "string" ? (
          <Text style={classNames.text}>{children}</Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BButton;
