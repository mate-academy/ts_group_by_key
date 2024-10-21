type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const groupKey = item[key] as string;

    (result[groupKey] ??= []).push(item);

    return result;
  }, {} as GroupsMap<T>);
}
