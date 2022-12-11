import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageComponentProps {
  className?: string;
}

export const ArticleImageComponent = memo(
  ({ className }: ArticleImageComponentProps) => (
    <div className={classNames(classes.ArticleImageComponent, [className])}>
      <h1>ArticleCodeComponent</h1>
    </div>
  )
);
