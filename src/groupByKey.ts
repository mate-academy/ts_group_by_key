type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = `${item[key]}`;

    if (groupedItems[groupKey] === undefined) {
      groupedItems[groupKey] = [];
    }

    groupedItems[groupKey].push(item);
  });

  return groupedItems;
}
