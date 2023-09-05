type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItemsByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyToSort = String(item[key]);

    if (!(keyToSort in sortedItemsByKey)) {
      sortedItemsByKey[keyToSort] = [];
    }

    sortedItemsByKey[keyToSort].push(item);
  });

  return sortedItemsByKey;
}
