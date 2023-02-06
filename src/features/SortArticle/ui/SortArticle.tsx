import { SortArticlesDirection, SortArticlesField } from 'features/SortArticle';
import {
  getSortsDirection,
  getSortsField,
} from 'features/SortArticle/model/selectors/getSortsAndOrder';
import { articlesActions } from 'pages/Articles';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { Select } from 'shared/ui/Select/ui/Select';

import {
  SortArticlesByFields,
  SortArticlesDirections,
} from '../model/constants/sortArticles';
import classes from './SortArticle.module.scss';

export const SortArticle = memo(() => {
  const dispatch = useAppDispatch();
  const direction = useSelector(getSortsDirection);
  const sort = useSelector(getSortsField);

  const onChangeSortField = useCallback(
    (value: SortArticlesField) => {
      dispatch(articlesActions.setSort(value));
    },
    [dispatch]
  );

  const onChangeSortDirection = useCallback(
    (value: SortArticlesDirection) => {
      dispatch(articlesActions.setDirection(value));
    },
    [dispatch]
  );

  return (
    <div className={classes.SortArticle}>
      <Select
        label='Сортировать по'
        options={SortArticlesByFields}
        value={sort}
        onChange={onChangeSortField}
      />

      <Select
        label='по'
        options={SortArticlesDirections}
        value={direction}
        onChange={onChangeSortDirection}
      />
    </div>
  );
});
