import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/Button/Button';
import { Input } from 'shared/Input/ui/Input';
import { classNames } from 'shared/lib/classNames';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm, [className])}>
      <Input
        isAutoFocus
        placeholder='Введите username'
        className={classes.input}
      />
      <Input placeholder='Введите пароль' className={classes.input} />
      <Button>{t('Войти')}</Button>
    </div>
  );
};
