import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './Articles.module.scss';

interface ArticlesProps {
  className?: string;
}

const Articles = memo(({ className }: ArticlesProps) => (
  <div className={classNames(classes.Atricles, [className])}>
    <h1>Articles page</h1>
  </div>
));

export default Articles;
