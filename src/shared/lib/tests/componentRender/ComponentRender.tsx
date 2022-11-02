import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import i18nTest from 'app/i18n/i18nTest';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function ComponentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {}
) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
