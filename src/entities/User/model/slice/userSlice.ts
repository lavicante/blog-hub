import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localSotorage';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  _initedUser: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(action.payload)
      );
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
        state._initedUser = true;
      }
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
