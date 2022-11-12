import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/routers';
import { userActions } from 'entities/User';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Switcher';

const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
