type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((hash: GroupsMap<T>, obj) => (
    {
      ...hash, [String(obj[key])]: (hash[String(obj[key])] || []).concat(obj),
    }
  ), {} as GroupsMap<T>);
}
