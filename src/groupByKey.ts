type GroupsMap<T> = Record<string, T[]>;

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!res[groupKey]) {
      res[groupKey] = [];
    }

    res[groupKey].push(item);
  }

  return res;
}
