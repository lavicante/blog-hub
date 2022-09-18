import { Link, useRoutes } from "react-router-dom";
import { routersConfig } from "shared/config";
import { Suspense } from "react";
import {
  Theme,
  ThemeContext,
} from "app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import "./styles/index.scss";

const App = () => {
  const routes = useRoutes(routersConfig);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </div>
  );
};

export default App;
