import { useTranslation } from 'react-i18next';
import { Button } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';

import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
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
};
