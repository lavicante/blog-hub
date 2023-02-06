import { articlesActions } from 'pages/Articles';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input/ui/Input';

import { getSerchData } from '../model/selectors/getSerchData';

export const SearchArticle = () => {
  const dispatch = useAppDispatch();
  const searchData = useSelector(getSerchData);

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesActions.setSearch(value));
    },
    [dispatch]
  );

  return (
    <div>
      <Input value={searchData} onCange={onChangeSearch} />
    </div>
  );
};
