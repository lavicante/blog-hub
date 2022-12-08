import React from 'react';
import { RouteObject } from 'react-router-dom';

const Main = React.lazy(() => import('pages/Main'));
const About = React.lazy(() => import('pages/About'));
const Profile = React.lazy(() => import('pages/Profile'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export type AppRoutesProps = RouteObject & {
  privateRoute?: boolean;
};

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}

export const AppPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routersConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: AppPath.main,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: AppPath.about,
    element: <About />,
  },
  [AppRoutes.PROFILE]: {
    path: AppPath.profile,
    element: <Profile />,
    privateRoute: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPath.notFound,
    element: <NotFound />,
  },
};
