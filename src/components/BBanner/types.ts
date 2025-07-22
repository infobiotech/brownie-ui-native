import { Dispatch, ReactNode, SetStateAction } from "react";
import { BIcons } from "../../theme/tokens";
import { Action } from "../BButtons/BButtonGroup/types";

export interface BannerProps {
  logoSrc?: string;
  logoWidth?: number | "auto" | `${number}%`;
  logoHeight?: number | "auto" | `${number}%`;
  maxHeight?: number | "auto" | `${number}%`;
  action?: () => void;
  actionIcon?: BIcons;
  actionSecondary?: () => void;
  actionSecondaryIcon?: BIcons;
  actionSecondaryLabel?: string;
  title?: string;
  navItems?: Action[];
  navController?: string;
  navControllerSetter?: Dispatch<SetStateAction<string>>;
  children?: ReactNode;
}
