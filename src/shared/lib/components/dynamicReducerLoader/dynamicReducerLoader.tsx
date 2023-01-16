import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReducersList } from 'shared/hooks/useDynamicReducer/useDynamicReducer';

interface DynamicReducerLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
}

export const DynamicReducerLoader = ({
  reducers,
  children,
}: DynamicReducerLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      store.reducerManager.add(reducerName as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${reducerName}` });
    });

    return () => {
      Object.entries(reducers).forEach(([reducerName]) => {
        store.reducerManager.remove(reducerName as StateSchemaKey);
        dispatch({ type: `@DESTROY ${reducerName}` });
      });
    };

    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
