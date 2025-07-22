import { BColorKey, BColorValue } from '../../theme/tokens/colors';
// import { BSpacingKey } from '../../theme/tokens/spacing';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  length?: number;
  fullLenght?: boolean;
  color?: BColorKey | BColorValue | string;
  thickness?: number;
}
