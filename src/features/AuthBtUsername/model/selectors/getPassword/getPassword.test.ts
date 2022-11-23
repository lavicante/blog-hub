import { StateSchema } from 'app/providers/StoreProvider';

import { getPassword } from './getPassword';

test('getPassword', () => {
  const state: DeepPartial<StateSchema> = {
    login: {
      password: '123',
    },
  };

  expect(getPassword(state as StateSchema)).toBe('123');
});
