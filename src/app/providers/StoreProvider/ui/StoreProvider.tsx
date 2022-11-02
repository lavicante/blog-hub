import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};