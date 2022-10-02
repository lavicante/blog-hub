type Mode = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  additional?: string[],
  mods?: Mode
): string => {
  if (!additional && !mods) return cls;

  if (additional && !mods) {
    return [cls, ...additional].join(' ');
  }

  if (!additional && mods) {
    return [
      cls,
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
    ].join(' ');
  }

  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
