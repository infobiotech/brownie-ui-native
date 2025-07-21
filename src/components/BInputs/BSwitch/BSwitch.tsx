import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { SwitchProps } from "./types";
import { useTheme } from "../../../theme/ThemeProvider";
import { getColor } from "../../../theme/tokens/colors";
import BButton from "../../BButtons/BButton/BButton";

const BSwitch: React.FC<SwitchProps> = (props) => {
  const { themeColor, radius, spacing } = useTheme();

  const {
    action,
    isOn,
    disabled = false,
    primaryColor = themeColor.primary,
    contentColor,
  } = props;

  // -------- ANIMATION
  const switchAnim = useRef(new Animated.Value(0)).current;
  const toggleAlignment = () => {
    Animated.timing(switchAnim, {
      toValue: !isOn ? 0 : 32 - spacing.xs,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    toggleAlignment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);
  // -------- ANIMATION

  const getContentColor = () => {
    const colorDark = getColor(primaryColor);
    const colorLight = getColor(primaryColor, 2);

    const color = contentColor
      ? getColor(contentColor)
      : isOn
      ? colorLight
      : colorDark;

    return color;
  };

  const classNames = StyleSheet.create({
    track: {
      width: 65,
      borderRadius: radius.rounded,
      paddingVertical: spacing.xxs,
      paddingHorizontal: spacing.xs,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    thumb: {
      width: 22,
      borderRadius: radius.rounded,
      aspectRatio: 1,
      backgroundColor: getContentColor(),
      transform: [{ translateX: switchAnim }],
    },
  });

  return (
    <BButton
      action={action}
      disabled={disabled}
      primaryColor={primaryColor}
      variant={isOn ? "filled" : "light"}
      style={classNames.track}
    >
      <Animated.View style={classNames.thumb} />
    </BButton>
  );
};

export default BSwitch;
