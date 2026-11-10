type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];
    const groupKey = String(item[key]);

    groupedItems[groupKey] = items.filter((el) => el[key] === value);
  }

  return groupedItems;
}
