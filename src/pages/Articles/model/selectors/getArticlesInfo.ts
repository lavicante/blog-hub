import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesViewVariant, ArticleType } from 'entities/Article';

const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading;
const getArticlesError = (state: StateSchema) => state.articles?.error;
const getView = (state: StateSchema) =>
  state.articles?.view || ArticlesViewVariant.CARD;
const getPageNumber = (state: StateSchema) => state.articles?.page || 1;
const getPageLimit = (state: StateSchema) => state.articles?.limit;
const getPageCanLoad = (state: StateSchema) => state.articles?.canLoad;
const getMounted = (state: StateSchema) => state.articles?._isMounted;

const getSortField = (state: StateSchema) => state.articles?.sortField;
const getSortDirection = (state: StateSchema) => state.articles?.direction;
const getSearch = (state: StateSchema) => state.articles?.serach;

const getTypeArticle = (state: StateSchema) =>
  state.articles?.type ?? ArticleType.ALL;

export {
  getArticlesError,
  getArticlesLoading,
  getMounted,
  getPageCanLoad,
  getPageLimit,
  getPageNumber,
  getSearch,
  getSortDirection,
  getSortField,
  getTypeArticle,
  getView,
};
