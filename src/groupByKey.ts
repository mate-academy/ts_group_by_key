type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.map((item) => {
    const groupingKey = String(item[key]);

    if (!groupedItems[groupingKey]) {
      groupedItems[groupingKey] = [];
    }

    groupedItems[groupingKey].push(item);

    return groupedItems;
  });

  return groupedItems;
}
