import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';

import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageComponentProps {
  className?: string;
  src: string;
  title: string;
}

export const ArticleImageComponent = memo(
  ({ className, src, title }: ArticleImageComponentProps) => (
    <div className={classNames(classes.ArticleImageComponent, [className])}>
      <img src={src} alt={title} />
      <Text tag='p' variant={TextVarianEnum.PRIMARY} align='center'>
        {title}
      </Text>
    </div>
  )
);
