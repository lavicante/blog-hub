import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onCange?: (value: string) => void;
  isAutoFocus?: boolean;
}

export const Input = memo(
  ({
    className,
    onCange,
    value,
    type = 'text',
    isAutoFocus,
    ...otherProps
  }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onCange?.(e.target.value);
    };

    useEffect(() => {
      if (isAutoFocus) {
        inputRef.current?.focus();
      }
    }, [isAutoFocus]);

    return (
      <input
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChangeHandler}
        className={classNames(classes.Input, [className])}
        {...otherProps}
      />
    );
  }
);
