import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLInk, AppLinkTheme } from 'shared/AppLink/ui/AppLInk';
import { classNames } from 'shared/lib/classNames';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.Navbar, [className])}>
      <div className={classes.Links}>
        <AppLInk to='/' theme={AppLinkTheme.SECONDARY}>
          {t('Главная')}
        </AppLInk>
        <AppLInk to='/about' theme={AppLinkTheme.SECONDARY}>
          {t('О нас')}
        </AppLInk>
      </div>
    </div>
  );
};
