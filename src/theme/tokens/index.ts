// import { ReactNode } from "react";

// export type BSizes = 'xxs' | 'xs' |'sm' | 'md' | 'lg' | 'xl' | 'xxl';
// export type BDimension = BSizes | `${number}%` | number;
// export interface BPropsWithChildren {
//   children?: ReactNode;
//   width?: BDimension | 'auto';
//   height?: BDimension | 'auto';
//   padding?: BSpacing | 0;
//   paddingVertical?: BSpacing | 0 | number;
//   paddingHorizontal?: BSpacing | 0 | number;
//   margin?: BSpacing | 'auto' | 0 | number;
//   marginVertical?: BSpacing | 'auto' | 0 | number;
//   marginHorizontal?: BSpacing | 'auto' | 0 | number;
//   marginTop?: BSpacing | 'auto' | 0 | number;
//   marginBottom?: BSpacing | 'auto' | 0 | number;
//   marginLeft?: BSpacing | 'auto' | 0 | number;
//   marginRight?: BSpacing | 'auto' | 0 | number;
//   borderRadius?: BRadius | number;
//   overflow?: 'hidden';
// }

export enum BIcons {
  Home = 'house',
  Gear = 'gear',
  Pen = 'pen',
  History = 'clock-rotate-left',
  Plus = 'plus',
  Back = 'arrow-left',
  Forward = 'arrow-right',
  Warning = 'triangle-exclamation',
  Check = 'check',
  Close = 'xmark',
  Info = 'circle-info',
  CircleStop = 'circle-stop',
  Stop = 'stop',
  Reload = 'rotate',
  Spinner = 'spinner',
  Zoom = 'magnifying-glass-minus',
}
