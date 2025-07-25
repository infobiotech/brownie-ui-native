import { useTheme } from "../../theme/ThemeProvider";
import BBox from "../BBox/BBox";
import { DividerProps } from "./types";

const BDivider: React.FC<DividerProps> = (props) => {
  const { themeColor } = useTheme();

  const {
    orientation = "vertical",
    length,
    fullLength = !length,
    thickness = 2,
    color = themeColor.primary[2],
  } = props;

  const isHorizontal = orientation === "horizontal";

  return (
    <BBox
      flexDirection={isHorizontal ? "row" : "column"}
      alignItems={"center"}
      justifyContent="center"
      flexGrow={fullLength ? 1 : 0}
      width={isHorizontal ? length : thickness}
      maxWidth={isHorizontal ? length : thickness}
      height={isHorizontal ? thickness : length}
      maxHeight={isHorizontal ? thickness : length}
    >
      <BBox
        backgroundColor={color}
        borderRadius={"lg"}
        flexGrow={1}
        width={isHorizontal ? "auto" : thickness}
        height={isHorizontal ? thickness : "auto"}
      />
    </BBox>
  );
};

export default BDivider;
