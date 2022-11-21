import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { getErrorProfileData } from '../model/selectors/getErrorProfileData/getErrorProfileData';
import { getLoadingProfileData } from '../model/selectors/getLoadingProfileData/getLoadingProfileData';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();

  const data = useSelector(getProfileData);
  const loading = useSelector(getLoadingProfileData);
  const error = useSelector(getErrorProfileData);

  if (loading) {
    return (
      <Text tag='span' variant={TextVarianEnum.SUCCESS}>
        Загрузка профиля...
      </Text>
    );
  }

  return (
    <div className={classNames(classes.ProfileCard, [className])}>
      <div className={classes.header}>
        <Text tag='h1' variant={TextVarianEnum.PRIMARY}>
          {t('Профиль')}
        </Text>
        <Button variant={VariantButton.OUTLINE}>
          {t('Редактировать профиль')}
        </Button>
      </div>
      <ul>
        <li>{data?.firstname}</li>
        <li>{data?.lastname}</li>
      </ul>
    </div>
  );
};
