import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mode } from 'shared/lib/classNames';

import classes from './Select.module.scss';

export interface SelectOptions {
  value: string;
  option: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOptions[];
}

export const Select = memo((props: SelectProps) => {
  const { className, value, options, onChange, label } = props;

  const mods: Mode = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
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
});
