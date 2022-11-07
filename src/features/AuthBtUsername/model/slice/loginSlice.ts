import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(loginByUserName.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginByUserName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
