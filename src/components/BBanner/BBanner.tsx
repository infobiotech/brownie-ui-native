import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
import BBox from "../BBox/BBox";
import BButton from "../BButtons/BButton/BButton";
import BRoundedButton from "../BButtons/BRoundedButton/BRoundedButton";
import { BannerProps } from "./types";
import BText from "../BText/BText";
import BButtonGroup from "../BButtons/BButtonGroup/BButtonGroup";
import { Image, ImageSourcePropType } from "react-native";
import { BIcons } from "../../theme/tokens";

const BBanner: React.FC<BannerProps> = (props) => {
  const { spacing, radius, colors, fontSizes, fontWeights } = useTheme();

  const {
    logoSrc,
    logoWidth,
    logoHeight,
    height,
    maxHeight,
    action,
    actionLabel,
    actionIcon,
    actionSecondary,
    actionSecondaryIcon,
    actionSecondaryLabel,
    title,
    navItems,
    navController,
    navControllerSetter,
    children,
  } = props;

  const renderActionButton = (
    onPress?: () => void,
    icon?: BIcons,
    label?: string
  ) => {
    if (!onPress) return null;

    return icon && !label ? (
      <BRoundedButton
        action={onPress}
        icon={icon}
        size={18}
        primaryColor={colors.gray}
      />
    ) : (
      <BButton
        action={onPress}
        icon={icon}
        primaryColor={colors.gray}
        iconPosition="left"
        iconSize={18}
        borderRadius={radius.rounded}
      >
        {label}
      </BButton>
    );
  };

  const renderLeftContent = () => {
    if (!action && !title && !actionSecondary) return null;

    return (
      <BBox
        width={200}
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={spacing.xl}
      >
        {renderActionButton(action, actionIcon, actionLabel)}
        {renderActionButton(
          actionSecondary,
          actionSecondaryIcon,
          actionSecondaryLabel
        )}
        {title && (
          <BText fontSize={fontSizes.sm} fontWeight={fontWeights.bold}>
            {title}
          </BText>
        )}
      </BBox>
    );
  };

  const renderCenterContent = () => (
    <BBox flexGrow={1} alignItems="center" justifyContent="center">
      {navItems && navControllerSetter && (
        <BButtonGroup
          size="xs"
          actions={navItems}
          active={navController}
          setter={navControllerSetter}
        />
      )}
      {(title || logoSrc) && !navItems && children}
    </BBox>
  );

  const renderRightContent = () => {
    return (
      <BBox
        width={200}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {logoSrc ? (
          <Image
            source={logoSrc as ImageSourcePropType}
            style={{ width: logoWidth, height: logoHeight }}
          />
        ) : navItems ? (
          children
        ) : null}
      </BBox>
    );
  };

  const renderOnlyChildren = () => {
    return !title && !logoSrc && !navItems ? children : null;
  };

  return (
    <BBox
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height={height}
      maxHeight={maxHeight}
    >
      {renderOnlyChildren()}
      {renderLeftContent()}
      {renderCenterContent()}
      {renderRightContent()}
    </BBox>
  );
};

export default BBanner;
