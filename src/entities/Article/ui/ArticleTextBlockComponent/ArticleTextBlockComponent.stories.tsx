import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleTextComponent } from './ArticleTexteBlockComponent';

export default {
  title: 'entities/ArticleTextComponent',
  component: ArticleTextComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTextComponent>;

const Template: ComponentStory<typeof ArticleTextComponent> = (args) => (
  <ArticleTextComponent {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Заголовок',
  paragraphs: [
    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.\n' +
      '\n' +
      'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы.',
  ],
};
