import { ProfileCard } from 'entities/Profile';
import React, { Suspense, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, VariantButton } from 'shared/Button/Button';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/Loader/ui/Loader';
import { Modal } from 'shared/Modal/ui/Modal';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { getErrorProfileData } from '../../model/selectors/getErrorProfileData/getErrorProfileData';
import { getLoadingProfileData } from '../../model/selectors/getLoadingProfileData/getLoadingProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import classes from './EditableProfileCard.module.scss';

const EditableProfileModal = React.lazy(
  () => import('../EditableProfileModal/EditableProfileModal')
);
interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = ({
  className,
}: EditableProfileCardProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getLoadingProfileData);
  const error = useSelector(getErrorProfileData);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  if (isLoading) {
    return (
      <div className={classNames(classes.EditableProfileCard, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(classes.EditableProfileCard, [className])}>
        <Text tag='span' variant={TextVarianEnum.ERROR}>
          {t('Произошла ошибка!')}
        </Text>
      </div>
    );
  }

  return (
    <div className={classNames(classes.EditableProfileCard, [className])}>
      <div className={classes.ProfileCardHeader}>
        <Button
          className={classes.btn}
          onClick={handleOpen}
          variant={VariantButton.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <ProfileCard data={data} />
      <Modal isOpen={open} onClose={handleClose}>
        <Suspense fallback={<Loader />}>
          <EditableProfileModal />
        </Suspense>
      </Modal>
    </div>
  );
};
