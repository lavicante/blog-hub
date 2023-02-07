import { ArticleType } from 'entities/Article';
import { articlesActions, fetchArticles } from 'pages/Articles';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { ITab, Tabs } from 'shared/ui/Tabs/ui/Tabs';

import { getTypeArticle } from '../model/selectors/getTypeArticle';
import classes from './ArticlesTabs.module.scss';

const tabs: ITab[] = [
  {
    value: ArticleType.ALL,
    content: 'Все',
  },
  {
    value: ArticleType.IT,
    content: 'Айти',
  },
  {
    value: ArticleType.ECONOMICS,
    content: 'Экономика',
  },
  {
    value: ArticleType.SCIENCE,
    content: 'Наука',
  },
];
export const ArticlesTabs = () => {
  const type = useSelector(getTypeArticle);
  const dispatch = useAppDispatch();

  const onClickTab = useCallback(
    (tab: ITab) => {
      dispatch(articlesActions.setType(tab.value as ArticleType));
      dispatch(articlesActions.setPage(1));
      dispatch(fetchArticles({ page: 1, replace: true }));
    },
    [dispatch]
  );

  return (
    <Tabs
      className={classes.ArticlesTabs}
      tabs={tabs}
      value={type}
      onClickTab={onClickTab}
    />
  );
};
