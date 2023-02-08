import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticle } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserData } from 'entities/User';
import { addCommentFormActions } from 'features/addCommentForm';
import { articleDetailsCommentsActions } from 'pages/ArticleDetails';

export const addCommentFormService = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentFormService',
  async (textComment, { rejectWithValue, extra, getState, dispatch }) => {
    const { api } = extra;

    const user = getUserData(getState());
    const article = getArticle(getState());

    if (!textComment || !user?.id || !article?.id) {
      return rejectWithValue('empty values');
    }

    try {
      dispatch(addCommentFormActions.addLoadingStatus(true));
      const response = await api.post<Comment>('/comments', {
        text: textComment,
        articleId: article?.id,
        userId: user?.id,
      });

      const newComment: Comment = {
        ...response.data,
        user,
      };

      if (!response.data) {
        throw new Error();
      }
      dispatch(addCommentFormActions.addLoadingStatus(false));
      dispatch(articleDetailsCommentsActions.addComment(newComment));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
