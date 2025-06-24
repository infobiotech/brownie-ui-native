import { Theme } from '../../theme/defaulTheme';
import { ButtonProps } from './BButton/types';

// <--------------------------- utils
export const renderChildren = (children: ButtonProps['children']) => {
  if (typeof children === 'string') {
    return 'string';
  } else {
    return 'children';
  }
};

export const getFlexDirection = (iconPosition: ButtonProps['iconPosition']) => {
  switch (iconPosition) {
    case 'right':
      return 'row-reverse';
    case 'left':
    default:
      return 'row';
  }
};

export const getColors = (
  primaryColor: ButtonProps['primaryColor'],
  contentColor: ButtonProps['contentColor'],
  variant: ButtonProps['variant'],
  colors: Theme['colors'],
  themeColor: Theme['themeColor']['primary'],
) => {
  if (!primaryColor) primaryColor = themeColor;
  let colorsObject = { content: '', border: '', background: '' };

  const colorDark =
    typeof primaryColor === 'string'
      ? colors[primaryColor][0]
      : primaryColor[0];

  const colorLight =
    typeof primaryColor === 'string'
      ? colors[primaryColor][2]
      : primaryColor[2];

  const customContentColor = contentColor
    ? typeof contentColor === 'string'
      ? colors[contentColor][0]
      : contentColor[0]
    : '';

  // const darkToContrast = [
  //   colors.black[0],
  //   colors.gray[0],
  //   colors.red[0],
  //   colors.blue[0],
  //   colors.violet[0],
  // ].includes(colorDark);

  // colorsObject.content = customContentColor
  //   ? customContentColor
  //   : variant === 'filled'
  //   ? (darkToContrast)
  //     ? colors.white
  //     : colors.black
  //   : colorDark;

  colorsObject.content = customContentColor
    ? customContentColor
    : variant === 'filled'
    ? colors.white
    : colorDark;

  colorsObject.border = variant === 'light' ? colorLight : colorDark;

  colorsObject.background =
    variant === 'outline'
      ? colors.white
      : variant === 'light'
      ? colorLight
      : colorDark;

  return colorsObject;
};

export const getPadding = (
  size: ButtonProps['size'],
  o: 'v' | 'h',
  spacing: Theme['spacing'],
) => {
  switch (size) {
    case 'xxs':
      return spacing.xs;
    case 'xs':
      return o === 'v' ? spacing.xs : spacing.sm;
    case 'sm':
      return o === 'v' ? spacing.sm : spacing.md;
    case 'md':
      return o === 'v' ? spacing.md : spacing.lg;
    case 'lg':
      return o === 'v' ? spacing.lg : spacing.xl;
    case 'xl':
      return spacing.xl;
    default:
      return o === 'v' ? spacing.sm : spacing.md;
  }
};
// utils ---------------------------> //
