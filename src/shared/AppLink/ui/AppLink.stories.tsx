import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { AppLInk, AppLinkTheme } from './AppLInk';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/AppLInk',
  component: AppLInk,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLInk>;

const Template: ComponentStory<typeof AppLInk> = (args) => (
  <AppLInk {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'TEST',
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'TEST',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'TEST',
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'TEST',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
