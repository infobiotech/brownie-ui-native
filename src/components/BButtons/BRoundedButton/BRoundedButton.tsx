import React from "react";
import BButton from "../BButton/BButton";
import { RoundedButtonProps } from "./types";
import { useTheme } from "../../../theme/ThemeProvider";

const BRoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const { themeColor, radius } = useTheme();

  const {
    action,
    disabled,
    loading,
    size,
    icon,
    primaryColor = themeColor.primary,
    contentColor,
    variant = "light",
    shadow,
    style,
    contentStyle,
  } = props;

  return (
    <BButton
      action={action}
      disabled={disabled}
      loading={loading}
      iconSize={size}
      icon={icon}
      primaryColor={primaryColor}
      contentColor={contentColor}
      variant={variant}
      aspectRatio={1}
      borderRadius={radius.rounded}
      shadow={shadow}
      style={style}
      contentStyle={contentStyle}
    />
  );
};

export default BRoundedButton;
