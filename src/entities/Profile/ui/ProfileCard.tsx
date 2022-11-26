import { Profile } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
}

export const ProfileCard = memo(({ className, data }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  return (
    <div className={classNames(classes.ProfileCard, [className])}>
      <Text
        className={classes.text}
        variant={TextVarianEnum.PRIMARY}
        tag='h1'
        align='center'
      >
        {t('Профиль')}
      </Text>

      <div className={classes.profile_data}>
        <div className={classes.profile_avatar}>
          <img src={data?.avatar} alt={data?.username} />
        </div>
        <ul className={classes.profile_list}>
          <li>Имя: {data?.firstname}</li>
          <li>Фамилия: {data?.lastname}</li>
          <li>Username: {data?.username}</li>
          <li>Возраст: {data?.age}</li>
          <li>Страна: {data?.country}</li>
          <li>Город: {data?.city}</li>
          <li>Валюта: {data?.currency}</li>
        </ul>
      </div>
    </div>
  );
});
