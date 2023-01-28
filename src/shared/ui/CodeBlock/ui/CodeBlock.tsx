import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import { classNames } from 'shared/lib/classNames';
import { Button, VariantButton } from 'shared/ui/Button/Button';

import classes from './CodeBlock.module.scss';

export interface CodeBlogProps {
  className?: string;
  code: string;
}

export const CodeBlock = ({ code, className }: CodeBlogProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => toast('Текст скопирован!'));
  }, [code]);
  return (
    <pre className={classNames(classes.CodeBlock, [className])}>
      <Button
        variant={VariantButton.CLEAR}
        onClick={onCopy}
        className={classes.copyBtn}
      >
        <CopyIcon className={classes.copyIcon} />
      </Button>
      <code>{code}</code>
    </pre>
  );
};
