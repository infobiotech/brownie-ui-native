import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
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
import { getRadius } from "../../../theme/tokens/spacing";
import { getFontSize } from "../../../theme/tokens/typography";

const BButton: React.FC<ButtonProps> = (props) => {
  const { themeColor, colors, spacing, radius, fontFamilies, fontWeights } =
    useTheme();

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
    primaryColor = themeColor.primary,
    contentColor,
    variant = "light",
    borderRadius = radius.sm,
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
    btn: {
      flexDirection: getFlexDirection(iconPosition),
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.md,
      backgroundColor: disabled ? colors.gray[2] : getColorsObject.background,
      borderColor: disabled ? colors.gray[1] : getColorsObject.border,
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: getRadius(borderRadius),
      paddingVertical:
        aspectRatio === 1 ? spacing.xs : getPadding(size, "v", spacing),
      paddingHorizontal:
        aspectRatio === 1 ? spacing.xs : getPadding(size, "h", spacing),
      aspectRatio: aspectRatio,
      ...style,
    },
    txt: {
      fontFamily: fontFamilies.family,
      fontSize: getFontSize(size || fontSize),
      fontWeight: fontWeights.medium,
      color: disabled ? colors.gray[1] : getColorsObject.content,
      ...contentStyle,
    },
    icon: {
      color: disabled ? colors.gray[1] : getColorsObject.content,
      ...contentStyle,
    },
  });

  return (
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
            size={getFontSize(iconSize || fontSize || size)}
            style={classNames.icon}
          />
        )
      )}
      {children && renderChildren(children) === "string" ? (
        <Text style={classNames.txt}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default BButton;
