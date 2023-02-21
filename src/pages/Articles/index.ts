import Article from './ui/Articles/Articles';

export { fetchArticles } from './model/services/fetchArticles';
export { articlesActions, articlesReducer } from './model/slice/ArticlesSlice';
export type { ArticlesSchema } from './model/types/ArticlesSchema';

export default Article;
