import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';

export const getTypeArticle = (state: StateSchema) =>
  state.articles?.type ?? ArticleType.ALL;
