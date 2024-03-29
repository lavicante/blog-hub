import { addDecorator } from '@storybook/react';

import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/app/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/app/storybook/StyleDicorator/styleDecorator';
import { ThemeDecorator } from '../../src/app/storybook/ThemeDecorator/ThemeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
