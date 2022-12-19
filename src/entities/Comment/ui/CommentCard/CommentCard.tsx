import { Avatar } from 'shared/Avatar/ui/Avatar';
import { AVATAR_PLACEHOLDER } from 'shared/constants/common';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({
  className,
  comment,
  isLoading,
}: CommentCardProps) => {
  if (isLoading) {
    return (
      <Text tag='p' variant={TextVarianEnum.PRIMARY}>
        Загрузка комментариев...
      </Text>
    );
  }

  return (
    <div className={classNames(classes.CommentCard, [className])}>
      <div className={classes.header}>
        <Avatar
          className={classes.avatar}
          size={30}
          src={comment.user.avatar || AVATAR_PLACEHOLDER}
          alt={comment.user.username}
        />
        <Text tag='h5' variant={TextVarianEnum.PRIMARY}>
          {comment.user.username}
        </Text>
      </div>
      <Text align='left' tag='p' variant={TextVarianEnum.PRIMARY}>
        {comment.text}
      </Text>
    </div>
  );
};
