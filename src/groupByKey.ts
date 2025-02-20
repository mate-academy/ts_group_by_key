type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
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
