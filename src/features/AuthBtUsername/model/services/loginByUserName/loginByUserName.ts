import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'app/i18n/i18n';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localSotorage';

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  { rejectValue: string }
>('login/loginByUserName', async (loginData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      loginData
    );

    if (!response.data) {
      throw new Error();
    }
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue('Вы ввели неправильный логин или пароль');
  }
});
