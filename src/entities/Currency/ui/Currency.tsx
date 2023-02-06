import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/ui/Select';

import { Currency } from '../model/types/currency';

interface CurrencyProps {
  className?: string;
  value: string;
  onChange: (value: Currency) => void;
}

const options: SelectOptions<Currency>[] = [
  {
    value: Currency.RUB,
    option: Currency.RUB,
  },
  {
    value: Currency.USD,
    option: Currency.USD,
  },
];

export const CurrencySelect = memo(
  ({ className, value, onChange }: CurrencyProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange(value as Currency);
      },
      [onChange]
    );

    return (
      <div className={classNames('', [className])}>
        <Select
          options={options}
          value={value}
          label={t('Выберете валюту')}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
);
