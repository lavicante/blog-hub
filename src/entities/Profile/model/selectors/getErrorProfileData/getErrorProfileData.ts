import { StateSchema } from 'app/providers/StoreProvider';

export const getErrorProfileData = (state: StateSchema) =>
  state?.profile?.error || '';
