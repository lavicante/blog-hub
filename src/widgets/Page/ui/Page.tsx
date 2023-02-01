import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollByPath, scrollSaveActions } from 'features/scrollSave';
import { ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { useTrottle } from 'shared/lib/hooks/useTrottle/useTrottle';

import classes from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  callbackEndScroll?: () => void;
}

export const Page = ({ className, children, callbackEndScroll }: PageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const dispath = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPostion = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  useScroll({
    targetRef,
    wrapperRef,
    callback: callbackEndScroll,
  });

  useInitialProject(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPostion;
    }
  });

  const onScroll = useTrottle((event: React.UIEvent<HTMLDivElement>) => {
    dispath(
      scrollSaveActions.setScrollPosition({
        postition: event.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  return (
    <div
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(classes.Page, [className])}
    >
      {children}
      <div ref={targetRef} />
    </div>
  );
};
