import { useTheme } from 'app/providers/ThemeProvider';
import { ArticleCodeComponent } from 'entities/Article/ui/ArticleCodeComponent/ArticleCodeBlockComponent';
import { ArticleImageComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTexteBlockComponent';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreateAtIcon from 'shared/assets/icons/calendar.svg';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Avatar } from 'shared/Avatar/ui/Avatar';
import { skeletonThemeColor } from 'shared/constants/skeletonsTheme';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { Icon } from 'shared/Icon/ui/Icon';
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
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
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

    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const renderBlocks = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextComponent
              className={classes.block}
              title={block.title}
              paragraphs={block.paragraphs}
            />
          );
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageComponent
              title={block.title}
              src={block.src}
              className={classes.block}
            />
          );
        case ArticleBlockType.CODE:
          return (
            <ArticleCodeComponent code={block.code} className={classes.block} />
          );
        default:
          return null;
      }
    }, []);

    if (isLoading) {
      return (
        <div
          className={classNames(classes.ArticleDetailsComponent, [className])}
        >
          <Sceleton width='100%' height='100%' />
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
        <div className={classes.block}>
          {article?.id && (
            <div className={classes.articleAvatar}>
              <Avatar src={article.img} alt={article.title} size={300} />
            </div>
          )}
          {article?.title && (
            <Text
              className={classes.title}
              tag='h1'
              variant={TextVarianEnum.PRIMARY}
              align='left'
            >
              {article.title}
            </Text>
          )}
          {article?.subtitle && (
            <Text
              className={classes.title}
              tag='h4'
              variant={TextVarianEnum.PRIMARY}
              align='left'
            >
              {article.subtitle}
            </Text>
          )}
          <div className={classes.views}>
            <Icon className={classes.viewsIcon} Svg={ViewsIcon} />
            <Text tag='span' variant={TextVarianEnum.PRIMARY}>
              {article?.views}
            </Text>
          </div>
          <div className={classes.createAt}>
            <Icon className={classes.createAtIcon} Svg={CreateAtIcon} />
            <Text tag='span' variant={TextVarianEnum.PRIMARY}>
              {article?.createdAt}
            </Text>
          </div>
        </div>
        <div className={classes.body}>{article?.blocks.map(renderBlocks)}</div>
      </div>
    );
  }
);
