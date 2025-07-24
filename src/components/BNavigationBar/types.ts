import { BIcons } from '../../theme/tokens';
import {
  BFontSizeKey,
  BFontSizeValue,
  BFontWeightKey,
} from '../../theme/tokens/typography';

export interface NavigationBarProps {
  title: string;
  titleSize?: BFontSizeKey | BFontSizeValue;
  titleWeight?: BFontWeightKey;
  action: () => void;
  disabled?: boolean;
  actionIcon?: BIcons;
  actionLabel?: string;
  actionLabelSize?: BFontSizeKey | BFontSizeValue;
}
