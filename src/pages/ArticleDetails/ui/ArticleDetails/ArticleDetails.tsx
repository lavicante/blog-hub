import { ArticleDetailsComponent } from 'entities/Article';
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
    </div>
  );
});

export default ArticleDetails;
