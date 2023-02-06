import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mode } from 'shared/lib/classNames';

import classes from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  option: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  value?: T;
  onChange?: (value: T) => void;
  options: SelectOptions<T>[];
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, value, options, onChange, label } = props;

  console.log(options);

  const mods: Mode = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionsJSX = useMemo(
    () =>
      options.map((opt) => (
        <option className={classes.option} key={opt.value} value={opt.value}>
          {opt.option}
        </option>
      )),
    [options]
  );

  return (
    <div className={classNames(classes.Wrapper, [className], mods)}>
      {label && <span className={classes.label}>{label}</span>}
      <select
        value={value}
        className={classes.Select}
        onChange={onChangeHandler}
      >
        {optionsJSX}
      </select>
    </div>
  );
};
