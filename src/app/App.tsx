import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/routers';
import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Switcher';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app')}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
