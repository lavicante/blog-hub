import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { Page } from 'widgets/Page/ui/Page';

const Main = memo(() => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page>
      <h1>{t('Главная')}</h1>
      <Input value={value} onCange={onChange} />
    </Page>
  );
});

export default Main;
