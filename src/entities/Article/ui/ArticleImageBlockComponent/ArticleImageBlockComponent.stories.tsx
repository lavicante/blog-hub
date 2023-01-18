import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'app/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import {
  ArticleBlockType,
  ArticleType,
} from 'entities/Article/model/types/article';
import React from 'react';

import { ArticleImageComponent } from './ArticleImageBlockComponent';

export default {
  title: 'entities/ArticleImageBlockComponent',
  component: ArticleImageComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageComponent>;

const Template: ComponentStory<typeof ArticleImageComponent> = (args) => (
  <ArticleImageComponent {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://i.pinimg.com/originals/84/04/59/84045993ebe13f8bf288fca26c2fb358.jpg',
  title: 'JavaScript',
};
