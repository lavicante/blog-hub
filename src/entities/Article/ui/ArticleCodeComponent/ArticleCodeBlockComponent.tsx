import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { CodeBlock } from 'shared/ui/CodeBlock/ui/CodeBlock';

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
