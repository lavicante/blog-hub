import { StateSchema } from 'app/providers/StoreProvider';

export const getSerchData = (state: StateSchema) => state.articles?.serach;
