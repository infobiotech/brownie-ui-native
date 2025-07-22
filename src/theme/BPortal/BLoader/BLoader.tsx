import React from "react";
import { LoaderProps } from "./types";
import { useTheme } from "../../ThemeProvider";
import BBox from "../../../components/BBox/BBox";
import { ActivityIndicator } from "react-native";
import BText from "../../../components/BText/BText";

export const BLoader: React.FC<LoaderProps> = (props) => {
  const { fontSizes, themeColor, colors } = useTheme();

  const {
    label,
    labelSize = fontSizes.md,
    labelWeight,
    spinnerColor = themeColor.primary,
    spinnerSize = 62,
    overlayColor = colors.gray[2],
  } = props;

  return (
    <BBox
      backgroundColor={overlayColor}
      position="absolute"
      top={0}
      left={0}
      zIndex={10000000000}
      width={"100%"}
      height={"100%"}
      justifyContent="center"
      alignItems="center"
    >
      <BBox justifyContent="center" alignItems="center" gap="xl">
        <ActivityIndicator color={spinnerColor[0]} size={spinnerSize} />
        {label && (
          <BText fontSize={labelSize} fontWeight={labelWeight}>
            {label}
          </BText>
        )}
      </BBox>
    </BBox>
  );
};
