import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, VariantButton } from 'shared/ui/Button/Button';

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
