import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/Modal/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames(classes.LoginModal, [className])}
  >
    <LoginForm />
  </Modal>
);
