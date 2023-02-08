import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticleDetailsPageRecomendation extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
