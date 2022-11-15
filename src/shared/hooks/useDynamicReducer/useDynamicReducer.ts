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
    Object.entries(reducers).forEach(
      ([reducerName, reducer]: ReducersListEntry) => {
        store.reducerManager.add(reducerName, reducer);
        dispatch({ type: `@INIT ${reducerName}` });
      }
    );

    return () => {
      Object.entries(reducers).forEach(([reducerName]: ReducersListEntry) => {
        store.reducerManager.remove(reducerName);
        dispatch({ type: `@DESTROY ${reducerName}` });
      });
    };

    // eslint-disable-next-line
  }, []);
};
