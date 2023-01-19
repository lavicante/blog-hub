import { ArticleTextComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTexteBlockComponent';
import { memo } from 'react';
import ViewIcon from 'shared/assets/icons/views.svg';
import { Avatar } from 'shared/Avatar/ui/Avatar';
import { Card } from 'shared/Card/ui/Card';
import { Icon, ICON_COLOR_VARIAN } from 'shared/Icon/ui/Icon';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import {
  Article,
  ArticlesViewVariant,
  ArticleTextBlock,
} from '../../model/types/article';
import classes from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticlesViewVariant;
}

export const ArticleListItem = memo(
  ({ className, view, article }: ArticleListItemProps) => {
    const textBlock = article.blocks.find(
      (block) => block.type === 'TEXT'
    ) as ArticleTextBlock;
    if (view === 'LIST') {
      return (
        <div
          className={classNames(classes.ArticleListItem, [
            className,
            classes[view],
          ])}
        >
          <Card>
            <div className={classes.headerArticle}>
              <Avatar src='' alt='' />
              <Text tag='span' variant={TextVarianEnum.SECONDARY}>
                {article.createdAt}
              </Text>
            </div>
            <div className={classes.infoWrapper}>
              <Text tag='h2' variant={TextVarianEnum.SECONDARY}>
                {article.title}
              </Text>
              <Text tag='p' variant={TextVarianEnum.SECONDARY}>
                {article.type.join(', ')}
              </Text>
            </div>
            <div className={classes.imageWrapper}>
              <img src={article.img} alt={article.title} />
            </div>
            <div className={classes.paragraphs}>
              {textBlock && (
                <ArticleTextComponent
                  title={textBlock.title}
                  paragraphs={textBlock.paragraphs}
                />
              )}
            </div>
          </Card>
        </div>
      );
    }

    if (view === 'CARD') {
      return (
        <div
          className={classNames(classes.ArticleListItem, [
            className,
            classes[view],
          ])}
        >
          <Card>
            <div className={classes.imageWrapper}>
              <img
                src={article.img}
                alt={article.title}
                className={classes.image}
              />
              <Text
                tag='span'
                variant={TextVarianEnum.PRIMARY}
                className={classes.createAt}
              >
                {article.createdAt}
              </Text>
            </div>
            <div className={classes.infoWrapper}>
              <div className={classes.info}>
                <Text
                  tag='p'
                  variant={TextVarianEnum.SECONDARY}
                  className={classes.typeArticle}
                  align='left'
                >
                  {article.type.join(', ')}
                </Text>
                <div className={classes.view}>
                  <Icon
                    Svg={ViewIcon}
                    className={classes.icon}
                    variantColor={ICON_COLOR_VARIAN.INVERTED}
                  />
                  <Text tag='span' variant={TextVarianEnum.SECONDARY}>
                    {article.views}
                  </Text>
                </div>
              </div>
              <Text
                tag='h2'
                className={classes.title}
                variant={TextVarianEnum.SECONDARY}
                align='left'
              >
                {article.title}
              </Text>
            </div>
          </Card>
        </div>
      );
    }

    return null;
  }
);
