import { getUserAuthData } from 'entities/User';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { AppPath } from '../config/routerConfig';

export function RequireAuth({ children }: { children: ReactNode }) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={AppPath.main} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
