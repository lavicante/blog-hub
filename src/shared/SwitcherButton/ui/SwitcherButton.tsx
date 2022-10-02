import { classNames } from "shared/lib/classNames";
import classes from "./SwitcherButton.module.scss";
import { Button, VariantButton } from "shared/Button/Button";
import { useTranslation } from "react-i18next";

interface SwitcherButtonProps {
  className?: string;
}

export const SwitcherButton = ({ className }: SwitcherButtonProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggle}
      className={classNames(classes.SwitcherButton, [className])}
      variant={VariantButton.CLEAR}
    >
      {t("Русский")}
    </Button>
  );
};
