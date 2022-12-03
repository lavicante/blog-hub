import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfile } from '../services/fetchProfile/fetchProfile';
import { updateProfile } from '../services/updateProfile/updateProfile';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  validateErrores: undefined,
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.validateErrores = undefined;
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrores = action.payload;
    });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
