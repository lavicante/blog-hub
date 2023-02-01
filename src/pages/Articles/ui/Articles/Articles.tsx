import { ArticleList, ArticlesViewVariant } from 'entities/Article';
import { ChangeView } from 'features/changeView';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';
import { Text, TextVarianEnum } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/ui/Page';

import {
  getArticlesError,
  getArticlesLoading,
  getMounted,
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

  const onChangeView = useCallback(
    (view: ArticlesViewVariant) => {
      dispatch(articlesActions.setView(view));
    },
    [dispatch]
  );

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
      <ChangeView view={view} onChangeView={onChangeView} />
      <ArticleList articles={articles} view={view} loading={isLoading} />
    </Page>
  );
});

export default Articles;
