import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { skeletonThemeColor } from 'shared/constants/skeletonsTheme';

export const CommentsSkeleton = (props: IContentLoaderProps) => {
  const { width, height } = props;
  const { theme } = useTheme();
  const { backgroundColorSkeleton, foregroundColorSkeleton } =
    skeletonThemeColor[theme];
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox='0 0 400 160'
      backgroundColor={backgroundColorSkeleton}
      foregroundColor={foregroundColorSkeleton}
      {...props}
    >
      <rect x='47' y='18' rx='3' ry='3' width='88' height='6' />
      <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
      <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
      <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
      <circle cx='20' cy='20' r='20' />
    </ContentLoader>
  );
};
