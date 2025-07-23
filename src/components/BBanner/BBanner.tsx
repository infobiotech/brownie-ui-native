import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { BIcons } from "../../theme/tokens";
import BBox from "../BBox/BBox";
import BButton from "../BButtons/BButton/BButton";
import BRoundedButton from "../BButtons/BRoundedButton/BRoundedButton";
import { BannerProps } from "./types";
import BText from "../BText/BText";
import BButtonGroup from "../BButtons/BButtonGroup/BButtonGroup";

const BBanner: React.FC<BannerProps> = (props) => {
  const { spacing, radius, colors, fontSizes, fontWeights } = useTheme();

  const {
    logoSrc,
    logoWidth,
    logoHeight,
    height,
    maxHeight,
    action,
    actionIcon = BIcons.Back,
    actionSecondary,
    actionSecondaryIcon,
    actionSecondaryLabel,
    title,
    navItems,
    navController,
    navControllerSetter,
    children,
  } = props;

  return (
    <BBox
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      height={height}
      maxHeight={maxHeight}
    >
      {!title && !logoSrc && !navItems && children}
      <BBox
        width={200}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={spacing.xl}
      >
        {(action || title) && (
          <>
            {action && (
              <BRoundedButton
                action={action}
                icon={actionIcon}
                size={18}
                primaryColor={colors.gray}
              />
            )}
            {actionSecondary && (
              <>
                {actionSecondaryIcon && !actionSecondaryLabel ? (
                  <BRoundedButton
                    action={actionSecondary}
                    size={18}
                    icon={actionSecondaryIcon}
                    primaryColor={colors.gray}
                  />
                ) : (
                  <BButton
                    action={actionSecondary}
                    iconSize={18}
                    icon={actionSecondaryIcon}
                    iconPosition={"left"}
                    primaryColor={colors.gray}
                    borderRadius={radius.rounded}
                  >
                    {actionSecondaryLabel}
                  </BButton>
                )}
              </>
            )}
            {title && (
              <BText fontSize={fontSizes.sm} fontWeight={fontWeights.bold}>
                {title}
              </BText>
            )}
          </>
        )}
      </BBox>
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
      <BBox
        width={200}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        alignItems="center"
      >
        {logoSrc ? (
          <img src={logoSrc} style={{ width: logoWidth, height: logoHeight }} />
        ) : navItems ? (
          children
        ) : (
          <></>
        )}
      </BBox>
    </BBox>
  );
};

export default BBanner;
