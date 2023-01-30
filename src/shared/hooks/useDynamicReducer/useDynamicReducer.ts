import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
};

export const useDynamicReducer = (
  reducers: ReducersList,
  removeAfterUnmount = false
) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  const mountedReducers = store.reducerManager.getReducerMap();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      if (!mountedReducers[reducerName as StateSchemaKey]) {
        store.reducerManager.add(reducerName as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${reducerName}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName]) => {
          store.reducerManager.remove(reducerName as StateSchemaKey);
          dispatch({ type: `@DESTROY ${reducerName}` });
        });
      }
    };

    // eslint-disable-next-line
  }, []);
};
