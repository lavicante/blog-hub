import { render } from '@testing-library/react';
import i18nTest from 'app/i18n/i18nTest';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

interface ComponentRenderOptions {
  route?: string;
}

export function ComponentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {}
) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
