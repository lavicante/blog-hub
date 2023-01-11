import {
  EditableProfileCard,
  fetchProfile,
  profileReducer,
} from 'features/EditableProfileCard';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';

interface ProfileProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const Profile = memo(({ className }: ProfileProps) => {
  const { id: userId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useDynamicReducer(reducers);

  useInitialProject(() => {
    dispatch(fetchProfile(userId));
  });

  return (
    <div className={classNames('', [className])}>
      <EditableProfileCard />
    </div>
  );
});

export default Profile;
