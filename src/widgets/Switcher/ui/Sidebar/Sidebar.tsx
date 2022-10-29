import { AppPath } from 'app/routers/config/routerConfig';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLInk, AppLinkTheme } from 'shared/AppLink/ui/AppLInk';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { Button, SizeButton, VariantButton } from 'shared/Button/Button';
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
      <div className={classes.links}>
        <AppLInk
          to={AppPath.main}
          theme={AppLinkTheme.SECONDARY}
          className={classes.item}
        >
          <MainIcon />
          <span className={classes.link}>{t('Главная')}</span>
        </AppLInk>
        <AppLInk
          to={AppPath.about}
          theme={AppLinkTheme.SECONDARY}
          className={classes.item}
        >
          <AboutIcon />
          <span className={classes.link}>{t('О нас')}</span>
        </AppLInk>
      </div>
      <Button
        data-testid='sidebar-toggle'
        onClick={onCollapsed}
        className={classes.collapsedBtn}
        variant={VariantButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.switchers}>
        <ThemeButton />
        <SwitcherButton />
      </div>
    </div>
  );
};
