import React, { useCallback, useState } from "react";
import { ThemeProvider as Theme } from "styled-components";

//* Themes
const LightTheme = {
  backgroundColor: "#fff",
  color: "#000",
};

const DarkTheme = {
  backgroundColor: "#000",
  color: "#fff",
};

//* Theme Props
type ThemeProps = "light" | "dark";
type ThemesProps = typeof LightTheme | typeof DarkTheme;

// Theme Context Props
interface ThemeContextProps {
  theme: ThemesProps;
  setTheme?: (newTheme: ThemeProps) => void;
}

//* Theme Context
export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: LightTheme,
});

//* Interfaces / Types
interface ThemeProviderProps {
  children?: React.ReactNode;
}

//* Component
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);

  //* available themes
  const themeMap = {
    light: LightTheme,
    dark: DarkTheme,
  };

  const handleSetTheme = useCallback((newTheme: ThemeProps) => {
    setTheme(themeMap[newTheme as keyof typeof themeMap]);
  }, []);

  return (
    <Theme theme={theme}>
      <ThemeContext.Provider value={{ theme: theme, setTheme: handleSetTheme }}>
        {children}
      </ThemeContext.Provider>
    </Theme>
  );
};

export default ThemeProvider;
