import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Comment } from 'entities/Comment';
import React from 'react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

const comments: Comment[] = [
  {
    id: '1',
    text: 'hello world 1',
    user: { id: 1, username: 'Vasya' },
  },

  {
    id: '2',
    text: 'hello world 2',
    user: { id: 2, username: 'Petya' },
  },

  {
    id: '3',
    text: 'hello world 2',
    user: { id: 3, username: 'Kemal' },
  },
];

export const Normal = Template.bind({});
Normal.args = {
  comments,
};

export const Loading = Template.bind({});
Loading.args = {
  comments,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  comments,
  isError: 'error',
};
