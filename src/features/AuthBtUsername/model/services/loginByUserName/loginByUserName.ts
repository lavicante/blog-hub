import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  ThunkConfig<string>
>(
  'login/loginByUserName',
  async (loginData, { rejectWithValue, dispatch, extra }) => {
    const { api, navigate } = extra;
    try {
      const response = await api.post<User>('/login', loginData);

      if (!response.data) {
        throw new Error();
      }
      dispatch(userActions.setAuthData(response.data));
      navigate('/about');
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
