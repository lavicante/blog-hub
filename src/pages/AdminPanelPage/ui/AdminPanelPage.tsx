import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Page } from 'widgets/Page/ui/Page';

import classes from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(classes.AdminPanelPage)}>
      {t('Админ панель')}
    </Page>
  );
});
