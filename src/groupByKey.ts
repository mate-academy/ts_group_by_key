type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const keyValue = String(item[key]);

    if (!groupedItems[keyValue]) {
      groupedItems[keyValue] = [];
    }

    groupedItems[keyValue].push(item);
  }

  return groupedItems;
}
