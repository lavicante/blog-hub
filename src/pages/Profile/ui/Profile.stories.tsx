import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import React from 'react';

import Profile from './Profile';

export default {
  title: 'pages/About',
  component: Profile,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const ProfilePage = Template.bind({});

ProfilePage.args = {};

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK)];
