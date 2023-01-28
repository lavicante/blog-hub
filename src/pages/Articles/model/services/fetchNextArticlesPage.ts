import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import {
  getArticlesLoading,
  getPageCanLoad,
  getPageLimit,
  getPageNumber,
} from '../selectors/getArticlesInfo';
import { articlesActions } from '../slice/ArticlesSlice';
import { fetchArticles } from './fetchArticles';

export const fetchArticlesNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/fetchArticlesNextPage', async (_, { dispatch, getState }) => {
  const limit = getPageLimit(getState());
  const isLoading = getArticlesLoading(getState());
  const canLoad = getPageCanLoad(getState());
  const page = getPageNumber(getState());

  if (!isLoading && canLoad) {
    const nextPage = page + 1;
    dispatch(articlesActions.setPage(nextPage));
    dispatch(
      fetchArticles({
        page: nextPage,
      })
    );
  }
});
