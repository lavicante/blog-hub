import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select, SelectOptions } from 'shared/Select/ui/Select';

import { Country } from '../model/types/country';

interface CurrencyProps {
  className?: string;
  value: string;
  onChange: (value: Country) => void;
}

const options: SelectOptions[] = [
  {
    value: Country.RUS,
    option: Country.RUS,
  },
  {
    value: Country.UA,
    option: Country.UA,
  },
];

export const CountrySelect = memo(
  ({ className, value, onChange }: CurrencyProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange(value as Country);
      },
      [onChange]
    );

    return (
      <div className={classNames('', [className])}>
        <Select
          options={options}
          value={value}
          label={t('Выберете страну')}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
);
