import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'shared/lib/hooks/useAuth/useAuth';

import { AppRoutes } from '../config/routerConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
  }

  return children;
}
