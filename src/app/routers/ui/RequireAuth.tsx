import { getRoleSelector, getUserAuthData, UserRole } from 'entities/User';
import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { AppPath } from '../config/routerConfig';

interface RequireAuthProps {
  children: ReactNode;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getRoleSelector);
  const hasRequiredRole = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => {
      return userRoles.includes(role);
    });
  }, [roles, userRoles]);

  if (!hasRequiredRole) {
    return (
      <Navigate to={AppPath.forbidden} state={{ from: location }} replace />
    );
  }

  if (!auth) {
    return <Navigate to={AppPath.main} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
