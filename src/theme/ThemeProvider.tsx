import React, { createContext, useContext } from "react";
import { defaultTheme, Theme } from "./defaulTheme";
import { createTheme } from "./createTheme";
// FONT AWESOME ICONS https://docs.fontawesome.com/web/use-with/react-native
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { PortalProvider } from "./BPortal/BPortalContext";

const ThemeContext = createContext<Theme>(defaultTheme);
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<{
  theme?: Partial<Theme>;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  library.add(fas);
  const mergedTheme = createTheme(theme || {});
  return (
    <ThemeContext.Provider value={mergedTheme}>
      <PortalProvider>{children}</PortalProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
