import './Loader.scss';

import { classNames } from 'shared/lib/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-facebook', [className])}>
    <div />
    <div />
    <div />
  </div>
);
