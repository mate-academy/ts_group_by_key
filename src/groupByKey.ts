type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  // write code here;
  const groupItems: GroupsMap<Item> = {};

  for (const item of items) {
    if (String(item[key]) in groupItems) {
      groupItems[String(item[key])].push(item);
    } else {
      groupItems[String(item[key])] = [item];
    }
  }

  return groupItems;
}
