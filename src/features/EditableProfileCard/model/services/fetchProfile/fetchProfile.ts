import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserData } from 'entities/User';

import { Profile } from '../../types/profile';

export const fetchProfile = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
>(
  'profile/fetchProfile',
  async (userId, { rejectWithValue, dispatch, extra, getState }) => {
    const { api } = extra;
    try {
      const user = getUserData(getState());
      const response = await api.get<Profile>(`profile/${userId || user?.id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
