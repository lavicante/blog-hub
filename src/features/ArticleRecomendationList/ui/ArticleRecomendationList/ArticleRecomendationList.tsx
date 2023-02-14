import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';
import { ArticleList, ArticlesViewVariant } from 'entities/Article';
import { useGetArticlesRecommendationListQuery } from '../../api/query/getArticlesRecomendation';
import { LIMIT_ARTICLES } from '../../model/constants/limit';
import classes from './ArticleRecommendationList.module.scss';

interface ArticleRecomendationListProps {
  className?: string;
}

export const ArticleRecomendationList = memo(
  (props: ArticleRecomendationListProps) => {
    const {
      data: articles,
      isLoading,
      error,
    } = useGetArticlesRecommendationListQuery(LIMIT_ARTICLES);
    const { className } = props;
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <Text variant={TextVarianEnum.PRIMARY} tag={'p'}>
          Загружаем рекомендации
        </Text>
      );
    }

    return (
      <VStack gap={'8'} className={classNames('', [className])}>
        <Text tag='h3' variant={TextVarianEnum.PRIMARY} align='left'>
          Рекомендуем к прочтению!
        </Text>
        <ArticleList
          className={classes.ArticleRecommendationList}
          target='_blank'
          articles={articles}
          view={ArticlesViewVariant.CARD}
        />
      </VStack>
    );
  }
);
