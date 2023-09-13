type GroupsMap<T> = {
  [key: string]: T[],
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((sum: GroupsMap<T>, obj) => ({
    ...sum,
    [obj[key] as string]: (sum[obj[key] as string] || []).concat(obj),
  }), {});
}
