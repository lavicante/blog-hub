import { StateSchema } from 'app/providers/StoreProvider';

export const getLoadingSendComment = (state: StateSchema) =>
  state.addCommentForm?.loading;
