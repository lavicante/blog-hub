import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { Modal } from 'shared/ui/Modal/ui/Modal';

const LoginForm = React.lazy(() => import('../LoginForm/LoginForm'));

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames('', [className])}
  >
    <Suspense fallback={<Loader />}>
      <LoginForm onSuccess={onClose} />
    </Suspense>
  </Modal>
);
