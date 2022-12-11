import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextComponentProps {
  className?: string;
}

export const ArticleCodeComponent = memo(
  ({ className }: ArticleTextComponentProps) => (
    <div className={classNames(classes.ArticleCodeComponent, [className])}>
      <h1>ArticleTextComponent</h1>
    </div>
  )
);
