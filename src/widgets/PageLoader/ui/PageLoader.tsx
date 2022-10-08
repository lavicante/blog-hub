import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/Loader/ui/Loader';

import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(classes.PageLoader, [className])}>
    <Loader />
  </div>
);
