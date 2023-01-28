import { getUserAuthData } from 'entities/User';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { AppLInk, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLInk';
import { ISidebarItem } from 'widgets/Switcher/types/sideBarItems';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const auth = useSelector(getUserAuthData);

  if (item.privateRoute && !auth) {
    return null;
  }

  return (
    <AppLInk
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(classes.item, [], {
        [classes.collapsed]: collapsed,
      })}
    >
      <item.icon className={classes.icon} />
      <span className={classNames(classes.link)}>{t(item.text)}</span>
    </AppLInk>
  );
});
