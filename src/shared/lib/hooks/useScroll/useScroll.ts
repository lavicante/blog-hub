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
    const wrapper = wrapperRef.current;
    const target = targetRef.current;
    if (wrapper && target && callback) {
      const options = {
        root: wrapper,
        rootMargin: '0px',
        threshold: 1.0,
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(target);
    }
    return () => {
      if (target && observer) {
        observer.unobserve(target);
      }
    };
  }, [wrapperRef, targetRef, callback]);
};
