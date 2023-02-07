import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';
import { ArticlesToolBar } from 'widgets/ArticlesToolBar';
import { Page } from 'widgets/Page/ui/Page';

import {
  getArticlesError,
  getArticlesLoading,
  getMounted,
  getView,
} from '../../model/selectors/getArticlesInfo';
import { fetchInitArticles } from '../../model/services/fetchInitArticles';
import { fetchArticlesNextPage } from '../../model/services/fetchNextArticlesPage';
import { articlesReducer, getArticles } from '../../model/slice/ArticlesSlice';

interface ArticlesProps {
  className?: string;
}

const reducers: ReducersList = {
  articles: articlesReducer,
};

const Articles = memo(({ className }: ArticlesProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesLoading);
  const isError = useSelector(getArticlesError);
  const view = useSelector(getView);
  const [searchParams] = useSearchParams();

  useDynamicReducer(reducers);

  useInitialProject(() => {
    dispatch(fetchInitArticles(searchParams));
  });

  const fetchNextPage = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  if (isError) {
    return (
      <Text variant={TextVarianEnum.PRIMARY} tag='p'>
        Ошибка загрузки!
      </Text>
    );
  }

  return (
    <Page
      callbackEndScroll={fetchNextPage}
      className={classNames('', [className])}
    >
      <ArticlesToolBar />
      <ArticleList articles={articles} view={view} loading={isLoading} />
    </Page>
  );
});

export default Articles;
