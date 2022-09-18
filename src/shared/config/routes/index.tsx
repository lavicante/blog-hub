import { RouteObject } from "react-router-dom";
import React from "react";

const Main = React.lazy(() => import("pages/Main"));
const About = React.lazy(() => import("pages/About"));

export const routersConfig: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
