type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T)
  : GroupsMap<T> {
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyToSort = `${item[key]}`;

    if (!sortedItems[keyToSort]) {
      sortedItems[keyToSort] = [];
    }

    sortedItems[keyToSort].push(item);
  });

  return sortedItems;
}
