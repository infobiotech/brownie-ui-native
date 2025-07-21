import BBox from "../../../components/BBox/BBox";
import BButton from "../../../components/BButtons/BButton/BButton";
import BRoundedButton from "../../../components/BButtons/BRoundedButton/BRoundedButton";
import BText from "../../../components/BText/BText";
import { useTheme } from "../../ThemeProvider";
import { BIcons } from "../../tokens";
import { ModalProps } from "./types";
import { useModal } from "./useModal";

export const BModal: React.FC<ModalProps> = (props) => {
  const { spacing, radius, fontWeights, themeColor, colors } = useTheme();
  const { closeModal } = useModal();

  const {
    title,
    confirmAction,
    cancelAction,
    cancelIconPosition = "bottom",
    confirmLabel = "Confirm",
    confirmColor = themeColor.primary,
    cancelLabel = "Cancel",
    cancelColor = colors.gray,
    buttonsVariant,
    disruptive,
    borderRadius = radius.md,
    modalBackgroundColor = colors.white,
    overlayColor = colors.gray[2],
    children,
  } = props;

  const renderChildren = () => {
    if (typeof children === "string") {
      return <BText>{children}</BText>;
    } else {
      return children;
    }
  };

  const handleCancel = () => {
    cancelAction && cancelAction();
    closeModal();
  };
  const handleConfirm = () => {
    confirmAction && confirmAction();
    closeModal();
  };

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
      <BBox
        width={"40%"}
        height={
          confirmAction || cancelIconPosition === "bottom" ? "30%" : "auto"
        }
        maxWidth={"80%"}
        maxHeight={"80%"}
        gap={spacing.lg}
        padding={spacing.xl}
        backgroundColor={modalBackgroundColor}
        borderRadius={borderRadius}
      >
        <BBox
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <BText fontWeight={fontWeights.bold}>{title.toUpperCase()}</BText>
          {cancelIconPosition === "top" && (
            <BRoundedButton
              action={handleCancel}
              primaryColor={cancelColor}
              icon={BIcons.Close}
              size={"md"}
              variant={buttonsVariant}
            />
          )}
        </BBox>

        <BBox flexGrow={1}>{children && renderChildren()}</BBox>

        <BBox
          width={"100%"}
          flexDirection={"row"}
          justifyContent={
            confirmAction && cancelIconPosition === "bottom"
              ? "space-between"
              : "center"
          }
        >
          {cancelIconPosition === "bottom" && (
            <BButton
              fullwidth={!confirmAction}
              action={handleCancel}
              primaryColor={cancelColor}
              variant={buttonsVariant}
            >
              {cancelLabel}
            </BButton>
          )}
          {confirmAction && (
            <BButton
              fullwidth={cancelIconPosition === "top"}
              action={handleConfirm}
              primaryColor={disruptive ? colors.red : confirmColor}
              variant={buttonsVariant}
            >
              {confirmLabel}
            </BButton>
          )}
        </BBox>
      </BBox>
    </BBox>
  );
};
