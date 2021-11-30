type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortByValue = String(item[key]);

    if (!sortedItems[sortByValue]) {
      sortedItems[sortByValue] = [];
    }

    sortedItems[sortByValue].push(item);
  });

  return sortedItems;
}
