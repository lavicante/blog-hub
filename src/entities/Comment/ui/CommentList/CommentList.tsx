import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;

  isError?: string;
}

export const CommentList = memo(
  ({ className, comments, isLoading, isError }: CommentListProps) => {
    if (isError) {
      return (
        <div className={classNames(classes.CommentList, [className])}>
          <Text align='center' tag='h3' variant={TextVarianEnum.ERROR}>
            Ошибка загрузки комментариев
          </Text>
        </div>
      );
    }
    return (
      <div className={classNames(classes.CommentList, [className])}>
        <Text
          className={classes.CommentList_header}
          align='left'
          tag='h3'
          variant={TextVarianEnum.PRIMARY}
        >
          Комментарии
        </Text>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Text tag='p' variant={TextVarianEnum.PRIMARY}>
            К этой статье комментариев нет. Будь первым!
          </Text>
        )}
      </div>
    );
  }
);
