type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (const item of items) {
    const value = String(item[key]);

    if (!groupedItems[value]) {
      groupedItems[value] = [];
    }

    groupedItems[value].push(item);
  }

  return groupedItems;
}
