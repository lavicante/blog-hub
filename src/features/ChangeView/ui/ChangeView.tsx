import { ArticlesViewVariant } from 'entities/Article';
import { articlesActions } from 'pages/Articles';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { Button, VariantButton } from 'shared/ui/Button/Button';
import { Icon, ICON_COLOR_VARIAN } from 'shared/ui/Icon/ui/Icon';

import { getView } from '../model/selectors/getView';
import classes from './ChangeView.module.scss';

interface changeViewProps {
  className?: string;
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

export const ChangeView = memo(({ className }: changeViewProps) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getView);
  const onChangeView = useCallback(
    (view: ArticlesViewVariant) => {
      dispatch(articlesActions.setView(view));
    },
    [dispatch]
  );
  return (
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
  );
});
