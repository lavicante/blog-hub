import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

import { routersConfig } from '../config/routerConfig';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routersConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className='content-wrapper'>{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
