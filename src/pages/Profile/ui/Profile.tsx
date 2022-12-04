import {
  EditableProfileCard,
  fetchProfile,
  profileReducer,
} from 'features/EditableProfileCard';
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
    if (__PROJECT__ === 'frontend') {
      dispatch(fetchProfile());
    }
  }, [dispatch]);

  return (
    <div className={classNames('', [className])}>
      <EditableProfileCard />
    </div>
  );
});

export default Profile;
