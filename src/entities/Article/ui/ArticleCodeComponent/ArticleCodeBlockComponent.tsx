import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeComponentProps {
  className?: string;
}

export const ArticleCodeComponent = memo(
  ({ className }: ArticleCodeComponentProps) => (
    <div className={classNames(classes.ArticleCodeComponent, [className])}>
      <h1>ArticleCodeComponent</h1>
    </div>
  )
);
