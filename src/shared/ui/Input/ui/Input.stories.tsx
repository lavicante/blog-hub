import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Inputbase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inputbase.args = {
  value: 'Test value',
  placeholder: 'Text placeholder',
};
