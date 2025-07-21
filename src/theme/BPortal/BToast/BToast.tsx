import { ToastProps } from "./types";
import BBox from "../../../components/BBox/BBox";
import BText from "../../../components/BText/BText";
import { BIcons } from "../../tokens";
import { useTheme } from "../../ThemeProvider";
import { useToast } from "./useToast";
import { Animated, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import BRoundedButton from "../../../components/BButtons/BRoundedButton/BRoundedButton";

export const BToast: React.FC<ToastProps> = (props) => {
  const { spacing, radius, fontWeights, themeColor, colors } = useTheme();
  const { closeToast } = useToast();

  const {
    title,
    description,
    timeout,
    disruptive,
    borderRadius = radius.sm,
    primaryColor = themeColor.primary,
    contentColor = colors.black,
  } = props;

  // -------- ANIMATION
  const toastAnim = useRef(new Animated.Value(0)).current;
  const toggleSlideIn = () => {
    Animated.timing(toastAnim, {
      toValue: -450 - spacing.xl,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const toggleSlideOut = () => {
    Animated.timing(toastAnim, {
      toValue: 450 - spacing.xl,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    toggleSlideIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // -------- ANIMATION

  const handleClose = () => {
    toggleSlideOut();

    setTimeout(() => {
      closeToast();
    }, 250);
  };

  useEffect(() => {
    if (!timeout) return;
    setTimeout(() => {
      handleClose();
    }, timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout]);

  const classNames = StyleSheet.create({
    box: {
      position: "absolute",
      bottom: spacing.xl,
      right: -450,
      zIndex: 10000000000,
      transform: [{ translateX: toastAnim }],
    },
  });

  return (
    <Animated.View style={classNames.box}>
      <BBox
        width={450}
        padding={spacing.lg}
        backgroundColor={disruptive ? colors.red[2] : primaryColor[2]}
        borderRadius={borderRadius}
        shadow="light"
      >
        <BBox
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <BText
            fontSize={"xs"}
            fontWeight={fontWeights.bold}
            color={contentColor}
          >
            {title.toUpperCase()}
          </BText>

          <BRoundedButton
            action={handleClose}
            primaryColor={disruptive ? colors.red : primaryColor}
            variant="filled"
            icon={BIcons.Close}
            size={"xs"}
          />
        </BBox>
        <BText fontSize={"xxs"} color={contentColor}>
          {description}
        </BText>
      </BBox>
    </Animated.View>
  );
};
