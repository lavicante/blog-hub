import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User } from 'entities/User';

import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });
  test('', async () => {
    const user: User = {
      username: 'admin',
      id: 1,
    };

    const action = loginByUserName({ username: 'admin', password: '123' });

    const result = await action(dispatch, getState, undefined);

    console.log(result);
    mockedAxios.post.mockResolvedValue({ data: user });
  });
});
