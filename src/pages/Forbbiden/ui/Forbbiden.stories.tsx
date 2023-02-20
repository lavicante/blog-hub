import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import React from 'react';

import { Forbbiden } from './Forbbiden';

export default {
  title: 'pages/Forbbiden',
  component: Forbbiden,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Forbbiden>;

const Template: ComponentStory<typeof Forbbiden> = (args) => (
  <Forbbiden {...args} />
);

export const ForbbidenPage = Template.bind({});

ForbbidenPage.args = {};
