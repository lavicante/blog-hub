import { ArticleDetailsComponent } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import {
  getErrorComments,
  getLoadingComments,
} from 'pages/ArticleDetails/model/selectors/comments';
import { fetchCommentByArticleId } from 'pages/ArticleDetails/model/services/fetchCommentByArticleId';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  ReducersList,
  useDynamicReducer,
} from 'shared/hooks/useDynamicReducer/useDynamicReducer';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/useAppDispatch';
import { useInitialProject } from 'shared/lib/hooks/useInitialProject/useInitialProject';
import { Text, TextVarianEnum } from 'shared/Text/Text';

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

  if (!id) {
    return (
      <div className={classNames(classes.ArticleDetails, [className])}>
        <Text tag='h1' variant={TextVarianEnum.PRIMARY}>
          Статья не найдена!
        </Text>
      </div>
    );
  }

  return (
    <div className={classNames(classes.ArticleDetails, [className])}>
      <ArticleDetailsComponent id={id} />
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
});

export default ArticleDetails;
