import { AppPath } from 'app/routers/config/routerConfig';
import { ArticleTextComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTexteBlockComponent';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import ViewIcon from 'shared/assets/icons/views.svg';
import { classNames } from 'shared/lib/classNames';
import { AppLInk, AppLinkVariant } from 'shared/ui/AppLink/ui/AppLInk';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Card } from 'shared/ui/Card/ui/Card';
import { Icon, ICON_COLOR_VARIAN } from 'shared/ui/Icon/ui/Icon';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';

import { Article, ArticleTextBlock } from '../../model/types/article';
import classes from './ArticleListItem.module.scss';
import { ArticlesViewVariant } from 'entities/Article';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticlesViewVariant;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
  ({ className, view, article, target }: ArticleListItemProps) => {
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
              <div className={classes.userInfo}>
                <Avatar
                  className={classes.avatar}
                  src={article.user.avatar || ''}
                  alt={article.user.username}
                  size={40}
                />
                <Text tag='p' variant={TextVarianEnum.SECONDARY}>
                  <AppLInk to={`${AppPath.profile}${article.user.id}`}>
                    <Text
                      tag='p'
                      align='left'
                      variant={TextVarianEnum.SECONDARY}
                    >
                      {article.user.username}
                    </Text>
                  </AppLInk>
                </Text>
              </div>

              <Text tag='span' variant={TextVarianEnum.SECONDARY}>
                {article.createdAt}
              </Text>
            </div>
            <div className={classes.infoWrapper}>
              <Text
                className={classes.title}
                tag='h2'
                variant={TextVarianEnum.SECONDARY}
                align='left'
              >
                {article.title}
              </Text>
              <Text
                className={classes.typeArticle}
                tag='p'
                variant={TextVarianEnum.SECONDARY}
                align='left'
              >
                {article.type.join(', ')}
              </Text>
            </div>
            <div className={classes.imageWrapper}>
              <img
                className={classes.poster}
                src={article.img}
                alt={article.title}
              />
            </div>
            <div className={classes.paragraphs}>
              {textBlock && (
                <ArticleTextComponent
                  title={textBlock.title}
                  paragraphs={textBlock.paragraphs}
                  vatiantTextColor={TextVarianEnum.SECONDARY}
                />
              )}
            </div>
            <div className={classes.footer}>
              <AppLInk
                target={target}
                to={`${AppPath.articlesDetails}${article.id}`}
                variant={AppLinkVariant.BUTTON}
                className={classes.readMoreBtn}
              >
                Читать дальше
              </AppLInk>
              <div className={classes.countView}>
                <Text
                  tag='span'
                  variant={TextVarianEnum.SECONDARY}
                  className={classes.view}
                >
                  {article.views}
                </Text>
                <Icon
                  Svg={ViewIcon}
                  variantColor={ICON_COLOR_VARIAN.INVERTED}
                />
              </div>
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
          <AppLInk
            target={target}
            to={`${AppPath.articlesDetails}${article.id}`}
            className={classes.readMoreBtn}
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
          </AppLInk>
        </div>
      );
    }

    return null;
  }
);
