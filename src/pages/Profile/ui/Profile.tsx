import {
  EditableProfileCard,
  fetchProfile,
  profileReducer,
} from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';
import { Page } from 'widgets/Page/ui/Page';

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
    <Page className={classNames('', [className])}>
      <EditableProfileCard />
    </Page>
  );
});

export default Profile;
