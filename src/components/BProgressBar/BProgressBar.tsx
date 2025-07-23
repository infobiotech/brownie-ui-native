import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Animated, StyleSheet } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { ProgressBarProps } from "./types";
import BBox from "../BBox/BBox";
import BText from "../BText/BText";

const BProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { radius, themeColor } = useTheme();

  const {
    totalTime,
    elapsedTime,
    color = themeColor.primary,
    trackColor = color,
    thumbColor = color,
    spinnerColor = color,
    totalWidth = 300,
    label,
    labelPosition = "bottom",
    spinner = true,
  } = props;

  const widthAnim = useRef(new Animated.Value(1)).current;

  const missingTime = totalTime - elapsedTime;
  const progress = Math.max(
    0,
    Math.min((totalTime - elapsedTime) / totalTime, 1)
  );

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, widthAnim]);

  const interpolatedWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [totalWidth, 0],
  });

  const classNames = StyleSheet.create({
    animatedProgress: {
      width: interpolatedWidth,
      height: 12,
      backgroundColor: thumbColor[0] || color[0],
      borderRadius: radius.rounded,
    },
  });

  const getFlexDirection = () => {
    switch (labelPosition) {
      case "bottom":
      default:
        return "column";

      case "top":
        return "column-reverse";

      case "left":
        return "row-reverse";

      case "right":
        return "row";
    }
  };

  return (
    <BBox
      width={totalWidth}
      alignItems="center"
      flexDirection={getFlexDirection()}
    >
      <BBox
        flexGrow={1}
        height={12}
        backgroundColor={trackColor[2] || color[2]}
        borderColor={thumbColor[2]}
        borderWidth={0.1}
        borderRadius={"rounded"}
        overflow={"hidden"}
      >
        <Animated.View style={classNames.animatedProgress} />
      </BBox>
      {(label || spinner) && (
        <BBox flexDirection="row" alignItems="center">
          {label && <BText>{label}</BText>}
          {spinner && missingTime > 0 && (
            <ActivityIndicator color={spinnerColor[0] || color[0]} />
          )}
        </BBox>
      )}
    </BBox>
  );
};

export default BProgressBar;
