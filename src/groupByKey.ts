type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currentKey = String(item[key]);

    if (!groupedItems[currentKey]) {
      groupedItems[currentKey] = [];
    }

    groupedItems[currentKey].push(item);
  });

  return groupedItems;
}
