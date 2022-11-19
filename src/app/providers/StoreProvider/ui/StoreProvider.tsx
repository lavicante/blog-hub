import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const navigate = useNavigate();
  const store = createReduxStore(initialState, navigate);
  return <Provider store={store}>{children}</Provider>;
};
