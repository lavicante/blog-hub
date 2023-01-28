import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  MiddlewareArray,
  Reducer,
  ReducersMapObject,
  ThunkMiddleware,
} from '@reduxjs/toolkit';
import { To } from '@remix-run/router';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthBtUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailCommentSchema } from 'pages/ArticleDetails';
import { ArticlesSchema } from 'pages/Articles';
import { NavigateOptions } from 'react-router/dist/lib/context';

export interface StateSchema {
  user: UserSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComment?: ArticleDetailCommentSchema;
  addCommentForm?: AddCommentFormSchema;
  articles?: ArticlesSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ExtraArgs {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ExtraArgs;
  state: StateSchema;
}

export type StoreType = EnhancedStore<
  CombinedState<StateSchema>,
  AnyAction,
  MiddlewareArray<
    [ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ExtraArgs>]
  >
>;
