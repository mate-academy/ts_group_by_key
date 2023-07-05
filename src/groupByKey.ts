type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[],
  key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = String(item[key]);

    result[groupKey] = result[groupKey] || [];
    result[groupKey].push(item);
  });

  return result;
}
