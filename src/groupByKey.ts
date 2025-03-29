type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, {});
}
