import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { SwitcherButton } from 'shared/SwitcherButton/ui/SwitcherButton';
import { ThemeButton } from 'shared/ThemeButton/ui/ThemeButton';

import classes from './Switcher.module.scss';

interface SwitcherProps {
  className?: string;
}

export const Switcher = ({ className }: SwitcherProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid='sidebar'
      className={classNames(classes.Switcher, [className], {
        [classes.collapsed]: collapsed,
      })}
    >
      <button onClick={onCollapsed}>{t('toggle')}</button>
      <div className={classes.switchers}>
        <ThemeButton />
        <SwitcherButton />
      </div>
    </div>
  );
};
