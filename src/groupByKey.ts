type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!groupedItems[groupKey]) {
      groupedItems[groupKey] = [];
    }
    groupedItems[groupKey].push(item);
  }

  return groupedItems;
}
