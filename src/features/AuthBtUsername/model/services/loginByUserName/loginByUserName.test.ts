import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { loginByUserName } from './loginByUserName';

describe('loginByUsername', () => {
  test('success', async () => {
    const user: User = {
      username: 'admin',
      id: 1,
    };
    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: user }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });
    expect(thunk.api.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('reject', async () => {
    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });
    expect(thunk.api.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
