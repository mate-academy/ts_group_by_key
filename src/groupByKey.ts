type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!sortedItems[value]) {
      sortedItems[value] = [];
    }

    sortedItems[value].push(item);
  });

  return sortedItems;
}
