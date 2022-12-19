import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({
  className,
  comments,
  isLoading,
}: CommentListProps) => (
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
        <CommentCard comment={comment} isLoading={isLoading} />
      ))
    ) : (
      <Text tag='p' variant={TextVarianEnum.PRIMARY}>
        К этой статье комментариев нет. Будь первым!
      </Text>
    )}
  </div>
);
