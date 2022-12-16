import { memo } from 'react';
import { CodeBlock } from 'shared/CodeBlock/ui/CodeBlock';
import { classNames } from 'shared/lib/classNames';

import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeComponentProps {
  className?: string;
  code: string;
}

export const ArticleCodeComponent = memo(
  ({ className, code }: ArticleCodeComponentProps) => (
    <div className={classNames(classes.ArticleCodeComponent, [className])}>
      <CodeBlock code={code} />
    </div>
  )
);
