import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/Button/Button';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { Input } from 'shared/Input/ui/Input';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';

import { getCommentText } from '../../model/selectors/getCommentText/getCommentText';
import { getLoadingSendComment } from '../../model/selectors/getLoadingSendComment/getLoadingSendComment';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const textComment = useSelector(getCommentText);
    const loadingSendComment = useSelector(getLoadingSendComment);

    useDynamicReducer(reducers);

    const onChangeInput = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.addTextComment(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(textComment || '');
      dispatch(addCommentFormActions.addTextComment(''));
    }, [dispatch, onSendComment, textComment]);

    const buttonTitle = !textComment
      ? t('Начтните вводить комментарий!')
      : t('Нажмите, чтобы отправить');

    return (
      <div className={classNames(classes.AddCommentForm, [className])}>
        <Input
          onCange={onChangeInput}
          className={classes.AddCommentForm_input}
          value={textComment}
          placeholder={t('Введите текст комментария')}
        />
        <Button
          title={buttonTitle}
          disabled={loadingSendComment || !textComment}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    );
  }
);
