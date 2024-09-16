type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item extends Record<string, any>>(
  items: Item[],
  key: string,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  for (const item of items) {
    const groupKey: string = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}
