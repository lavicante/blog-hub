import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/Button/Button';
import { Input } from 'shared/Input/ui/Input';
import { classNames } from 'shared/lib/classNames';

import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
}

export const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.AddCommentForm, [className])}>
      <Input />
      <Button>{t('Отправить')}</Button>
    </div>
  );
});
