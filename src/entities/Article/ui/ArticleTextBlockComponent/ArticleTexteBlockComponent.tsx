import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextComponentProps {
  className?: string;
  title: string;
  paragraphs: string[];
  vatiantTextColor?: TextVarianEnum;
}

export const ArticleTextComponent = memo(
  ({
    className,
    paragraphs,
    title,
    vatiantTextColor,
  }: ArticleTextComponentProps) => (
    <div className={classNames(classes.ArticleTextComponent, [className])}>
      <Text
        className={classes.title}
        align='left'
        tag='h3'
        variant={vatiantTextColor || TextVarianEnum.INVERTED}
      >
        {title}
      </Text>
      {paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          align='left'
          tag='p'
          variant={vatiantTextColor || TextVarianEnum.INVERTED}
          className={classes.paragraphs}
        >
          {paragraph}
        </Text>
      ))}
    </div>
  )
);
