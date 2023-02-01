import { ArticleDetailsComponent } from 'entities/Article';
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

import { addCommentFormService } from '../../model/services/addCommentFormService/addCommentformService';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComment: articleDetailsCommentsReducer,
};

const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useDynamicReducer(reducers);
  useInitialProject(() => {
    dispatch(fetchCommentByArticleId(id));
  });

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getLoadingComments);
  const isError = useSelector(getErrorComments);

  const onSubmitComment = useCallback(
    (value: string) => {
      console.log(value);
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
      <AddCommentForm onSendComment={onSubmitComment} />
      <CommentList comments={comments} isLoading={isLoading} />
    </Page>
  );
});

export default ArticleDetails;
