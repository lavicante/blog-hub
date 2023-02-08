import {
  ArticleDetailsComponent,
  ArticleList,
  ArticlesViewVariant,
} from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import {
  getErrorComments,
  getLoadingComments,
} from 'pages/ArticleDetails/model/selectors/comments';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  getErrorFetchRecomendation,
  getLoadingRecomendation,
} from '../../model/selectors/getRecomendation';
import { addCommentFormService } from '../../model/services/addCommentformService';
import { fetchArticlesRecomendation } from '../../model/services/fetchArticlesRecomendation';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
  articleDetailsPageRecomendationReducer,
  getArticlesRecomendation,
} from '../../model/slices/articleDetailsPageRecomendationSlice';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComment: articleDetailsCommentsReducer,
  articelsDetailPageRecomendation: articleDetailsPageRecomendationReducer,
};

const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const recomendation = useSelector(getArticlesRecomendation.selectAll);
  const isLoadingRecomendation = useSelector(getLoadingRecomendation);
  const isErrorRecomendation = useSelector(getErrorFetchRecomendation);

  useDynamicReducer(reducers);
  useInitialProject(() => {
    dispatch(fetchCommentByArticleId(id));
    dispatch(fetchArticlesRecomendation());
  });

  const comments = useSelector(getArticleComments.selectAll);
  const isLoadingComments = useSelector(getLoadingComments);
  const isError = useSelector(getErrorComments);

  const onSubmitComment = useCallback(
    (value: string) => {
      dispatch(addCommentFormService(value));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <Page className={classNames(classes.ArticleDetails, [className])}>
        <Text tag='h1' variant={TextVarianEnum.PRIMARY}>
          Статья не найдена!
        </Text>
      </Page>
    );
  }

  return (
    <Page className={classNames(classes.ArticleDetails, [className])}>
      <ArticleDetailsComponent id={id} />
      <Text tag='h3' variant={TextVarianEnum.PRIMARY} align='left'>
        Рекомендуем к прочтению!
      </Text>
      <ArticleList
        target='_blank'
        className={classes.recommendation}
        articles={recomendation}
        view={ArticlesViewVariant.CARD}
      />
      <AddCommentForm onSendComment={onSubmitComment} />
      <CommentList comments={comments} isLoading={isLoadingComments} />
    </Page>
  );
});

export default ArticleDetails;
