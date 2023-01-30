import { ArticlesViewVariant } from 'entities/Article';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { classNames } from 'shared/lib/classNames';
import { Button, VariantButton } from 'shared/ui/Button/Button';
import { Icon, ICON_COLOR_VARIAN } from 'shared/ui/Icon/ui/Icon';

import classes from './ChangeView.module.scss';

interface changeViewProps {
  className?: string;
  view: ArticlesViewVariant;
  onChangeView: (view: ArticlesViewVariant) => void;
}

const ViewVariantList = [
  {
    view: ArticlesViewVariant.CARD,
    icon: TiledIcon,
  },
  {
    view: ArticlesViewVariant.LIST,
    icon: ListIcon,
  },
];

export const ChangeView = memo(
  ({ className, view, onChangeView }: changeViewProps) => (
    <div className={classNames(classes.ChangeView, [className])}>
      {ViewVariantList.map((variant) => (
        <Button
          key={variant.view}
          variant={VariantButton.CLEAR}
          onClick={() => onChangeView(variant.view)}
          className={classes.ButtonIcon}
        >
          <Icon
            Svg={variant.icon}
            variantColor={ICON_COLOR_VARIAN.INVERTED}
            key={variant.view}
            className={classNames(classes.ChangeViewIcon, [], {
              [classes.selected]: view === variant.view,
            })}
          />
        </Button>
      ))}
    </div>
  )
);
