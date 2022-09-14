import classes from  './App.module.scss'
import {Link, Routes, useRoutes} from "react-router-dom";
import {routersConfig} from "./routers";
import {Suspense} from 'react'

const App = () => {
    const routes = useRoutes(routersConfig)

    console.log(routes)

    return (
        <div className={classes.AppContainer}>
            <Link to={'/'} >Главная</Link>
            <Link to={'/about'} >О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                {routes}
            </Suspense>

        </div>
    )
}

export default App