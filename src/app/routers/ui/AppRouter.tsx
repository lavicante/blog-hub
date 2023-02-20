import { RequireAuth } from 'app/routers/ui/RequireAuth';
import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from 'widgets/Page/ui/Page';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

import { AppRoutesProps, routersConfig } from '../config/routerConfig';

const AppRouter = () => {
  const renderWithRequireAuth = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.privateRoute ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return (
    <Routes>{Object.values(routersConfig).map(renderWithRequireAuth)}</Routes>
  );
};

export default AppRouter;
