import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/Modal/ui/Modal';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(classes.Navbar, [className])}>
      <Button
        onClick={toggleModal}
        className={classes.Links}
        variant={VariantButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={toggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        accusantium alias aliquam atque autem consequatur corporis delectus,
        deserunt, esse facilis id ipsam labore molestias quasi ratione, sed
        tenetur vero voluptatem?
      </Modal>
    </div>
  );
};
