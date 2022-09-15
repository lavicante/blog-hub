import { Link, useRoutes } from "react-router-dom";
import { routersConfig } from "./routers";
import { Suspense, useContext } from "react";
import "./styles/index.scss";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const routes = useRoutes(routersConfig);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </div>
  );
};

export default App;
