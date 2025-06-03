type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line max-len
export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
