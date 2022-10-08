import React from 'react';
import { AppLInk, AppLinkTheme } from 'shared/AppLink/ui/AppLInk';
import { classNames } from 'shared/lib/classNames';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.Navbar, [className])}>
    <div className={classes.Links}>
      <AppLInk to='/' theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLInk>
      <AppLInk to='/about' theme={AppLinkTheme.SECONDARY}>
        О нас
      </AppLInk>
    </div>
  </div>
);
