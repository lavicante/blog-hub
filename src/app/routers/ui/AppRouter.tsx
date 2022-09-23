import React, { Suspense } from "react";
import { routersConfig } from "../config/routerConfig";
import { Route, Routes, useRoutes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routersConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
