// \* README
// In the consumer app
npm install react-native-svg

function App() {
const { colors, spacing } = useTheme();

const customTheme = createTheme({
themeColor: { primary: colors.pink },
fontFamilies: { family: 'monospace' },
});

return (
<ThemeProvider theme={customTheme}>
...your app
</ThemeProvider>
);
}

// How to add fonts in React Native (CLI projects)
// 1. Create an assets/fonts folder and add your font files
// 2. Create a react-native.config.js file to specify the font assets path
// module.exports = {
// project: {
// ios: {},
// android: {},
// },
// assets: ['./assets/fonts'],
// };
// 3. Run npx react-native-asset to link the fonts
// 4. Use the fonts with fontFamily in your styles
// Quicksand-Light.ttf
// quicksandLight: {
// fontFamily: "Quicksand-Light",
// fontSize: 20,
// },
