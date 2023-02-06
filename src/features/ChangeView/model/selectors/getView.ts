import { StateSchema } from 'app/providers/StoreProvider';

export const getView = (state: StateSchema) => state.articles?.view;
