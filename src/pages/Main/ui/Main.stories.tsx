import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Main from './Main';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'pages/About',
  component: Main,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Main>;

// @ts-ignore
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const MainPage = Template.bind({});

MainPage.args = {};

export const MainDark = Template.bind({});
MainDark.args = {};
MainDark.decorators = [ThemeDecorator(Theme.DARK)];
