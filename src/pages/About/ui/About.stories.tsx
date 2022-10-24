import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import About from './About';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof About>;

// @ts-ignore
const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const AboutPage = Template.bind({});

AboutPage.args = {};

export const AboutDark = Template.bind({});
AboutDark.args = {};
AboutDark.decorators = [ThemeDecorator(Theme.DARK)];
