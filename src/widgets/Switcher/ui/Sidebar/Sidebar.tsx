import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';
import { SwitcherButton } from 'shared/SwitcherButton/ui/SwitcherButton';
import { ThemeButton } from 'shared/ThemeButton/ui/ThemeButton';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
      <Button data-testid='sidebar-toggle' onClick={onCollapsed}>
        {t('toggle')}
      </Button>
      <div className={classes.switchers}>
        <ThemeButton />
        <SwitcherButton />
      </div>
    </div>
  );
};
