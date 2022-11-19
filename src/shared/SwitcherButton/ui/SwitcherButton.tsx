import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';

interface SwitcherButtonProps {
  className?: string;
}

export const SwitcherButton = memo(({ className }: SwitcherButtonProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggle}
      className={classNames('', [className])}
      variant={VariantButton.CLEAR}
    >
      {t('Русский')}
    </Button>
  );
});
