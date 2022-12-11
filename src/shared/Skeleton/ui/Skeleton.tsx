import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

export const Sceleton = memo((props: IContentLoaderProps) => {
  const { width, height, foregroundColor, backgroundColor } = props;
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox='0 0 600 400'
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      {...props}
    >
      <rect x='106' y='132' rx='3' ry='3' width='410' height='23' />
      <rect x='106' y='165' rx='3' ry='3' width='380' height='25' />
      <rect x='107' y='205' rx='3' ry='3' width='407' height='105' />
      <circle cx='304' cy='56' r='52' />
    </ContentLoader>
  );
});
