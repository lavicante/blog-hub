import { ArticleList } from 'entities/Article';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';
import { ArticlesToolBar } from 'widgets/ArticlesToolBar';
import { Page } from 'widgets/Page/ui/Page';

import {
  getArticlesError,
  getArticlesLoading,
  getMounted,
  getSearch,
  getSortDirection,
  getSortField,
  getView,
} from '../../model/selectors/getArticlesInfo';
import { fetchArticles } from '../../model/services/fetchArticles';
import { fetchArticlesNextPage } from '../../model/services/fetchNextArticlesPage';
import {
  articlesActions,
  articlesReducer,
  getArticles,
} from '../../model/slice/ArticlesSlice';

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
  const isMounted = useSelector(getMounted);
  const sortField = useSelector(getSortField);
  const sortDirection = useSelector(getSortDirection);
  const search = useSelector(getSearch);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ page: 1, replace: true }));
  }, [dispatch]);

  const debouncedFetch = useDebounce(fetchData, 500);

  useEffect(() => {
    fetchData();
  }, [sortField, sortDirection, dispatch, fetchData]);

  useEffect(() => {
    debouncedFetch();
  }, [debouncedFetch, search]);

  useDynamicReducer(reducers);

  useInitialProject(() => {
    if (!isMounted) {
      dispatch(articlesActions.initView());
      dispatch(
        fetchArticles({
          page: 1,
        })
      );
    }
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
