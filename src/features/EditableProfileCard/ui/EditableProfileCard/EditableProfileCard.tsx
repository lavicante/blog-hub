import { ProfileCard } from 'entities/Profile';
import { getUserData } from 'entities/User';
import React, { memo, Suspense, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

export const EditableProfileCard = memo(
  ({ className }: EditableProfileCardProps) => {
    const [open, setOpen] = useState(false);
    const [isClosedFromBodyModal, setIsClosedFromBodyModal] = useState(false);
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getLoadingProfileData);
    const error = useSelector(getErrorProfileData);
    const user = useSelector(getUserData);

    const canEdit = user?.id === id;

    const handleOpen = useCallback(() => {
      setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
      setOpen(false);
      setIsClosedFromBodyModal(false);
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
        <div className={classes.EditableProfileCard_container}>
          <div className={classes.ProfileCardHeader}>
            {canEdit && (
              <Button
                className={classes.btn}
                onClick={handleOpen}
                variant={VariantButton.OUTLINE}
              >
                {t('Редактировать')}
              </Button>
            )}
          </div>
          <ProfileCard data={data} />
        </div>
        <Modal
          isOpen={open}
          onClose={handleClose}
          isClosedFromBodyModal={isClosedFromBodyModal}
        >
          <Suspense fallback={<Loader />}>
            <EditableProfileModal onClose={setIsClosedFromBodyModal} />
          </Suspense>
        </Modal>
      </div>
    );
  }
);
