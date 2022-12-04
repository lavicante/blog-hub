import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import React from 'react';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const ProfileCardPrimary = Template.bind({});

ProfileCardPrimary.args = {
  data: {
    lastname: 'Demirel',
    firstname: 'Kemal',
    username: 'demirel',
    age: 24,
    country: Country.RUS,
    city: 'Moscow',
    currency: Currency.RUB,
  },
};

export const ProfileCardDark = Template.bind({});
ProfileCardDark.args = {
  data: {
    lastname: 'Demirel',
    firstname: 'Kemal',
    username: 'demirel',
    age: 24,
    country: Country.RUS,
    city: 'Moscow',
    currency: Currency.RUB,
  },
};
ProfileCardDark.decorators = [ThemeDecorator(Theme.DARK)];
