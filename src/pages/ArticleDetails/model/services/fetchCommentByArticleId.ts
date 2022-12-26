import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'comments/fetchCommentByArticleId',
  async (articleId, { rejectWithValue, extra }) => {
    const { api } = extra;

    if (!articleId) {
      return rejectWithValue('Article not found');
    }

    try {
      const response = await api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
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
  }
);
