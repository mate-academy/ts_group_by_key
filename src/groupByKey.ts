type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const itemsByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemValue = item[key];

    if (itemsByKey[itemValue as string] === undefined) {
      itemsByKey[itemValue as string] = [];
    }

    itemsByKey[itemValue as string].push(item);
  });

  return itemsByKey;
}
