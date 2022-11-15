import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { LoginSchema } from '../../types/loginSchema';
import { getLoginData } from './getLoginData';

test('getLoginData', () => {
  const state: DeepPartial<StateSchema> = {
    login: {
      isLoading: true,
      password: '123',
      username: 'demirel',
      error: undefined,
    },
  };

  const expectData: LoginSchema = {
    isLoading: true,
    password: '123',
    username: 'demirel',
    error: undefined,
  };

  expect(getLoginData(state as StateSchema)).toEqual(expectData);
});
