import { AppRouter } from 'app/routers';
import { getInitedUser, userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Switcher';

const App = () => {
  const dispatch = useDispatch();
  const initedUser = useSelector(getInitedUser);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {initedUser && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
