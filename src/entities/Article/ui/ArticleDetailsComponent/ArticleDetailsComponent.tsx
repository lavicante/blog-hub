import { useTheme } from 'app/providers/ThemeProvider';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { Sceleton } from 'shared/Skeleton/ui/Skeleton';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import {
  getArticle,
  getError,
  getIsLoading,
} from '../../model/selectors/getArticle';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetails';
import classes from './ArticleDetailsComponent.module.scss';

interface ArticleDetailsComponentProps {
  id: string;
  className?: string;
}

const redusers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetailsComponent = memo(
  ({ className, id }: ArticleDetailsComponentProps) => {
    useDynamicReducer(redusers);
    const dispatch = useAppDispatch();
    const article = useSelector(getArticle);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const { theme } = useTheme();

    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    if (isLoading) {
      let backgroundColorSeleton = '#fbf4f4';
      let foregroundColorSceleton = '#0f0f0f';

      if (theme === 'dark') {
        backgroundColorSeleton = '#0f0f0f';
        foregroundColorSceleton = '#fbf4f4';
      }
      return (
        <div
          className={classNames(classes.ArticleDetailsComponent, [className])}
        >
          <Sceleton
            width='100%'
            height='100%'
            backgroundColor={backgroundColorSeleton}
            foregroundColor={foregroundColorSceleton}
          />
        </div>
      );
    }

    if (error) {
      return (
        <div
          className={classNames(classes.ArticleDetailsComponent, [className])}
        >
          <Text variant={TextVarianEnum.ERROR} tag='h1'>
            Произошла ошибка при загрузки статьи!
          </Text>
        </div>
      );
    }

    return (
      <div className={classNames(classes.ArticleDetailsComponent, [className])}>
        <h1>ArticleDetailsComponent</h1>
      </div>
    );
  }
);
