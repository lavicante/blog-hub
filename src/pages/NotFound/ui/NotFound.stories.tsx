import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotFound } from './NotFound';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'pages/About',
  component: NotFound,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => (
  <NotFound {...args} />
);

export const NotFoundPage = Template.bind({});

NotFoundPage.args = {};

export const NotFoundDark = Template.bind({});
NotFoundDark.args = {};
NotFoundDark.decorators = [ThemeDecorator(Theme.DARK)];
