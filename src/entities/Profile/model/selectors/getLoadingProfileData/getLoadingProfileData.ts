import { StateSchema } from 'app/providers/StoreProvider';

export const getLoadingProfileData = (state: StateSchema) =>
  state?.profile?.isLoading || false;
