// Ключ - страница, значение - позиция скролла
type ScrollType = Record<string, number>;

export interface ScrollSaveSchema {
  scroll: ScrollType;
}
