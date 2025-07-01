import { ReactNode } from 'react';
import { BRadiusKey, BSpacingKey } from '../../theme/tokens/spacing';
import { BColorKey, BColorValue } from '../../theme/tokens/colors';

type FlexAlignRules =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-evenly'
  | 'space-around'
  | 'stretch';

type Measurements =
  | number
  | `${number}vw`
  | `${number}vh`
  | `${number}%`
  | 'auto'
  | 'fit-content';

type Spaces = number | BSpacingKey;

export interface BoxProps {
  // Box Model
  width?: Measurements;
  height?: Measurements;
  margin?: Spaces | 'auto';
  marginVertical?: Spaces | 'auto';
  marginHorizontal?: Spaces | 'auto';
  marginTop?: Spaces | 'auto';
  marginRight?: Spaces | 'auto';
  marginBottom?: Spaces | 'auto';
  marginLeft?: Spaces | 'auto';
  padding?: Spaces;
  paddingVertical?: Spaces;
  paddingHorizontal?: Spaces;
  paddingTop?: Spaces;
  paddingRight?: Spaces;
  paddingBottom?: Spaces;
  paddingLeft?: Spaces;
  borderWidth?: number;

  // Layout
  display?: 'block' | 'inline-block' | 'flex' | 'grid';
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: Measurements | 'unset';
  right?: Measurements | 'unset';
  bottom?: Measurements | 'unset';
  left?: Measurements | 'unset';
  zIndex?: Measurements | 'unset';
  float?: 'left' | 'right';
  visibility?: 'visible' | 'hidden';
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';

  // Flex
  flexGrow?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: FlexAlignRules;
  alignItems?: FlexAlignRules;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';

  // Grid
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumn?: string;
  gridRow?: string;

  gap?: Spaces;

  // Visual
  backgroundColor?: BColorKey | BColorValue | string;
  backgroundOpacity?:
    | '10'
    | '20'
    | '30'
    | '40'
    | '50'
    | '60'
    | '70'
    | '80'
    | '90'
    | '100';
  borderColor?: BColorKey | BColorValue | string;
  borderRadius?: BRadiusKey | number;
  borderStyle?:
    | 'solid'
    | 'dotted'
    | 'dashed'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset';
  opacity?: number;
  aspectRatio?: number;

  // Box
  children?: ReactNode;
  style?: any;
}
