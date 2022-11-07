import { getLoginData } from 'features/AuthBtUsername/model/selectors/getLoginData/getLoginData';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/Button/Button';
import { Input } from 'shared/Input/ui/Input';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { getLoading } from '../../model/selectors/getLoading/getLoading';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getUserName } from '../../model/selectors/getUserName/getUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { error } = useSelector(getLoginData);
  const username = useSelector(getUserName);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getLoading);

  const userNameHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const passwordHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginHandler = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LoginForm, [className])}>
      <Text
        tag='h4'
        variant={TextVarianEnum.PRIMARY}
        className={classes.heading}
      >
        Авторизация
      </Text>

      {error && (
        <Text tag='span' variant={TextVarianEnum.ERROR}>
          {error}
        </Text>
      )}

      <Input
        value={username}
        isAutoFocus
        placeholder='Введите username'
        className={classes.input}
        onCange={userNameHandler}
      />
      <Input
        value={password}
        placeholder='Введите пароль'
        className={classes.input}
        onCange={passwordHandler}
        type='password'
      />
      <Button onClick={onLoginHandler}>{t('Войти')}</Button>
    </div>
  );
});
