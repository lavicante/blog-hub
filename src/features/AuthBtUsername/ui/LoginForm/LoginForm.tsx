import { getLoginError } from 'features/AuthBtUsername/model/selectors/getLoginError/getLoginError';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/Button/Button';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { Input } from 'shared/Input/ui/Input';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { getLoading } from '../../model/selectors/getLoading/getLoading';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getUserName } from '../../model/selectors/getUserName/getUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  onSuccess: () => void;
  className?: string;
}

const initReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getUserName);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getLoginError);

  useDynamicReducer(initReducers);

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

  const onLoginHandler = useCallback(async () => {
    const { meta } = await dispatch(loginByUserName({ username, password }));

    if (meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <div className={classNames(classes.LoginForm, [className])}>
      <Text
        tag='h4'
        variant={TextVarianEnum.PRIMARY}
        className={classes.heading}
      >
        {t('??????????????????????')}
      </Text>

      {error && (
        <Text tag='span' variant={TextVarianEnum.ERROR}>
          {error}
        </Text>
      )}

      <Input
        value={username}
        isAutoFocus
        placeholder='?????????????? username'
        className={classes.input}
        onCange={userNameHandler}
      />
      <Input
        value={password}
        placeholder='?????????????? ????????????'
        className={classes.input}
        onCange={passwordHandler}
        type='password'
      />
      <Button disabled={isLoading} onClick={onLoginHandler}>
        {t('??????????')}
      </Button>
    </div>
  );
});

export default LoginForm;
