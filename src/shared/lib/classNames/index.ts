export type Mode = Record<string, boolean | string | undefined>;

export const classNames = (
  cls: string,
  additional?: Array<string | undefined>,
  mods?: Mode
): string => {
  if (!additional && mods) {
    return [
      cls,
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
    ].join(' ');
  }

  if (additional && !mods) {
    return [cls, ...additional].filter(Boolean).join(' ');
  }

  if (additional && mods) {
    return [
      cls,
      ...additional,
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
    ]
      .filter(Boolean)
      .join(' ');
  }

  return cls;
};
