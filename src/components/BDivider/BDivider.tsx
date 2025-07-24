import { useTheme } from "../../theme/ThemeProvider";
import BBox from "../BBox/BBox";
import { DividerProps } from "./types";

const BDivider: React.FC<DividerProps> = (props) => {
  const { themeColor } = useTheme();

  const {
    orientation = "vertical",
    length,
    fullLenght = length ? false : true,
    thickness = 2,
    color = themeColor.primary[2],
  } = props;

  return (
    <BBox
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      alignItems="stretch"
      width={orientation === "horizontal" && fullLenght ? "100%" : "auto"}
      height={orientation === "vertical" && fullLenght ? "100%" : "auto"}
    >
      <BBox
        flexGrow={fullLenght ? 1 : 0}
        backgroundColor={color}
        width={
          orientation === "horizontal"
            ? fullLenght
              ? "auto"
              : length
            : thickness
        }
        height={
          orientation === "horizontal"
            ? thickness
            : fullLenght
            ? "auto"
            : length
        }
        borderRadius={"lg"}
      />
    </BBox>
  );
};

export default BDivider;
