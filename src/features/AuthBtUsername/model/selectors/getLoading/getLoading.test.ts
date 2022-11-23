import { StateSchema } from 'app/providers/StoreProvider';

import { getLoading } from './getLoading';

describe('test getLoading', () => {
  test('getLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };

    expect(getLoading(state as StateSchema)).toBe(true);
  });

  test('getLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
      },
    };

    expect(getLoading(state as StateSchema)).toBe(false);
  });
});
