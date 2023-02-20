import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Page } from 'widgets/Page/ui/Page';

import classes from './Forbbiden.module.scss';

interface ForbbidenProps {
  className?: string;
}

export const Forbbiden = memo(({ className }: ForbbidenProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(classes.Forbbiden)}>
      {t('Доступ запрещен!')}
    </Page>
  );
});
