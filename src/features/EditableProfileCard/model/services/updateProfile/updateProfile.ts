import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { Profile } from '../../types/profile';

export const updateProfile = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfile',
  async (_, { rejectWithValue, dispatch, extra, getState }) => {
    const { api } = extra;
    try {
      const formData = getProfileData(getState());
      const response = await api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
