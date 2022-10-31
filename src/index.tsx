import './app/i18n/i18n';
import 'app/styles/index.scss';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
  document.getElementById('root')
);
