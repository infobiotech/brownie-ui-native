import { Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// const guidelineBaseWidth = 600;
const guidelineBaseWidth = 1100;

export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * Raw font sizes — unscaled, design-system based.
 */
export const RawFontSizes = {
  xxs: 13,
  xs: 16,
  sm: 18,
  md: 21,
  lg: 24,
  xl: 30,
};

/**
 * Scaled font sizes — ready for use in components.
 */
export const BFontSizes = {
  xxs: scale(RawFontSizes.xxs),
  xs: scale(RawFontSizes.xs),
  sm: scale(RawFontSizes.sm),
  md: scale(RawFontSizes.md),
  lg: scale(RawFontSizes.lg),
  xl: scale(RawFontSizes.xl),
};

/**
 * Font weights — mapped to platform-specific or custom names
 */
export const BFontWeights = {
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  black: '900' as const,
};

/**
 * Font families — override as needed per platform or brand
 * Android: normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
 */
export const BFontFamilies = {
  family: Platform.select({
    ios: 'System',
    android: 'Roboto',
    web: 'sans-serif',
    default: 'System',
  }),
  // heading: Platform.select({
  //   ios: 'System',
  //   android: 'Roboto',
  //   web: 'sans-serif',
  //   default: 'System',
  // }),
};

// How to add fonts in React Native (CLI projects)
// 1. Create an assets/fonts folder and add your font files
// 2. Create a react-native.config.js file to specify the font assets path
// module.exports = {
//   project: {
//     ios: {},
//     android: {},
//   },
//   assets: ['./assets/fonts'],
// };
// 3. Run npx react-native-asset to link the fonts
// 4. Use the fonts with fontFamily in your styles
// Quicksand-Light.ttf
// quicksandLight: {
//   fontFamily: "Quicksand-Light",
//   fontSize: 20,
// },

export type BFontSizeValue = (typeof BFontSizes)[keyof typeof BFontSizes];
export type BFontSizeKey = keyof typeof BFontSizes;
export type BFontWeightKey = keyof typeof BFontWeights;

// example component
// import { Text, StyleSheet } from 'react-native';
// import { FontSizes, FontWeights, FontFamilies } from '../theme/tokens/typography';

// const Title = () => (
//   <Text style={styles.title}>Welcome</Text>
// );

// const styles = StyleSheet.create({
//   title: {
//     fontSize: FontSizes.lg,
//     fontWeight: FontWeights.bold,
//     fontFamily: FontFamilies.heading,
//   },
// });
