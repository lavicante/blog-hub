import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  MiddlewareArray,
  Reducer,
  ReducersMapObject,
  ThunkMiddleware,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthBtUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ScrollSaveSchema } from 'features/scrollSave';
import {
  ArticleDetailCommentSchema,
  ArticleDetailsPageRecomendation,
} from 'pages/ArticleDetails';
import { ArticlesSchema } from 'pages/Articles';
import { rtkApi } from 'shared/lib/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  savedScroll: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComment?: ArticleDetailCommentSchema;
  addCommentForm?: AddCommentFormSchema;
  articles?: ArticlesSchema;
  articelsDetailPageRecomendation?: ArticleDetailsPageRecomendation;
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
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ExtraArgs;
  state: StateSchema;
}
