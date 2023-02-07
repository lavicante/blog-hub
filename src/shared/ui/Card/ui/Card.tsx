import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Card.module.scss';

export enum CardTheme {
  NORMAl = 'normal',
  OUTLINE = 'outline',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;

  theme?: CardTheme;
}

export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAl,
  ...otherProps
}: CardProps) => (
  <div
    {...otherProps}
    className={classNames(classes.Card, [className, classes[theme]])}
  >
    {children}
  </div>
);
