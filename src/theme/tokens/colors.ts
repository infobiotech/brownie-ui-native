export const BColors = {
  // transparent: ['transparent'],

  // white: ['#F2F3F4'],
  // black: ['#14171A'],

  gray: ['#656a7f', '#c8cad3', '#e4e6ed'],
  red: ['#d8070b', '#fba0a0', '#ffd1d1'],
  orange: ['#fc8a08', '#fed09b', '#ffe8cc'],
  yellow: ['#ffd20c', '#fffbcb', '#fffde1'],
  green: ['#2bdd66', '#a8f2c0', '#d3f9e0'],
  turquoise: ['#24ddcb', '#a5f2ea', '#cffaf6'],
  blue: ['#0064e4', '#9ac7ff', '#cde5ff'],
  violet: ['#7b2eda', '#caaaf1', '#e7d6fb'],
  pink: ['#FF0090', '#ff9bd4', '#ffceec'],
};

// export const ThemeColors = {
//   background: Palette.white,
//   surface: Palette.gray100,
//   surfaceAlt: Palette.gray200,
//   border: Palette.gray300,
//   textPrimary: Palette.gray900,
//   textSecondary: Palette.gray500,
//   textMuted: Palette.gray400,

//   primary: Palette.enbiotechBlue,
//   primaryLight: Palette.enbiotechBlueLight,
//   primaryLightest: Palette.enbiotechBlueLightest,

//   danger: Palette.red,
//   warning: Palette.orange,
//   success: Palette.green,
// };

// Color variant styling options (e.g. for buttons, badges, etc.)
export const BColorVariants = {
  filled: 'filled',
  light: 'light',
  outline: 'outline',
} as const;

export type BColorValue = (typeof BColors)[keyof typeof BColors];
export type BColorKey = keyof typeof BColors;
export type BColorVariantKey = keyof typeof BColorVariants;

// type MyComponentProps = {
//   variant?: ColorVariantKey; // only allows: 'default' | 'light' | 'outline'
// };

// full example component
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Colors, ColorKey } from '../theme/tokens/colors';

// type MyCardProps = {
//   backgroundColor?: ColorKey;
//   textColor?: ColorKey;
//   title: string;
//   subtitle?: string;
// };

// const MyCard: React.FC<MyCardProps> = ({
//   backgroundColor = 'white',
//   textColor = 'black',
//   title,
//   subtitle,
// }) => {
//   return (
//     <View style={[styles.card, { backgroundColor: Colors[backgroundColor] }]}>
//       <Text style={[styles.title, { color: Colors[textColor] }]}>{title}</Text>
//       {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     padding: 16,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: Colors.enbiotechBlue,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     color: Colors.grayDark,
//     fontSize: 14,
//     marginTop: 8,
//   },
// });

// export default MyCard;
