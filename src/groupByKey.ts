type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (const item of items) {
    const itemValue = String(item[key]);

    if (!groupedItems[itemValue]) {
      groupedItems[itemValue] = [];
    }

    groupedItems[itemValue].push(item);
  }

  return groupedItems;
}
