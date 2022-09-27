import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import "./styles/index.scss";
import { AppRouter } from "app/routers";
import { Navbar } from "widgets/Navbar";
import { Switcher } from "widgets/Switcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Navbar />
      <div className="content-page">
        <Switcher />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
