import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetails';
import { addCommentFormReducer } from 'features/addCommentForm';
import { loginReducer } from 'features/AuthBtUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetails/model/slices/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/hooks/useDynamicReducer/useDynamicReducer';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComment: articleDetailsCommentsReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
