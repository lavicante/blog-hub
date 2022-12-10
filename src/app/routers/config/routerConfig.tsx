import React from 'react';
import { RouteObject } from 'react-router-dom';

const Main = React.lazy(() => import('pages/Main'));
const About = React.lazy(() => import('pages/About'));
const Profile = React.lazy(() => import('pages/Profile'));
const Articles = React.lazy(() => import('pages/Articles'));
const ArticlesDetails = React.lazy(() => import('pages/ArticleDetails'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export type AppRoutesProps = RouteObject & {
  privateRoute?: boolean;
};

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  NOT_FOUND = 'notFound',
}

export const AppPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/',
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
  [AppRoutes.ARTICLES]: {
    path: AppPath.articles,
    element: <Articles />,
    privateRoute: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${AppPath.articles_details}:id`,
    element: <ArticlesDetails />,
    privateRoute: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPath.notFound,
    element: <NotFound />,
  },
};
