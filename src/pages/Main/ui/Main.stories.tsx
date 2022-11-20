import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import React from 'react';

import Main from './Main';

export default {
  title: 'pages/Main',
  component: Main,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Main>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const MainPage = Template.bind({});

MainPage.args = {};

export const MainDark = Template.bind({});
MainDark.args = {};
MainDark.decorators = [ThemeDecorator(Theme.DARK)];
