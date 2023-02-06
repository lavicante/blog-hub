import { StateSchema } from 'app/providers/StoreProvider';

export const getSortsField = (state: StateSchema) => state.articles?.sortField;
export const getSortsDirection = (state: StateSchema) =>
  state.articles?.direction;
