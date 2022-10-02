import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import "./styles/index.scss";
import { AppRouter } from "app/routers";
import { Navbar } from "widgets/Navbar";
import { Switcher } from "widgets/Switcher";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Switcher />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
