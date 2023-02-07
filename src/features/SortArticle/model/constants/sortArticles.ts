import { SortArticlesDirection, SortArticlesField } from 'features/SortArticle';
import { SelectOptions } from 'shared/ui/Select/ui/Select';

export const SortArticlesByFields: SelectOptions<SortArticlesField>[] = [
  {
    option: 'Дате создания',
    value: SortArticlesField.CREATED,
  },
  {
    option: 'Просмотрам',
    value: SortArticlesField.VIEWS,
  },
  {
    option: 'Названию',
    value: SortArticlesField.TITLE,
  },
];

export const SortArticlesDirections: SelectOptions<SortArticlesDirection>[] = [
  {
    option: 'Возрастанию',
    value: SortArticlesDirection.ASC,
  },
  {
    option: 'Убыванию',
    value: SortArticlesDirection.DESC,
  },
];
