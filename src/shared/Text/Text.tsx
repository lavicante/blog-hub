import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Text.module.scss';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
type AlignType = 'center' | 'left' | 'right';

export enum TextVarianEnum {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface TextProps {
  tag: TagType;
  variant: TextVarianEnum;
  children: ReactNode;
  className?: string;
  align?: AlignType;
}

export const Text = memo((props: TextProps) => {
  const { tag, variant, className, children, align = 'center' } = props;

  switch (tag) {
    case 'h1':
      return (
        <h1
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </h6>
      );
    case 'p':
      return (
        <p
          className={classNames(classes.Text, [
            className,
            classes[variant],
            classes[align],
          ])}
        >
          {children}
        </p>
      );
    default:
      return (
        <span
          className={classNames(classes.Text, [className, classes[variant]])}
        >
          {children}
        </span>
      );
  }
});
