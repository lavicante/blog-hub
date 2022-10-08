import React from 'react';
import { RouteObject } from 'react-router-dom';

const Main = React.lazy(() => import('pages/Main'));
const About = React.lazy(() => import('pages/About'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const AppPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routersConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: AppPath.main,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: AppPath.about,
    element: <About />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPath.notFound,
    element: <NotFound />,
  },
};
