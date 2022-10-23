import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Button.module.scss';

export enum VariantButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  ...otherProps
}: ButtonProps) => (
  <button
    {...otherProps}
    className={classNames(classes.Button, [className, classes[variant]])}
  >
    {children}
  </button>
);
