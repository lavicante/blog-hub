import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const realoadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(classes.PageError, [className])}>
      <div>
        <p>{t('Упс, произошла ошибка! Попробуйте перезагрузить страницу')}</p>
        <Button onClick={realoadPage}>{t('Перезагрузить')}</Button>
      </div>
    </div>
  );
});
