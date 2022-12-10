import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetails = memo(({ className }: ArticleDetailsProps) => (
  <div className={classNames(classes.ArticleDetails, [className])}>
    <h1>ArticleDetails page</h1>
  </div>
));

export default ArticleDetails;
