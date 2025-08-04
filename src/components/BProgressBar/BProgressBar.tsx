import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { ProgressBarProps } from "./types";
import BBox from "../BBox/BBox";
import BText from "../BText/BText";
import { FlexAlignRules } from "../BBox/types";

const BProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { radius, themeColor } = useTheme();

  const {
    totalTime,
    elapsedTime,
    color = themeColor.primary,
    trackColor = color,
    thumbColor = color,
    spinnerColor = color,
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

  const [containerWidth, setContainerWidth] = useState(1);

  const interpolatedWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [containerWidth, 0],
  });

  const classNames = StyleSheet.create({
    animatedProgress: {
      width: interpolatedWidth,
      height: 12,
      backgroundColor: thumbColor[0] || color[0],
      borderRadius: radius.rounded,
    },
  });

  type flexObject = {
    align: FlexAlignRules;
    direction: "row" | "column" | "row-reverse" | "column-reverse";
  };

  const getFlex = () => {
    let flexObject: flexObject = { align: "stretch", direction: "column" };

    switch (labelPosition) {
      case "bottom":
      default:
        flexObject.align = "stretch";
        flexObject.direction = "column";
        break;

      case "top":
        flexObject.align = "stretch";
        flexObject.direction = "column-reverse";
        break;

      case "left":
        flexObject.align = "center";
        flexObject.direction = "row-reverse";
        break;

      case "right":
        flexObject.align = "center";
        flexObject.direction = "row";
        break;
    }

    return flexObject;
  };

  const getFlexObject = getFlex();

  return (
    <BBox
      alignItems={getFlexObject.align}
      flexDirection={getFlexObject.direction}
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
        <View
          style={{ width: "100%" }}
          onLayout={(event: LayoutChangeEvent) => {
            const { width } = event.nativeEvent.layout;
            setContainerWidth(width);
          }}
        >
          <Animated.View style={classNames.animatedProgress} />
        </View>
      </BBox>
      {(label || spinner) && (
        <BBox flexDirection="row" alignItems="center" justifyContent="center">
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

// tested with:
// const [elapsedTime, setElapsedTime] = useState(0);
// const totalTime = 10;

// useEffect(() => {
//   const interval = setInterval(() => {
//     setElapsedTime(prev => prev + 1);
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);
