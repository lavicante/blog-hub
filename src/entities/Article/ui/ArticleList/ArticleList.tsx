import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';

import { Article } from '../../model/types/article';
import classes from './ArticleList.module.scss';
import { ArticlesViewVariant } from 'entities/Article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticlesViewVariant;
  loading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(
  ({ className, articles, view, loading, target }: ArticleListProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(classes.ArticleList, [className])}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleListItem
              target={target}
              key={article.id}
              article={article}
              view={view}
            />
          ))
        ) : (
          <Text variant={TextVarianEnum.PRIMARY} tag='h3'>
            {t('Статей пока нет!')}
          </Text>
        )}
        {loading && (
          <Text tag='p' variant={TextVarianEnum.PRIMARY}>
            идет загрузка статей...
          </Text>
        )}
      </div>
    );
  }
);
