import { AppPath } from 'app/routers/config/routerConfig';
import { AVATAR_PLACEHOLDER } from 'shared/constants/common';
import { classNames } from 'shared/lib/classNames';
import { AppLInk } from 'shared/ui/AppLink/ui/AppLInk';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { CommentsSkeleton } from 'shared/ui/Skeleton/ui/CommentsSkeleton';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';

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
      <div className={classNames(classes.CommentCard, [className])}>
        <CommentsSkeleton width={300} height='100%' />
      </div>
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
        <AppLInk to={`${AppPath.profile}${comment.user.id}`}>
          {comment.user.username}
        </AppLInk>
      </div>
      <Text align='left' tag='p' variant={TextVarianEnum.PRIMARY}>
        {comment.text}
      </Text>
    </div>
  );
};
