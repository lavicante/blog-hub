import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Button.module.scss';

export enum VariantButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outline_inverted',
  OUTLINE_RED = 'outline_red',
  OUTLINE_RED_INVERTED = 'outline_red_inverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantButton;
  square?: boolean;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = VariantButton.OUTLINE,
  square,
  size = SizeButton.M,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const mods = {
    [classes.square]: square,
    [classes.disabled]: disabled,
  };

  return (
    <button
      {...otherProps}
      className={classNames(
        classes.Button,
        [className, classes[variant], classes[size]],
        mods
      )}
    >
      {children}
    </button>
  );
};
