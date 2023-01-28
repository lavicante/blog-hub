import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames, Mode } from 'shared/lib/classNames';
import { Button, VariantButton } from 'shared/ui/Button/Button';

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
