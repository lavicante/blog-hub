import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/Input/ui/Input';

const Main = () => {
  const { t, i18n } = useTranslation('main');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <>
      <h1>{t('Главная')}</h1>
      <Input value={value} onCange={onChange} />
    </>
  );
};

export default Main;
