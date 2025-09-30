type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((obj, item) => {
    const groupKey = String(item[key]);

    if (!obj[groupKey]) {
      obj[groupKey] = [];
    }

    obj[groupKey].push(item);

    return obj;
  }, {} as GroupsMap<T>);
}
