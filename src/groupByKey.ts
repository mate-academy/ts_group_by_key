type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  for (const item of items) {
    const keyResult = `${item[key]}`;

    if (!result[keyResult]) {
      result[keyResult] = [];
    }
    result[keyResult].push(item);
  }

  return result;
}
