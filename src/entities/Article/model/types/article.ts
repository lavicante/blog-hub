import { User } from 'entities/User';
import { ArticleType } from 'entities/Article/model/constants/article';

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface ArticleBlogBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlogBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlogBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlogBase {
  type: ArticleBlockType.TEXT;
  title: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleTextBlock
  | ArticleImageBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
  user: User;
}
