import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicReducer = (reducers: ReducersList) => {
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
};
