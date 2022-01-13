type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (!groupedItems[itemKey]) {
      groupedItems[itemKey] = [];
    }

    groupedItems[itemKey].push(item);
  });

  return groupedItems;
}
