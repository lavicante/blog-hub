import { classNames } from 'shared/lib/classNames';

import { Profile } from '../../model/types/profile';
import classes from './EditableProfileModal.module.scss';

interface EditableProfileModalProps {
  className?: string;
  data?: Profile;
}

const EditableProfileModal = ({
  className,
  data,
}: EditableProfileModalProps) => (
  <div className={classNames(classes.ProfileCard, [className])}>Modal</div>
);

export default EditableProfileModal;
