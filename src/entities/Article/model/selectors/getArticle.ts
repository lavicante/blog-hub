import { StateSchema } from 'app/providers/StoreProvider';

export const getArticle = (state: StateSchema) => state.articleDetails?.data;

export const getIsLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading;
export const getError = (state: StateSchema) => state.articleDetails?.error;
