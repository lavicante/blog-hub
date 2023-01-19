import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextVarianEnum } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  children: 'Пример текста. Вот такой замечательный текст!',
  variant: TextVarianEnum.PRIMARY,
  tag: 'h1',
};

export const ERROR = Template.bind({});
ERROR.args = {
  children: 'Пример текста. Вот такой текс с ошибкой!',
  variant: TextVarianEnum.ERROR,
  tag: 'h1',
};

export const SUCCESS = Template.bind({});
SUCCESS.args = {
  children: 'Пример текста. Вот такой текст с успехом!',
  variant: TextVarianEnum.SUCCESS,
  tag: 'h1',
};
