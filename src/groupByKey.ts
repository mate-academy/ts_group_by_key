type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const itemsGroupedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey = item[key];

    if (!itemsGroupedByKey[itemKey]) {
      itemsGroupedByKey[itemKey] = [];
    }

    itemsGroupedByKey[itemKey].push(item);
  });

  return itemsGroupedByKey;
}
