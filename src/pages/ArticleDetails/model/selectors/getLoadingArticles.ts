import { StateSchema } from 'app/providers/StoreProvider';

export const getLoadingArticles = (state: StateSchema) =>
  state.articleDetails?.isLoading;
