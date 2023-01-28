import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getPageLimit } from 'pages/Articles/model/selectors/getArticlesInfo';

interface Args {
  page: number;
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

    try {
      const response = await api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
