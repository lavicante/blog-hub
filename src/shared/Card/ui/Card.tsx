import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
  <div {...otherProps} className={classNames(classes.Card, [className])}>
    {children}
  </div>
);
