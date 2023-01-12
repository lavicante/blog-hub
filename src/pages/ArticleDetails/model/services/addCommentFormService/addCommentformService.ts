import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticle } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserData } from 'entities/User';

import { fetchCommentByArticleId } from '../fetchCommentByArticleId';

export const addCommentFormService = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentFormService',
  async (textComment, { rejectWithValue, extra, getState, dispatch }) => {
    console.log(textComment, 'textCommeny');
    const { api } = extra;

    const user = getUserData(getState());
    const article = getArticle(getState());

    if (!textComment || !user?.id || !article?.id) {
      return rejectWithValue('empty values');
    }

    try {
      const response = await api.post<Comment>('/comments', {
        text: textComment,
        articleId: article?.id,
        userId: user?.id,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
