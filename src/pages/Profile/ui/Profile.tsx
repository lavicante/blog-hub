import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';

interface ProfileProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const Profile = memo(({ className }: ProfileProps) => {
  const { t } = useTranslation('profile');

  useDynamicReducer(reducers);

  return (
    <div className={classNames('', [className])}>
      <h1>{t('Страница профиля')}</h1>
    </div>
  );
});

export default Profile;
