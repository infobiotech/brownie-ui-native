// \* LEGGIMI
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
