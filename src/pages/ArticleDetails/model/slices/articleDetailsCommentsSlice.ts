import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

import { fetchCommentByArticleId } from '../services/fetchCommentByArticleId';
import { ArticleDetailCommentSchema } from '../types/ArticleDetailCommentSchema';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (book) => book.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComment || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailCommentSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
  }),
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      commentsAdapter.setOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCommentByArticleId.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.error = undefined;
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchCommentByArticleId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCommentByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } =
  articleDetailsCommentsSlice;
