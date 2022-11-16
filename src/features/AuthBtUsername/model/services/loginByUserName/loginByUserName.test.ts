import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  test('success', async () => {
    const user: User = {
      username: 'admin',
      id: 1,
    };
    mockedAxios.post.mockResolvedValue({ data: user });

    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('reject', async () => {
    mockedAxios.post.mockResolvedValue({ status: 403 });

    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неправильный логин или пароль');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
