import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { Profile, ValidationErrors } from '../../types/profile';
import { validationFormData } from '../validationFormData/validationFormData';

export const updateProfile = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidationErrors[]>
>(
  'profile/updateProfile',
  async (_, { rejectWithValue, dispatch, extra, getState }) => {
    const { api } = extra;
    try {
      const formData = getProfileData(getState());

      const errors = validationFormData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidationErrors.SERVER_ERROR]);
    }
  }
);
