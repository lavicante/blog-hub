import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation("main");

  return <h1>{t("Главная")}</h1>;
};

export default Main;
