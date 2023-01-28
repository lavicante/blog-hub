import { ReactNode, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';

import classes from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  callbackEndScroll?: () => void;
}

export const Page = ({ className, children, callbackEndScroll }: PageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useScroll({
    targetRef,
    wrapperRef,
    callback: callbackEndScroll,
  });

  return (
    <div ref={wrapperRef} className={classNames(classes.Page, [className])}>
      {children}
      <div ref={targetRef} />
    </div>
  );
};
