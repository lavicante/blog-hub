import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Flex.module.scss';

type Justify = 'center' | 'start' | 'end' | 'between';
type Align = 'center' | 'start' | 'end';
type Direction = 'row' | 'column';
type Gap = '4' | '8' | '16' | '32';

const JustifyClasses: Record<Justify, any> = {
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween,
  start: classes.justifyStart,
};

const AlignClasses: Record<Align, string> = {
  center: classes.alignCenter,
  end: classes.alignEnd,
  start: classes.alignStart,
};

const DirectionClasses: Record<Direction, string> = {
  row: classes.directionRow,
  column: classes.directionColumn,
};

const GapClasses: Record<Gap, string> = {
  '4': classes.gap4,
  '8': classes.gap8,
  '16': classes.gap16,
  '32': classes.gap32,
};
export interface FlexProps {
  children: ReactNode;
  className?: string;
  justify?: Justify;
  align?: Align;
  direction?: Direction;
  gap?: Gap;
}
export const Flex = ({
  children,
  className,
  gap = '4',
  direction = 'row',
  justify = 'start',
  align = 'center',
}: FlexProps) => {
  const flexClasses = [
    className,
    JustifyClasses[justify],
    AlignClasses[align],
    DirectionClasses[direction],
    GapClasses[gap],
  ];

  return (
    <div className={classNames(classes.Flex, flexClasses)}>{children}</div>
  );
};
