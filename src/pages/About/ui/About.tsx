import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

const About = memo(() => {
  const { t } = useTranslation('about');

  return (
    <Page>
      <h1>{t('О нас')}</h1>
    </Page>
  );
});

export default About;
