import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { getColors, getFlexDirection, getPadding } from "../utils";
import { useTheme } from "../../../theme/ThemeProvider";
import { Action, ButtonGroupProps } from "./types";
import { getFontSize } from "../../../theme/tokens/typography";

const BButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { themeColor, colors, spacing, radius, fontFamilies, fontWeights } =
    useTheme();

  const {
    actions,
    setter,
    disabled,
    active,
    loading,
    size = "sm",
    fontSize,
    iconSize,
    iconPosition = "left",
    fullwidth = false,
    primaryColor = themeColor.primary,
    contentColor,
    variant = "light",
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
      borderRadius: radius.md,
      paddingVertical: spacing.xxs,
      paddingHorizontal: spacing.xs,
      ...style,
    },
    btn: {
      flexGrow: fullwidth ? 1 : 0,
      flexDirection: getFlexDirection(iconPosition),
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.sm,
      borderRadius: radius.sm,
      paddingVertical: getPadding(size, "v", spacing),
      paddingHorizontal: getPadding(size, "h", spacing),
    },
    active: {
      backgroundColor: disabled
        ? colors.gray[1]
        : variant !== "outline"
        ? colors.white[0]
        : getColorsObject.content,
    },
    txt: {
      fontFamily: fontFamilies.family,
      fontSize: getFontSize(fontSize || size),
      fontWeight: fontWeights.medium,
      color: disabled ? colors.gray[1] : getColorsObject.content,
      ...contentStyle,
    },
    icon: {
      color: disabled ? colors.gray[1] : getColorsObject.content,
      ...contentStyle,
    },
    contentActive: {
      color: disabled
        ? colors.gray[2]
        : variant !== "light"
        ? getColorsObject.background
        : getColorsObject.content,
    },
  });

  const handleOnClick = (action: Action) => {
    setter(action.value);
    action.action && action.action();
  };

  return (
    <View style={classNames.btnContainer}>
      {actions.map((action, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handleOnClick(action)}
          disabled={disabled || loading}
          style={[classNames.btn, active === action.value && classNames.active]}
        >
          {action.icon && (
            <FontAwesomeIcon
              icon={action.icon}
              size={getFontSize(iconSize || fontSize || size)}
              style={[
                classNames.icon,
                active === action.value && classNames.contentActive,
              ]}
            />
          )}
          {action.label && (
            <Text
              style={[
                classNames.txt,
                active === action.value && classNames.contentActive,
              ]}
            >
              {action.label}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BButtonGroup;
