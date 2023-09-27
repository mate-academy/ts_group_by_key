type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!sortedItems[itemKey]) {
      sortedItems[itemKey] = [];
    }

    sortedItems[itemKey].push(item);
  });

  return sortedItems;
}
