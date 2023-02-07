type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!(groupKey in groupedItems)) {
      groupedItems[groupKey] = [];
    }

    groupedItems[groupKey].push(item);
  });

  return groupedItems;
}
