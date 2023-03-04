import './app/i18n/i18n';
import 'app/styles/index.scss';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ToastifyContainer } from 'app/providers/ToastifyContainer';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container not foudn!');
}

const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <ToastifyContainer />
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
