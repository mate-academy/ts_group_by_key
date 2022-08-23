type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = `${item[key]}`;

    if (!groupedItems[newKey]) {
      groupedItems[newKey] = [];
    }

    groupedItems[newKey].push(item);
  });

  return groupedItems;
}
