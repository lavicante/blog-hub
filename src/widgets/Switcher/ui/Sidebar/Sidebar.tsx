import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, SizeButton, VariantButton } from 'shared/ui/Button/Button';
import { SwitcherButton } from 'shared/ui/SwitcherButton/ui/SwitcherButton';
import { ThemeButton } from 'shared/ui/ThemeButton/ui/ThemeButton';
import { getSidebarItems } from 'widgets/Switcher/selectors/getSideBarItems/getSidebarItems';
import { SidebarItem } from 'widgets/Switcher/ui/SidebarItem/SidebarItem';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItems = useSelector(getSidebarItems);

  const onCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid='sidebar'
      className={classNames(classes.Switcher, [className], {
        [classes.collapsed]: collapsed,
      })}
    >
      <div className={classes.links}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
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
});
