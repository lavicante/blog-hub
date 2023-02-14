import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { scrollSaveReducer } from 'features/scrollSave';
import { $api } from 'shared/lib/api/api';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';
import { rtkApi } from 'shared/lib/api/rtkApi';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    savedScroll: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
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
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
