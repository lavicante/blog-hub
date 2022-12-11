import { Country } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';
import { Currency, CurrencySelect } from 'entities/Currency';
import { profileActions } from 'features/EditableProfileCard';
import { getValidateErrors } from 'features/EditableProfileCard/model/selectors/getValidateErrors/getValidateErrors';
import { Dispatch, memo, SetStateAction, useCallback, useMemo } from 'react';
import { Simulate } from 'react-dom/test-utils';
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
import error = Simulate.error;
import { toast } from 'react-toastify';

import { ValidationErrors } from '../../model/types/profile';

interface EditableProfileModalProps {
  className?: string;
  onClose?: Dispatch<SetStateAction<boolean>>;
}

const EditableProfileModal = memo(
  ({ className, onClose }: EditableProfileModalProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const validateErrors = useSelector(getValidateErrors);
    const dispatch = useAppDispatch();

    const validateErrorsMap = useMemo(
      () => ({
        [ValidationErrors.SERVER_ERROR]: t(
          'Ошибка сервера. Попробуйте перезагрузить страницу'
        ),
        [ValidationErrors.INCORECT_CITY]: t(
          'Введите город. Не менее 3-ёх символов'
        ),
        [ValidationErrors.INCORECT_AGE]: t('Некорректный возраст'),
        [ValidationErrors.INCORECT_USER_NAME]: t('Введите username'),
        [ValidationErrors.INCORECT_USER_DATA]: t('Введите имя и фамилию'),
      }),
      [t]
    );

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

    const changeAvatar = (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    };

    const changeCity = (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    };

    const onChangeCurrency = useCallback(
      (value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
      },
      [dispatch]
    );

    const onChangeCountry = useCallback(
      (value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
      },
      [dispatch]
    );

    const onSave = async () => {
      const {
        meta: { requestStatus },
      } = await dispatch(updateProfile());

      if (requestStatus === 'fulfilled') {
        toast.success('Профиль успешно обновлен!');
        onClose?.(true);
      } else {
        toast.error('Ошибка обновления профиля!');
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
        {validateErrors?.length > 0 &&
          validateErrors.map((error) => (
            <Text tag='span' variant={TextVarianEnum.ERROR}>
              {validateErrorsMap[error]}
            </Text>
          ))}
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

        <label htmlFor='avatar' className={classes.EditableProfileModal_label}>
          <Text tag='span' variant={TextVarianEnum.PRIMARY}>
            {t('Аватар')}
          </Text>
          <Input
            onCange={changeAvatar}
            id='avatar'
            value={profileData?.avatar || ''}
          />
        </label>

        <label htmlFor='city' className={classes.EditableProfileModal_label}>
          <Text tag='span' variant={TextVarianEnum.PRIMARY}>
            {t('Город')}
          </Text>
          <Input
            onCange={changeCity}
            id='city'
            value={profileData?.city || ''}
          />
        </label>

        <CurrencySelect
          className={classes.EditableProfileModal_select}
          value={profileData?.currency || ''}
          onChange={onChangeCurrency}
        />

        <CountrySelect
          className={classes.EditableProfileModal_select}
          value={profileData?.country || ''}
          onChange={onChangeCountry}
        />

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
