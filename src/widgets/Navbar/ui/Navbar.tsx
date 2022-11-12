import { getUserData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthBtUsername';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userData) {
    return (
      <div className={classNames(classes.Navbar, [className])}>
        <Button
          onClick={onLogout}
          className={classes.Links}
          variant={VariantButton.CLEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, [className])}>
      <Button
        onClick={onShowModal}
        className={classes.Links}
        variant={VariantButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onClose} />
    </div>
  );
};
