import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo(({ Svg, className }: IconProps) => (
  <Svg className={classNames(classes.Icon, [className])} />
));
