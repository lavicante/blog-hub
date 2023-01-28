import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { element = window.document.body, children } = props;
  return createPortal(children, element);
};
