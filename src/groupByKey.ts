type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, value) => {
    const groupKey = String(value[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(value);

    return acc;
  }, {});
}
