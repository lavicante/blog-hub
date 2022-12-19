import { ArticleDetailsComponent } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(classes.ArticleDetails, [className])}>
        <Text tag='h1' variant={TextVarianEnum.PRIMARY}>
          Статья не найдена!
        </Text>
      </div>
    );
  }

  return (
    <div className={classNames(classes.ArticleDetails, [className])}>
      <ArticleDetailsComponent id={id} />
      <CommentList
        comments={[
          {
            id: '1',
            text: 'Первый коммент',
            user: {
              id: 1,
              username: 'demirel',
            },
          },
          {
            id: '2',
            text: 'Второй коммент',
            user: {
              id: 1,
              username: 'demirel',
            },
          },
        ]}
        isLoading
      />
    </div>
  );
});

export default ArticleDetails;
