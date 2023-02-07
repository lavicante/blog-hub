import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesViewVariant, ArticleType } from 'entities/Article';
import { SortArticlesDirection, SortArticlesField } from 'features/SortArticle';

export interface ArticlesSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticlesViewVariant;

  limit?: number;
  page: number;
  canLoad: boolean;

  sortField: SortArticlesField;

  direction: SortArticlesDirection;

  serach: string;

  type: ArticleType;
  _isMounted: boolean;
}
