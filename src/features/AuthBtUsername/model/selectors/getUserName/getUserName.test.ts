import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getUserName } from './getUserName';

test('getUsername', () => {
  const state: DeepPartial<StateSchema> = {
    login: {
      username: 'admin',
    },
  };

  expect(getUserName(state as StateSchema)).toBe('admin');
});
