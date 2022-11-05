import {
  lazy,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/Portal/Portal';

import classes from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, onClose, isOpen }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [classes.opened]: isOpening,
    [classes.isClosing]: isClosing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      timeRef.current = setTimeout(() => {
        setIsOpening(true);
      }, 0);
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      setIsOpening(false);
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.Modal, [className], mods)}>
        <div className={classes.overlay} onClick={handleClose}>
          <div className={classes.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
