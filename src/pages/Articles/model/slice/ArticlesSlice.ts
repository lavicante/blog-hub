import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticlesViewVariant } from 'entities/Article';
import { SortArticlesDirection, SortArticlesField } from 'features/SortArticle';
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
    _isMounted: false,
    direction: SortArticlesDirection.ASC,
    sortField: SortArticlesField.TITLE,
    serach: '',
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
    setSort: (state, action: PayloadAction<SortArticlesField>) => {
      state.sortField = action.payload;
    },
    setDirection: (state, action: PayloadAction<SortArticlesDirection>) => {
      state.direction = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.serach = action.payload;
    },
    initView: (state) => {
      const view = localStorage.getItem('view') as ArticlesViewVariant;
      state.view = view;
      state.limit = LIMIT[view];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      state.canLoad = action.payload.length === LIMIT[state.view];
      state._isMounted = true;
      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    });
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: articlesReducer } = articlesSlice;
export const { actions: articlesActions } = articlesSlice;
