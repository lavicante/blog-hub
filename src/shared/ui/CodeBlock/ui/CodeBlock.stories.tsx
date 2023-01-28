import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'app/storybook/ThemeDecorator/ThemeDecorator';
import React from 'react';

import { CodeBlock } from './CodeBlock';

export default {
  title: 'shared/CodeBlock',
  component: CodeBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => (
  <CodeBlock {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  code:
    'import i18n from "i18next"\n' +
    'import { initReactI18next } from "react-i18next"\n' +
    'import Backend from "i18next-http-backend"\n' +
    'import LanguageDetector from "i18next-browser-languagedetector"\n' +
    '\n' +
    'i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({\n' +
    '\tfallbackLng: "en",\n' +
    '\tdebug: true,\n' +
    '\tinterpolation: {\n' +
    '\t\tescapeValue: false,\n' +
    '\t}\n' +
    '})\n' +
    'export default i18n',
};

export const Dark = Template.bind({});
Dark.args = {
  code:
    'import i18n from "i18next"\n' +
    'import { initReactI18next } from "react-i18next"\n' +
    'import Backend from "i18next-http-backend"\n' +
    'import LanguageDetector from "i18next-browser-languagedetector"\n' +
    '\n' +
    'i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({\n' +
    '\tfallbackLng: "en",\n' +
    '\tdebug: true,\n' +
    '\tinterpolation: {\n' +
    '\t\tescapeValue: false,\n' +
    '\t}\n' +
    '})\n' +
    'export default i18n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
