import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesViewVariant } from 'entities/Article';

export interface ArticlesSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticlesViewVariant;

  limit?: number;
  page: number;
  canLoad: boolean;
}
