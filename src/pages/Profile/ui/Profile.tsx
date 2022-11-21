import { fetchProfile, ProfileCard, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';

interface ProfileProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const Profile = memo(({ className }: ProfileProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useDynamicReducer(reducers);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className={classNames('', [className])}>
      <ProfileCard />
    </div>
  );
});

export default Profile;
