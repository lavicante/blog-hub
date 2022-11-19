import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = memo(({ className }: ThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={VariantButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});
