import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticlesRecomendation } from 'pages/ArticleDetails/model/services/fetchArticlesRecomendation';

import { ArticleDetailsPageRecomendation } from '../types/ArticleDetailsPageRecomendation';

const articlesRecomendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticlesRecomendation =
  articlesRecomendationAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articelsDetailPageRecomendation ||
      articlesRecomendationAdapter.getInitialState()
  );

const articleDetailsPageRecomendationSlice = createSlice({
  name: 'articleDetailsPageRecomendation',
  initialState:
    articlesRecomendationAdapter.getInitialState<ArticleDetailsPageRecomendation>(
      {
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesRecomendation.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      articlesRecomendationAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticlesRecomendation.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticlesRecomendation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: articleDetailsPageRecomendationReducer } =
  articleDetailsPageRecomendationSlice;
export const { actions: articleDetailsPageRecomendationActions } =
  articleDetailsPageRecomendationSlice;
