import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("about");

  return <h1>{t("О нас")}</h1>;
};

export default About;
