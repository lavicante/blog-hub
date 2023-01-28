import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});
LoaderLight.args = {};

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
