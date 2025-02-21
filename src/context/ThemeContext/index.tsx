import { createContext, useContext, ReactNode, useState } from "react";
import { lightTheme, darkTheme } from "@styles/global";
import { DefaultTheme } from "styled-components";

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme
    ? savedTheme === "dark"
      ? darkTheme
      : lightTheme
    : lightTheme;

  const [theme, setTheme] = useState<DefaultTheme>(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Atenção: useThemeContext deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
