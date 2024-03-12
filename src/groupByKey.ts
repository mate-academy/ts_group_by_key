type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const itemsByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemValue = item[key as keyof T];

    if (itemsByKey[itemValue as keyof GroupsMap<T>] === undefined) {
      itemsByKey[itemValue as keyof GroupsMap<T>] = [];
    }

    itemsByKey[itemValue as keyof GroupsMap<T>].push(item);
  });

  return itemsByKey;
}
