import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleCodeComponent } from './ArticleCodeBlockComponent';

export default {
  title: 'entities/ArticleCodeComponent',
  component: ArticleCodeComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeComponent>;

const Template: ComponentStory<typeof ArticleCodeComponent> = (args) => (
  <ArticleCodeComponent {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
};
