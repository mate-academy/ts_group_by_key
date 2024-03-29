type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = items.reduce(
    (hash: GroupsMap<T>, obj: T) => ({
      ...hash,
      [obj[key] as string]: (hash[obj[key] as string] || []).concat(obj),
    }),
    {} as GroupsMap<T>,
  );

  return result;
}
