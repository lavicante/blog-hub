import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  { rejectValue: string }
>('login/loginByUserName', async (loginData, { rejectWithValue }) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      loginData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
