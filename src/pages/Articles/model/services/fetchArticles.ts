import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/addQueryParams/addQueryParams';

import {
  getPageLimit,
  getSearch,
  getSortDirection,
  getSortField,
  getTypeArticle,
} from '../selectors/getArticlesInfo';

interface Args {
  page: number;
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  Args,
  ThunkConfig<string>
>(
  'articles/fetchArticles',
  async (args, { rejectWithValue, extra, getState }) => {
    const { api } = extra;
    const { page = 1 } = args;
    const limit = getPageLimit(getState());
    const sortField = getSortField(getState());
    const sortDirection = getSortDirection(getState());
    const search = getSearch(getState());
    const type = getTypeArticle(getState());

    try {
      addQueryParams({
        sort: sortField,
        order: sortDirection,
        search,
        type,
      });
      const response = await api.get<Article[]>('/articles', {
        params: {
          q: search,
          _sort: sortField,
          _order: sortDirection,
          _expand: 'user',
          _limit: limit,
          _page: page,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
