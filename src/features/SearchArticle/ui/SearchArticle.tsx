import { articlesActions, fetchArticles } from 'pages/Articles';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Input } from 'shared/ui/Input/ui/Input';

import { getSerchData } from '../model/selectors/getSerchData';
import classes from './SearchArticle.module.scss';

export const SearchArticle = () => {
  const dispatch = useAppDispatch();
  const searchData = useSelector(getSerchData);
  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ page: 1, replace: true }));
  }, [dispatch]);
  const deboucedFetch = useDebounce(fetchData, 500);

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesActions.setSearch(value));
      dispatch(articlesActions.setPage(1));
      deboucedFetch();
    },
    [deboucedFetch, dispatch]
  );

  return (
    <div className={classes.SearchArticle}>
      <Input
        className={classes.input}
        value={searchData}
        onCange={onChangeSearch}
        placeholder='Поиск статьи'
      />
    </div>
  );
};
