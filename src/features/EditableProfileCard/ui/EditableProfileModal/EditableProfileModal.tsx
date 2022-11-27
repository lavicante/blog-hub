import { profileActions } from 'features/EditableProfileCard';
import { Dispatch, memo, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, VariantButton } from 'shared/Button/Button';
import { Input } from 'shared/Input/ui/Input';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfile } from '../../model/services/updateProfile/updateProfile';
import classes from './EditableProfileModal.module.scss';

interface EditableProfileModalProps {
  className?: string;
  onClose?: Dispatch<SetStateAction<boolean>>;
}

const EditableProfileModal = memo(
  ({ className, onClose }: EditableProfileModalProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const dispatch = useAppDispatch();

    const changeUsername = (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    };

    const changeFirstName = (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value }));
    };

    const changeLastName = (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    };

    const changeAge = (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    };

    const onSave = async () => {
      const {
        meta: { requestStatus },
      } = await dispatch(updateProfile());

      if (requestStatus === 'fulfilled') {
        onClose?.(true);
      }
    };

    const handleClose = () => {
      onClose?.(true);
    };

    return (
      <div className={classNames(classes.EditableProfileModal, [className])}>
        <Text
          className={classes.EditableProfileModal_text}
          tag='h2'
          variant={TextVarianEnum.PRIMARY}
        >
          {t('Редактировать профиль')}
        </Text>
        <label
          htmlFor='firstname'
          className={classes.EditableProfileModal_label}
        >
          <Text tag='span' variant={TextVarianEnum.PRIMARY}>
            {t('Ваше имя')}
          </Text>
          <Input
            onCange={changeFirstName}
            id='firstname'
            value={profileData?.firstname || ''}
          />
        </label>
        <label
          htmlFor='lastname'
          className={classes.EditableProfileModal_label}
        >
          <Text tag='span' variant={TextVarianEnum.PRIMARY}>
            {t('Ваша фамилия')}
          </Text>
          <Input
            onCange={changeLastName}
            id='lastname'
            value={profileData?.lastname || ''}
          />
        </label>
        <label
          htmlFor='username'
          className={classes.EditableProfileModal_label}
        >
          <Text tag='span' variant={TextVarianEnum.PRIMARY}>
            {t('Ваш username')}
          </Text>
          <Input
            onCange={changeUsername}
            id='username'
            value={profileData?.username || ''}
          />
        </label>
        <label htmlFor='age' className={classes.EditableProfileModal_label}>
          <Text tag='span' variant={TextVarianEnum.PRIMARY}>
            {t('Ваш возраст')}
          </Text>
          <Input
            onCange={changeAge}
            id='age'
            value={profileData?.age || ''}
            type='number'
          />
        </label>

        <div className={classes.EditableProfileModal_btn_container}>
          <Button onClick={onSave}>{t('Сохранить')}</Button>
          <Button
            onClick={handleClose}
            variant={VariantButton.OUTLINE_RED_INVERTED}
          >
            {t('Отменить')}
          </Button>
        </div>
      </div>
    );
  }
);

export default EditableProfileModal;
