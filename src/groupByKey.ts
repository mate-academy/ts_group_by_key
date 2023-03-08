type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};
  const keysSet: Set<string> = new Set(items.map((item) => String(item[key])));
  const keys: Array<string> = Array.from(keysSet);

  keys.reduce((groupedItem, uniqKey): GroupsMap<T> => {
    groupedItems[uniqKey] = items.filter((item) => {
      return String(item[key]) === uniqKey;
    });

    return groupedItem;
  }, groupedItems);

  return groupedItems;
}
