import { classNames } from "shared/lib/classNames";
import classes from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum VariantButton {
  CLEAR = "clear",
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
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={classNames(classes.Button, [className, classes[variant]])}
    >
      {children}
    </button>
  );
};
