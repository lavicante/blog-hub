import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'app/storybook/StoreDecorator/StoreDecorator';
import React from 'react';

import { AddCommentForm } from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    addCommentForm: {
      text: 'Ой как напишу сейчас коммент!',
    },
  }),
];
