import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articles/fetchArticles', async (_, { rejectWithValue, extra }) => {
  const { api } = extra;

  try {
    const response = await api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
