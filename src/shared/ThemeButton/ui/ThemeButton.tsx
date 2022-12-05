import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames, Mode } from 'shared/lib/classNames';

import classes from './ThemeButton.module.scss';

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = memo(({ className }: ThemeButtonProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant={VariantButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', [className])}
    >
      <LightIcon className={classNames(classes.ThemeButton)} />
    </Button>
  );
});
