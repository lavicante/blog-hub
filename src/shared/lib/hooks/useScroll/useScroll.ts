import { MutableRefObject, useEffect, useRef } from 'react';

interface IUseScrollProps {
  wrapperRef: MutableRefObject<HTMLDivElement | null>;
  targetRef: MutableRefObject<HTMLDivElement | null>;
  callback?: () => void;
}

export const useScroll = ({
  wrapperRef,
  targetRef,
  callback,
}: IUseScrollProps) => {
  let observer: IntersectionObserver | null = null;
  useEffect(() => {
    if (wrapperRef.current && targetRef.current && callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer?.unobserve(targetRef.current);
      }
    };
  }, [wrapperRef, targetRef, callback]);
};
