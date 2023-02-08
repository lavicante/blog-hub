import { StateSchema } from 'app/providers/StoreProvider';

export const getLoadingRecomendation = (state: StateSchema) =>
  state.articelsDetailPageRecomendation?.isLoading || false;
export const getErrorFetchRecomendation = (state: StateSchema) =>
  state.articelsDetailPageRecomendation?.error;
