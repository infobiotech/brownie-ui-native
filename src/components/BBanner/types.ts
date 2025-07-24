import { Dispatch, ReactNode, SetStateAction } from "react";
import { BIcons } from "../../theme/tokens";
import { Action } from "../BButtons/BButtonGroup/types";
import { DimensionValue } from "react-native";

export interface BannerProps {
  logoSrc?: string;
  logoWidth?: DimensionValue;
  logoHeight?: DimensionValue;
  height?: Measurements;
  maxHeight?: Measurements;
  action?: () => void;
  actionIcon?: BIcons;
  actionLabel?: string;
  actionSecondary?: () => void;
  actionSecondaryIcon?: BIcons;
  actionSecondaryLabel?: string;
  title?: string;
  navItems?: Action[];
  navController?: string;
  navControllerSetter?: Dispatch<SetStateAction<string>>;
  children?: ReactNode;
}

type Measurements =
  | number
  | `${number}vw`
  | `${number}vh`
  | `${number}%`
  | "auto"
  | "fit-content";
