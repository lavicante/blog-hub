import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { SortArticlesDirection, SortArticlesField } from 'features/SortArticle';

import { getMounted } from '../selectors/getArticlesInfo';
import { articlesActions } from '../slice/ArticlesSlice';
import { fetchArticles } from './fetchArticles';

export const fetchInitArticles = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articles/fetchInitArticles',
  async (args, { rejectWithValue, extra, getState, dispatch }) => {
    const isMounted = getMounted(getState());
    if (!isMounted) {
      const sortField = args.get('sort') as SortArticlesField;
      const sortOrder = args.get('order') as SortArticlesDirection;
      const search = args.get('search');
      const type = args.get('type') as ArticleType;

      if (sortField) {
        dispatch(articlesActions.setSort(sortField));
      }

      if (sortOrder) {
        dispatch(articlesActions.setDirection(sortOrder));
      }

      if (search) {
        dispatch(articlesActions.setSearch(search));
      }

      if (type) {
        dispatch(articlesActions.setType(type));
      }

      dispatch(articlesActions.initView());
      dispatch(
        fetchArticles({
          page: 1,
        })
      );
    }
  }
);
