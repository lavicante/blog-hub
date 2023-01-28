import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticlesViewVariant } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { fetchCommentByArticleId } from 'pages/ArticleDetails/model/services/fetchCommentByArticleId';
import { ArticlesSchema } from 'pages/Articles';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

const articlesSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
    view: ArticlesViewVariant.CARD,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesViewVariant>) => {
      state.view = action.payload;
      localStorage.setItem('view', action.payload);
    },
    initView: (state) => {
      state.view = localStorage.getItem('view') as ArticlesViewVariant;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.error = undefined;
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: articlesReducer } = articlesSlice;
export const { actions: articlesActions } = articlesSlice;
