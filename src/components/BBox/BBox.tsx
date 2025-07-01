import React from "react";
import { BoxProps } from "./types";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { buildStyleAuto } from "./utils";
import { getRadius, getSpacing } from "../../theme/tokens/spacing";
import { getColor } from "../../theme/tokens/colors";

const BBox: React.FC<BoxProps> = (props) => {
  const { spacing } = useTheme();

  const {
    flexDirection = "column",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    gap = spacing.sm,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundColor,
    backgroundOpacity = "100",
    borderColor,
    borderRadius,
    children,
    style,
    ...otherProps
  } = props;

  const dynamicStyle = buildStyleAuto({
    ...otherProps,
  });

  const classNames = StyleSheet.create({
    box: {
      backgroundColor:
        backgroundColor &&
        `${getColor(backgroundColor)}${
          backgroundOpacity !== "100" && backgroundOpacity
        }`,
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems,
      gap: getSpacing(gap),
      margin: margin && margin !== "auto" ? getSpacing(margin) : "auto",
      marginVertical:
        marginVertical && marginVertical !== "auto"
          ? getSpacing(marginVertical)
          : "auto",
      marginHorizontal:
        marginHorizontal && marginHorizontal !== "auto"
          ? getSpacing(marginHorizontal)
          : "auto",
      marginTop:
        marginTop && marginTop !== "auto" ? getSpacing(marginTop) : "auto",
      marginRight:
        marginRight && marginRight !== "auto"
          ? getSpacing(marginRight)
          : "auto",
      marginBottom:
        marginBottom && marginBottom !== "auto"
          ? getSpacing(marginBottom)
          : "auto",
      marginLeft:
        marginLeft && marginLeft !== "auto" ? getSpacing(marginLeft) : "auto",
      padding: padding && getSpacing(padding),
      paddingVertical: paddingVertical && getSpacing(paddingVertical),

      paddingHorizontal: paddingHorizontal && getSpacing(paddingHorizontal),
      paddingTop: paddingTop && getSpacing(paddingTop),
      paddingRight: paddingRight && getSpacing(paddingRight),
      paddingBottom: paddingBottom && getSpacing(paddingBottom),
      paddingLeft: paddingLeft && getSpacing(paddingLeft),
      borderRadius: borderRadius && getRadius(borderRadius),
      borderColor: borderColor && getColor(borderColor),
      ...style,
      ...dynamicStyle,
    },
  });

  return <View style={classNames.box}>{children}</View>;
};

export default BBox;
