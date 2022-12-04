import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'app/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from 'features/EditableProfileCard';
import { useEffect } from 'react';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';

import Profile from './Profile';

export default {
  title: 'pages/Profile',
  component: Profile,
  decorators: [
    StoreDecorator({
      login: { username: '123', password: 'asd', error: 'ERROR' },
      profile: {
        data: {
          lastname: 'Demirel',
          firstname: 'Kemal',
          username: 'demirel',
          age: 24,
          country: Country.RUS,
          city: 'Moscow',
          currency: Currency.RUB,
        },
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const Primary = () => {
  const reducers: ReducersList = {
    profile: profileReducer,
  };
  useDynamicReducer(reducers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      profileActions.updateProfile({
        lastname: 'Demirel',
        firstname: 'Kemal',
        username: 'demirel',
        age: 24,
        country: Country.RUS,
        city: 'Moscow',
        currency: Currency.RUB,
      })
    );
  }, [dispatch]);

  return <Profile />;
};
