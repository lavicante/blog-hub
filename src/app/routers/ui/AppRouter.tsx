import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routersConfig } from '../config/routerConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
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
