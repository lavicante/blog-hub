import { Profile } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AVATAR_PLACEHOLDER } from 'shared/constants/common';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';

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
          <Avatar
            src={data?.avatar || AVATAR_PLACEHOLDER}
            alt={data?.username || 'USER'}
            size={150}
          />
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
