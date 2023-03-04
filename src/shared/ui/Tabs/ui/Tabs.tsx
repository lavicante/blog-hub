import React, { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card, CardTheme } from 'shared/ui/Card/ui/Card';

import classes from './Tabs.module.scss';

export interface ITab {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  tabs: ITab[];
  value: string;
  onClickTab: (value: ITab) => void;
  className?: string;
}

export const Tabs = ({ onClickTab, tabs, value, className }: TabsProps) => {
  const onClickHender = useCallback(
    (tab: ITab) => () => {
      onClickTab(tab);
    },
    [onClickTab]
  );
  return (
    <div className={classNames(classes.Tabs, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={value === tab.value ? CardTheme.NORMAl : CardTheme.OUTLINE}
          key={tab.value}
          onClick={onClickHender(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
