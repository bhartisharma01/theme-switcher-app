import { createContext, useContext } from "react";

type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  themeMode: Theme;
  setTheme: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  themeMode: "theme1",
  setTheme: () => {},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}
