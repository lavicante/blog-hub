import './app/i18n/i18n';
import 'app/styles/index.scss';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ToastifyContainer } from 'app/providers/ToastifyContainer';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <ToastifyContainer />
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);
