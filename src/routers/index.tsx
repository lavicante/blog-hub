import {RouteObject} from "react-router-dom";
import React from "react";

const Main = React.lazy(() => import('../components/Main'))
const About = React.lazy(() => import('../components/About'))

export const routersConfig: RouteObject[] = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/about',
        element: <About />,
    },
]