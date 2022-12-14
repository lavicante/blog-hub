import { useEffect } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  useThemeContext,
} from './ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
  const { theme = Theme.LIGHT, setTheme } = useThemeContext();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  };

  return {
    toggleTheme: changeTheme,
    theme,
  };
};
