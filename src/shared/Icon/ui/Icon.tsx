import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Icon.module.scss';

export const enum ICON_COLOR_VARIAN {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}
interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  variantColor?: ICON_COLOR_VARIAN;
}

export const Icon = memo(
  ({ Svg, className, variantColor = ICON_COLOR_VARIAN.PRIMARY }: IconProps) => (
    <Svg
      className={classNames(classes.Icon, [className, classes[variantColor]])}
    />
  )
);
