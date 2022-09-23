import { classNames } from "shared/lib/classNames";
import classes from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { PropsWithChildren, ReactNode } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLInkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const AppLInk = ({
  className,
  children,
  to,
  theme,
  ...otherProps
}: AppLInkProps) => {
  return (
    <Link
      to={to}
      className={classNames(classes.AppLInk, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
