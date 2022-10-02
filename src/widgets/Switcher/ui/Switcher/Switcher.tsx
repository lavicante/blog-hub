import { classNames } from "shared/lib/classNames";
import classes from "./Switcher.module.scss";
import React, { useState } from "react";
import { ThemeButton } from "shared/ThemeButton/ui/ThemeButton";
import { SwitcherButton } from "shared/SwitcherButton/ui/SwitcherButton";

interface SwitcherProps {
  className?: string;
}

export const Switcher = ({ className }: SwitcherProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(classes.Switcher, [className], {
        [classes.collapsed]: collapsed,
      })}
    >
      <button onClick={onCollapsed}>toggle</button>
      <div className={classes.switchers}>
        <ThemeButton />
        <SwitcherButton />
      </div>
    </div>
  );
};
