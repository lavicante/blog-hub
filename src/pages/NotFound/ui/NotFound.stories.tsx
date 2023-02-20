import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import React from 'react';

import { NotFound } from './NotFound';

export default {
  title: 'pages/Forbbiden',
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
