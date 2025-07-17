import { BColorKey, BColorValue } from '../../theme/tokens/colors';

export interface ProgressBarProps {
  totalTime: number;
  elapsedTime: number;
  color?: BColorKey | BColorValue;
  totalWidth?: number;
  label?: string;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
  spinner?: boolean;
}
