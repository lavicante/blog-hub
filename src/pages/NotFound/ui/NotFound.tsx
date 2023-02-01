import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Page } from 'widgets/Page/ui/Page';

import classes from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = memo(({ className }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(classes.NotFound)}>
      {t('Страница не найдена')}
    </Page>
  );
});
