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
import { LIMIT } from 'pages/Articles/model/constants/pagination';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
    view: ArticlesViewVariant.CARD,
    page: 1,
    canLoad: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesViewVariant>) => {
      state.limit = LIMIT[action.payload];
      state.view = action.payload;
      localStorage.setItem('view', action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initView: (state) => {
      const view = localStorage.getItem('view') as ArticlesViewVariant;
      state.view = view;
      state.limit = LIMIT[view];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.error = undefined;
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.canLoad = action.payload.length === LIMIT[state.view];
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
