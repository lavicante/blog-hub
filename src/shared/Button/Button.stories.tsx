import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button, VariantButton } from './Button';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'TEST',
};

export const Clean = Template.bind({});
Clean.args = {
  children: 'TEST',
  variant: VariantButton.CLEAR,
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CleanDark = Template.bind({});
CleanDark.args = {
  children: 'TEST',
  variant: VariantButton.CLEAR,
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'TEST',
  variant: VariantButton.OUTLINE,
};

Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'TEST',
  variant: VariantButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
