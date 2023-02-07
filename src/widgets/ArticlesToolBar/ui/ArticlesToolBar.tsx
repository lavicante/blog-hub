import { ArticlesTabs } from 'features/ArticleTabs';
import { ChangeView } from 'features/ChangeView';
import { SearchArticle } from 'features/SearchArticle';
import { SortArticle } from 'features/SortArticle';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './ArticlesToolBar.module.scss';

interface NavbarProps {
  className?: string;
}

export const ArticlesToolBar = memo(({ className }: NavbarProps) => (
  <div className={classNames(classes.ArticlesToolBar, [className])}>
    <div className={classes.top}>
      <SortArticle />
      <ChangeView />
    </div>

    <SearchArticle />
    <ArticlesTabs />
  </div>
));
