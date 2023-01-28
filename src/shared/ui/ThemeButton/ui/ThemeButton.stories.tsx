import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeButton } from './ThemeButton';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/ThemeButton',
  component: ThemeButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeButton>;

const Template: ComponentStory<typeof ThemeButton> = (args) => (
  <ThemeButton {...args} />
);

export const ThemeButtonLight = Template.bind({});
ThemeButtonLight.args = {};
ThemeButtonLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeButtonDark = Template.bind({});
ThemeButtonDark.args = {};
ThemeButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
