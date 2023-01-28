import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  alt: 'My avatar',
  src: 'https://coolsen.ru/wp-content/uploads/2022/02/45-20220203_150834.jpg',
  size: 200,
};
