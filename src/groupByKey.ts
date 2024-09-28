type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  for (const item of items) {
    const value = String(item[key]);

    if (value in result) {
      result[value].push(item);
    } else {
      result[value] = [item];
    }
  }

  return result;
}
