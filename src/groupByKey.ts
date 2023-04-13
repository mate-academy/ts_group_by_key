type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce(
    (hash: GroupsMap<T>, obj: T) => ({
      ...hash,
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    }),
    {},
  );
}
