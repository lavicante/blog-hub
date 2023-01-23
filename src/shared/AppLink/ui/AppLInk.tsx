import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

import classes from './AppLink.module.scss';

export const enum AppLinkVariant {
  SIMPLE = 'simple',
  BUTTON = 'button',
}

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLInkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
  variant?: AppLinkVariant;
}

export const AppLInk = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  variant = AppLinkVariant.SIMPLE,
  ...otherProps
}: AppLInkProps) => (
  <Link
    to={to}
    className={classNames(classes.AppLInk, [
      className,
      classes[theme],
      classes[variant],
    ])}
    {...otherProps}
  >
    {children}
  </Link>
);
