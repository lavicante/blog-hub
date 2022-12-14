import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextComponentProps {
  className?: string;
  title: string;
  paragraphs: string[];
}

export const ArticleTextComponent = memo(
  ({ className, paragraphs, title }: ArticleTextComponentProps) => (
    <div className={classNames(classes.ArticleTextComponent, [className])}>
      <Text
        className={classes.title}
        align='left'
        tag='h3'
        variant={TextVarianEnum.PRIMARY}
      >
        {title}
      </Text>
      {paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          align='left'
          tag='p'
          variant={TextVarianEnum.PRIMARY}
        >
          {paragraph}
        </Text>
      ))}
    </div>
  )
);
