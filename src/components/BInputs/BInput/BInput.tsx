import { useState, useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { BIcons } from "../../../theme/tokens";
import BBox from "../../BBox/BBox";
import BRoundedButton from "../../BButtons/BRoundedButton/BRoundedButton";
import BText from "../../BText/BText";
import { InputProps } from "./types";

export const BInput: React.FC<InputProps> = (props) => {
  const {
    themeColor,
    fontSizes,
    fontFamilies,
    fontWeights,
    colors,
    radius,
    spacing,
  } = useTheme();

  const {
    value,
    onChange,
    inputMode = "text",
    onBlur,
    onFocus,
    onPress,
    placeholder,
    label,
    autoFocus,
    maxLength,
    withMaxLengthLabel,
    disabled,
    multiline,
    width = 280,
    borderRadius = radius.sm,
  } = props;

  const [isLimitReached, setIsLimitReached] = useState(false);

  useEffect(() => {
    if (typeof value !== "string" || !maxLength) {
      return;
    }
    setIsLimitReached(value.length > maxLength);
  }, [value, maxLength]);

  const classNames = StyleSheet.create({
    input: {
      width: width - 60,
      padding: 0,
      fontSize: fontSizes.xs,
      fontFamily: fontFamilies.family,
    },
  });

  const handleOnChange = (newValue: string) => {
    if (inputMode === "numeric" || inputMode === "tel") {
      onChange(Number(newValue));
    } else {
      onChange(newValue);
    }
  };

  return (
    <BBox alignItems={withMaxLengthLabel ? "flex-end" : "flex-start"}>
      {label && (
        <BBox paddingLeft={"sm"}>
          <BText>{label}</BText>
        </BBox>
      )}
      <BBox
        width={width}
        flexDirection="row"
        alignItems="center"
        backgroundColor={colors.white[0]}
        borderColor={themeColor.primary[2]}
        borderWidth={1}
        borderRadius={borderRadius}
        padding={spacing.sm}
      >
        <TextInput
          style={classNames.input}
          clearButtonMode={"while-editing"}
          onChangeText={(newValue) => handleOnChange(newValue)}
          value={value.toString()}
          placeholder={placeholder}
          inputMode={inputMode}
          onBlur={onBlur}
          onFocus={onFocus}
          onPress={onPress}
          autoFocus={autoFocus}
          editable={!disabled}
          maxLength={maxLength && maxLength + 1}
          multiline={multiline}
        />
        {!!value && (
          <BRoundedButton
            action={() =>
              onChange(inputMode === "numeric" || inputMode === "tel" ? 0 : "")
            }
            icon={BIcons.Close}
            size={11}
          />
        )}
      </BBox>
      {typeof value === "string" && maxLength && withMaxLengthLabel && (
        <BText
          fontWeight={isLimitReached ? fontWeights.semibold : fontWeights.light}
          color={isLimitReached ? colors.red : themeColor.primary}
          fontSize={fontSizes.xxs}
        >
          {isLimitReached
            ? "Character limit exceeded"
            : `${maxLength - value.length} characters remaining`}
        </BText>
      )}
    </BBox>
  );
};
