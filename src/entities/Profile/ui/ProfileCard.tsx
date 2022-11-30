import { Profile } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/Avatar/ui/Avatar';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
}

const AVATAR_PLACEHOLDER =
  'https://repository-images.githubusercontent.com/130118224/a2c75780-e0a9-11eb-8494-3581a0b1c93b';

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
        {data?.avatar ? (
          <div className={classes.profile_avatar}>
            <Avatar
              src={data?.avatar}
              alt={data?.username || 'USER'}
              size={150}
            />
          </div>
        ) : (
          <div className={classes.profile_avatar}>
            <Avatar src={AVATAR_PLACEHOLDER} alt='USER' size={150} />
          </div>
        )}

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
