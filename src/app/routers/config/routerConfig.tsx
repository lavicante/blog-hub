import { UserRole } from 'entities/User';
import React from 'react';
import { RouteObject } from 'react-router-dom';

const Main = React.lazy(() => import('pages/Main'));
const About = React.lazy(() => import('pages/About'));
const Profile = React.lazy(() => import('pages/Profile'));
const Articles = React.lazy(() => import('pages/Articles'));
const ArticlesDetails = React.lazy(() => import('pages/ArticleDetails'));
const AdminPanelPage = React.lazy(() => import('pages/AdminPanelPage'));
const NotFound = React.lazy(() => import('pages/NotFound'));
const Forbbiden = React.lazy(() => import('pages/Forbbiden'));

export type AppRoutesProps = RouteObject & {
  privateRoute?: boolean;
  roles?: UserRole[];
};

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articlesDetails',

  ADMIN_PANEL = 'adminPanel',
  NOT_FOUND = 'notFound',
  FORBIDDEN = 'forbidden',
}

export const AppPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/',
  [AppRoutes.ADMIN_PANEL]: '/admin-panel',
  [AppRoutes.FORBIDDEN]: '/forbidden',
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
    path: `${AppPath.profile}:id`,
    element: <Profile />,
    privateRoute: true,
  },
  [AppRoutes.ARTICLES]: {
    path: AppPath.articles,
    element: <Articles />,
    privateRoute: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${AppPath.articlesDetails}:id`,
    element: <ArticlesDetails />,
    privateRoute: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: AppPath.adminPanel,
    element: <AdminPanelPage />,
    privateRoute: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: AppPath.forbidden,
    element: <Forbbiden />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPath.notFound,
    element: <NotFound />,
  },
};
