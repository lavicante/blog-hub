import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesRecomendation = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articlesDetailPage/fetchArticlesRecomendation',
  async (_, { rejectWithValue, extra }) => {
    const { api } = extra;

    try {
      const response = await api.get<Article[]>('/articles', {
        params: {
          _limit: 8,
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
