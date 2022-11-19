import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Text.module.scss';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

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
}

export const Text = memo((props: TextProps) => {
  const { tag, variant, className, children } = props;

  switch (tag) {
    case 'h1':
      return (
        <h1 className={classNames(classes.Text, [className, classes[variant]])}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classNames(classes.Text, [className, classes[variant]])}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classNames(classes.Text, [className, classes[variant]])}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={classNames(classes.Text, [className, classes[variant]])}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={classNames(classes.Text, [className, classes[variant]])}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={classNames(classes.Text, [className, classes[variant]])}>
          {children}
        </h6>
      );
    case 'p':
      return (
        <p className={classNames(classes.Text, [className, classes[variant]])}>
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
