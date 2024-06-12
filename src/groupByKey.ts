type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item & string,
): GroupsMap<Item> {
  const groupedObject: GroupsMap<Item> = {};

  for (const item of items) {
    const groupKey = item[key];

    const groupKeyStr =
      typeof groupKey === 'string' || typeof groupKey === 'number'
        ? String(groupKey)
        : '';

    if (groupKeyStr) {
      if (groupedObject[groupKeyStr]) {
        groupedObject[groupKeyStr].push(item);
      } else {
        groupedObject[groupKeyStr] = [item];
      }
    }
  }

  return groupedObject;
}
