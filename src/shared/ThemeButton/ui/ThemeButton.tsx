import { classNames } from "shared/lib/classNames";
import classes from "./ThemeButton.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, VariantButton } from "shared/Button/Button";

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={VariantButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(classes.ThemeButton, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
