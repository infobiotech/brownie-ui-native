import { BColorKey, BColorValue } from '../../tokens/colors';
import { BFontSizeKey, BFontWeightKey } from '../../tokens/typography';

export interface LoaderProps {
  label?: string;
  labelSize?: BFontSizeKey;
  labelWeight?: BFontWeightKey;
  spinnerSize?: number;
  spinnerColor?: BColorKey | BColorValue | string;
  overlayColor?: BColorKey | BColorValue | string;
}
