type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentValue = String(item[key]);

    groupedItems[currentValue] = groupedItems[currentValue] || [];

    groupedItems[currentValue].push(item);
  });

  return groupedItems;
}
