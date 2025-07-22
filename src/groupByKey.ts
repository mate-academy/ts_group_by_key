type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const groupKey: GroupsMap<Item> = {};

  for (const item of items) {
    if (String(item[key]) in groupKey) {
      groupKey[String(item[key])].push(item);
    } else {
      groupKey[String(item[key])] = [item];
    }
  }

  return groupKey;
}
