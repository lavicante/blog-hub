import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'app/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { profileReducer } from 'entities/Profile';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';

import Profile from './Profile';

export default {
  title: 'pages/Profile',
  component: Profile,
  decorators: [
    StoreDecorator({
      login: { username: '123', password: 'asd', error: 'ERROR' },
      profile: { data: { username: 'Kemal' } },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const Primary = () => {
  const reducers: ReducersList = {
    profile: profileReducer,
  };
  useDynamicReducer(reducers);

  return <Profile />;
};
