import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVarianEnum } from 'shared/Text/Text';

import { Article, ArticlesViewVariant } from '../../model/types/article';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticlesViewVariant;
}

export const ArticleList = memo(
  ({ className, articles, view }: ArticleListProps) => {
    const { t } = useTranslation();
    return (
      <div className={classNames(classes.ArticleList, [className])}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleListItem key={article.id} article={article} view={view} />
          ))
        ) : (
          <Text variant={TextVarianEnum.PRIMARY} tag='h3'>
            {t('Статей пока нет!')}
          </Text>
        )}
      </div>
    );
  }
);
