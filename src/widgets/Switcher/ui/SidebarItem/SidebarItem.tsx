import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLInk, AppLinkTheme } from 'shared/AppLink/ui/AppLInk';
import { classNames } from 'shared/lib/classNames';
import { ISidebarItem } from 'widgets/Switcher/model/items';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
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
