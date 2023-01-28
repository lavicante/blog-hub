import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesViewVariant } from 'entities/Article';

const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading;
const getArticlesError = (state: StateSchema) => state.articles?.error;
const getView = (state: StateSchema) =>
  state.articles?.view || ArticlesViewVariant.CARD;

export { getArticlesError, getArticlesLoading, getView };
