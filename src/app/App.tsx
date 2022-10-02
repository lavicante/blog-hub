import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/routers';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Switcher } from 'widgets/Switcher';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Switcher />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
