import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, [className])}>
      <div className={classes.Links}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
      </div>
    </div>
  );
};
