import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { TextProps } from "./types";
import { StyleSheet, Text } from "react-native";
import { getFontSize, getFontWeight } from "../../theme/tokens/typography";
import { getColor } from "../../theme/tokens/colors";

const BText: React.FC<TextProps> = (props) => {
  const { fontFamilies, fontSizes, fontWeights, colors } = useTheme();

  const {
    textAlign,
    textAlignVertical,
    lineHeight,
    letterSpacing,
    textDecorationLine,
    textTransform,
    fontSize = fontSizes.xs,
    fontWeight = fontWeights.light,
    fontFamily = fontFamilies.family,
    color = colors.gray[0],
    style,
    children,
  } = props;

  const classNames = StyleSheet.create({
    txt: {
      textAlign: textAlign,
      textAlignVertical: textAlignVertical,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      textDecorationLine: textDecorationLine,
      textTransform: textTransform,
      fontSize: getFontSize(fontSize),
      fontWeight: getFontWeight(fontWeight),
      fontFamily: fontFamily,
      color: getColor(color),
      ...style,
    },
  });

  return <Text style={classNames.txt}>{children}</Text>;
};

export default BText;
