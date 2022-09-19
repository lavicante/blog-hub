import { RouteObject } from "react-router-dom";
import React from "react";

const Main = React.lazy(() => import("pages/Main"));
const About = React.lazy(() => import("pages/About"));

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const AppPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
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
};
