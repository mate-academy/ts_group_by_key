type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItemsByGroup: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemGroup = String(item[key]);

    if (!(itemGroup in sortedItemsByGroup)) {
      sortedItemsByGroup[itemGroup] = [];
    }

    sortedItemsByGroup[itemGroup].push(item);
  });

  return sortedItemsByGroup;
}
