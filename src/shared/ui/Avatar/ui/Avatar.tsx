import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
}

export const Avatar = memo(({ className, size, src, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <div style={styles} className={classNames(classes.Avatar, [className])}>
      <img src={src} alt={alt} />
    </div>
  );
});
