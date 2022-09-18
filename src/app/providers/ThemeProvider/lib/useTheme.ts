import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  useThemeContext,
} from "./ThemeContext";
import { useContext } from "react";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  };

  return {
    toggleTheme: changeTheme,
    theme,
  };
};
