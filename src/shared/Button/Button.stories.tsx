import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import React from 'react';

import { Button, SizeButton, VariantButton } from './Button';

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

export const OutlineM = Template.bind({});
OutlineM.args = {
  children: 'TEST',
  variant: VariantButton.OUTLINE,
  size: SizeButton.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'TEST',
  variant: VariantButton.OUTLINE,
  size: SizeButton.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: 'TEST',
  variant: VariantButton.OUTLINE,
  size: SizeButton.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'TEST',
  variant: VariantButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'TEST',
  variant: VariantButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'TEST',
  variant: VariantButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  variant: VariantButton.BACKGROUND_INVERTED,
};

export const SizeM = Template.bind({});
SizeM.args = {
  children: '>',
  square: true,
  size: SizeButton.M,
  variant: VariantButton.BACKGROUND_INVERTED,
};

export const SizeL = Template.bind({});
SizeL.args = {
  children: '>',
  square: true,
  size: SizeButton.L,
  variant: VariantButton.BACKGROUND_INVERTED,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  children: '>',
  square: true,
  size: SizeButton.XL,
  variant: VariantButton.BACKGROUND_INVERTED,
};
