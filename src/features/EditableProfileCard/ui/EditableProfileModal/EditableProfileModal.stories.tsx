import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'app/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import React from 'react';

import EditableProfileModal from './EditableProfileModal';

export default {
  title: 'features/EditableProfileModal',
  component: EditableProfileModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileModal>;

const Template: ComponentStory<typeof EditableProfileModal> = (args) => (
  <EditableProfileModal {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      data: {
        city: 'Moscow',
        age: 25,
        country: Country.RUS,
        avatar: undefined,
        currency: Currency.RUB,
        username: 'demirel',
        firstname: 'Kemal',
        lastname: 'Demirel',
      },
    },
  }),
];
