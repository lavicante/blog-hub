import { StateSchema } from 'app/providers/StoreProvider';

export const getLoadingComments = (state: StateSchema) =>
  state.articleDetailsComment?.isLoading;

export const getErrorComments = (state: StateSchema) =>
  state.articleDetailsComment?.error;
