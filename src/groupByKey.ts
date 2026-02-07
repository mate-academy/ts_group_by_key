type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = String(item[key]);

    if (result[groupKey]) {
      result[groupKey].push(item);
    } else {
      result[groupKey] = [item];
    }
  });

  return result;
}
