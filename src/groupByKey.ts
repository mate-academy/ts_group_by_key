type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const groupedObject: GroupsMap<Item> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (groupedObject[groupKey]) {
      groupedObject[groupKey].push(item);
    } else {
      groupedObject[groupKey] = [item];
    }
  }

  return groupedObject;
}
