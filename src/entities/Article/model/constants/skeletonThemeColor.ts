import { Theme } from 'app/providers/ThemeProvider';

interface IThemeColor {
  backgroundColorSkeleton: string;
  foregroundColorSkeleton: string;
}

type ISkeletonThemeColor = {
  [key in Theme]: IThemeColor;
};

export const skeletonThemeColor: ISkeletonThemeColor = {
  light: {
    backgroundColorSkeleton: '#fbf4f4',
    foregroundColorSkeleton: '#0f0f0f',
  },
  dark: {
    backgroundColorSkeleton: '#0f0f0f',
    foregroundColorSkeleton: '#fbf4f4',
  },
};
