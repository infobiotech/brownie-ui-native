import React, { useEffect, useState } from "react";
import { StyleSheet, Animated } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { getColor } from "../../theme/tokens/colors";
import BBox from "../BBox/BBox";
import BText from "../BText/BText";
import { AccordionProps } from "./types";
import { getFontSize } from "../../theme/tokens/typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BIcons } from "../../theme/tokens";
import BButton from "../BButtons/BButton/BButton";

const BAccordion: React.FC<AccordionProps> = (props) => {
  const { themeColor, spacing, colors } = useTheme();

  const {
    title,
    children,
    expanded,
    defaultExpanded = false,
    onToggle,
    disabled,
    headerBackgroundColor = themeColor.primary[2],
    titleColor = colors.black,
    titleSize = "md",
    titleWeight = "medium",
    toggleIcon = BIcons.CircleDown,
    toggleIconColor = titleColor,
    toggleIconSize = "md",
    bodyBackgroundColor = colors.gray[2],
    bodyColor,
    bodySize,
    bodyWeight,
    borderColor = colors.gray[1],
    borderRadius = "sm",
  } = props;

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [animation] = useState(new Animated.Value(defaultExpanded ? 1 : 0));

  const isControlled = expanded !== undefined;
  const isCurrentlyExpanded = isControlled ? expanded : isExpanded;

  const toggleAccordion = () => {
    if (disabled) return;

    if (isControlled) {
      if (onToggle) {
        onToggle(!expanded);
      }
    } else {
      const newExpanded = !isExpanded;
      setIsExpanded(newExpanded);
      if (onToggle) {
        onToggle(newExpanded);
      }
    }
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isCurrentlyExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isCurrentlyExpanded, animation]);

  const rotateAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const classNames = StyleSheet.create({
    content: {
      overflow: "hidden",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      borderRadius: 0,
      maxHeight: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1000],
      }),
      opacity: animation,
      pointerEvents: "none",
    },
  });

  const renderChildren = () => {
    if (typeof children === "string") {
      return (
        <BText color={bodyColor} fontSize={bodySize} fontWeight={bodyWeight}>
          {children}
        </BText>
      );
    }
    return children;
  };

  return (
    <BBox
      backgroundColor={bodyBackgroundColor}
      borderColor={borderColor}
      borderWidth={1}
      borderRadius={borderRadius}
      overflow="hidden"
      gap={0}
    >
      <BButton
        action={toggleAccordion}
        disabled={disabled}
        borderRadius={0}
        fullwidth
        primaryColor={headerBackgroundColor}
        shadow="none"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderBottomColor: borderColor,
          borderBottomWidth: isCurrentlyExpanded ? 1 : 0,
        }}
      >
        <BBox
          flexGrow={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding={spacing.xs}
        >
          <BText
            color={getColor(titleColor)}
            fontSize={titleSize}
            fontWeight={titleWeight}
          >
            {title}
          </BText>

          <Animated.View style={[{ transform: [{ rotate: rotateAnimation }] }]}>
            <FontAwesomeIcon
              icon={toggleIcon}
              size={getFontSize(toggleIconSize)}
              color={getColor(toggleIconColor)}
            />
          </Animated.View>
        </BBox>
      </BButton>

      {isCurrentlyExpanded && (
        <Animated.View style={classNames.content}>
          {renderChildren()}
        </Animated.View>
      )}
    </BBox>
  );
};

export default BAccordion;
