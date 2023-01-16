import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { To } from '@remix-run/router';
import { userReducer } from 'entities/User';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { $api } from 'shared/lib/api/api';

import { createReducerManager } from './reducerManager';
import { StateSchema, StoreType } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store: StoreType = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
