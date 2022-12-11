import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
};

export const articleDetails = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.error = undefined;
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchArticleById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: articleDetailsReducer } = articleDetails;
export const { actions: articleDetailsActions } = articleDetails;
