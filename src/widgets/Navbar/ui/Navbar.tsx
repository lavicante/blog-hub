import React from "react";
import { classNames } from "shared/lib/classNames";
import classes from "./Navbar.module.scss";
import { AppLInk, AppLinkTheme } from "shared/AppLink/ui/AppLInk";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, [className])}>
      <div className={classes.Links}>
        <AppLInk to={"/"} theme={AppLinkTheme.SECONDARY}>
          Главная
        </AppLInk>
        <AppLInk to={"/about"} theme={AppLinkTheme.SECONDARY}>
          О нас
        </AppLInk>
      </div>
    </div>
  );
};
